import { IBridgeMain } from "../interface";
import { NoneCameraErr } from "../class/Errors/NoneCameraErr";
import { NoneCanvasErr } from "../class/Errors/NoneCanvasErr";
import { NoneRendererErr } from "../class/Errors/NoneRendererErr";
import { SetSceneBackgroundColor } from "./methods/SetSceneBackgroundColor";
import SetLight from "./methods/SetLight";
import SetCamera from "./methods/SetCamera";
import SetControls from "./methods/SetControls";
import SetPhysicalEngine from "./methods/SetPhysicalEngine";
import SetRaycaster from "./methods/SetRaycaster";
import { Clock } from "three";
import { cm1, cm2 } from "./common";
import { SetRenderer } from "./methods/SetRenderer";
import { PreventDragClick } from "@/libs/PreventDragClick";
import gsap from "gsap";
import { Floor } from "../class/Floor";
import { Pillar } from "../class/Pillar";
import { Bar } from "../class/Bar";
import { SideLight } from "../class/SideLight";
import { Glass } from "../class/Glass";
import { Player } from "../class/Player";

export class Main {
  objects: any[] = [];
  glassUnitSize: number = 1.2; // 유리판 크기
  numberOfGlass: number = 10; // 유리판 개수
  clock: Clock;
  fail: boolean = false;
  onReplay: boolean = false;
  jumping: boolean = false;

  constructor({ canvas }: IBridgeMain) {
    console.log("*** BridgeMain Constructor Start ");
    const normalSound = new Audio();
    normalSound.src = "/sounds/glass-break.flac";
    const strongSound = new Audio();
    strongSound.src = "/sounds/glass-hit.wav";

    const sounds = {
      normal: normalSound,
      strong: strongSound,
    };

    this.clock = new Clock();

    try {
      if (!canvas) throw new NoneCanvasErr();

      const renderer = SetRenderer(canvas);
      if (!renderer) throw new NoneRendererErr();

      const { camera, camera2 } = SetCamera();
      if (!camera) throw new NoneCameraErr();

      SetLight();

      SetSceneBackgroundColor();

      const controls = SetControls({ camera, renderer });

      SetPhysicalEngine();

      const floor = new Floor({
        name: "floor",
      });

      // 기둥
      const pillar1 = new Pillar({
        name: "pillar",
        x: 0,
        y: 5.5,
        z: -this.glassUnitSize * 12 - this.glassUnitSize / 2,
      });
      const pillar2 = new Pillar({
        name: "pillar",
        x: 0,
        y: 5.5,
        z: this.glassUnitSize * 12 + this.glassUnitSize / 2,
      });
      this.objects.push(pillar1, pillar2);

      // 바
      const bar1 = new Bar({ name: "bar", x: -1.6, y: 10.3, z: 0 });
      const bar2 = new Bar({ name: "bar", x: -0.4, y: 10.3, z: 0 });
      const bar3 = new Bar({ name: "bar", x: 0.4, y: 10.3, z: 0 });
      const bar4 = new Bar({ name: "bar", x: 1.6, y: 10.3, z: 0 });

      const sideLights: SideLight[] = [];
      for (let i = 0; i < 49; i++) {
        sideLights.push(
          new SideLight({
            name: "sideLight",
            container: bar1.mesh,
            z: i * 0.5 - this.glassUnitSize * 10,
          })
        );
      }
      for (let i = 0; i < 49; i++) {
        sideLights.push(
          new SideLight({
            name: "sideLight",
            container: bar4.mesh,
            z: i * 0.5 - this.glassUnitSize * 10,
          })
        );
      }

      // 유리판
      let glassTypeNumber = 0;
      let glassTypes: ("normal" | "strong")[] = [];
      const glassZ: number[] = [];

      for (let i = 0; i < this.numberOfGlass; i++) {
        glassZ.push(-(i * this.glassUnitSize * 2 - this.glassUnitSize * 9));
      }
      for (let i = 0; i < this.numberOfGlass; i++) {
        glassTypeNumber = Math.round(Math.random());
        // console.log("glassTypeNumber : ", glassTypeNumber);
        switch (glassTypeNumber) {
          case 0:
            glassTypes = ["normal", "strong"];
            break;
          case 1:
            glassTypes = ["strong", "normal"];
            break;
        }

        const glass1 = new Glass({
          step: i + 1,
          name: `glass-${glassTypes[0]}`,
          x: -1,
          y: 10.5,
          z: glassZ[i],
          type: glassTypes[0],
          cannonMaterial: cm1.glassMaterial,
          sounds: sounds,
        });

        const glass2 = new Glass({
          step: i + 1,
          name: `glass-${glassTypes[1]}`,
          x: 1,
          y: 10.5,
          z: glassZ[i],
          type: glassTypes[1],
          cannonMaterial: cm1.glassMaterial,
          sounds: sounds,
        });

        this.objects.push(glass1, glass2);
      }
      const player = new Player({
        name: "player",
        x: 0,
        y: 10.9,
        z: 13,
        rotationY: Math.PI,
        cannonMaterial: cm1.playerMaterial,
        mass: 30,
      });
      this.objects.push(player);

      const { mouse, raycaster } = SetRaycaster();
      const checkIntersects = () => {
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(cm1.scene.children);
        for (const item of intersects) {
          checkClickedObject(item.object);
          break;
        }
      };
      const checkClickedObject = (mesh: any) => {
        console.log("cm2.step : ", cm2.step);
        if (mesh.name.indexOf("glass") >= 0) {
          // 유리판을 클릭했을 때
          if (this.jumping || this.fail) return;

          if (mesh.step - 1 === cm2.step) {
            player.actions[2].stop();
            player.actions[2].play();
            this.jumping = true;
            cm2.step++;

            switch (mesh.glassType) {
              case "normal":
                console.log("normal!");
                setTimeout(() => {
                  this.fail = true;
                  player.actions[0].stop();
                  player.actions[1].play();
                  sideLights.forEach(item => {
                    item.turnOff();
                  });

                  setTimeout(() => {
                    this.onReplay = true;
                    player.cannonBody!.position.y = 9;

                    setTimeout(() => {
                      this.onReplay = false;
                    }, 3000);
                  }, 2000);
                }, 700);
                break;
              case "strong":
                console.log("strong!");
                break;
            }

            setTimeout(() => {
              this.jumping = false;
            }, 1000);

            gsap.to(player.cannonBody!.position, {
              duration: 1,
              x: mesh.position.x,
              z: glassZ[cm2.step - 1],
            });
            gsap.to(player.cannonBody!.position, {
              duration: 0.4,
              y: 12,
            });

            // 클리어!
            if (cm2.step === this.numberOfGlass && mesh.name === "glass-strong") {
              console.log("클리어!", mesh.name);
              setTimeout(() => {
                player.actions[2].stop();
                player.actions[2].play();

                gsap.to(player.cannonBody!.position, {
                  duration: 1,
                  x: 0,
                  z: -14,
                });
                gsap.to(player.cannonBody!.position, {
                  duration: 0.4,
                  y: 12,
                });

                alert("클리어!");
              }, 1500);
            }
          }
        }
      };
      const Draw = () => {
        const delta = this.clock.getDelta();

        if (cm1.mixer) cm1.mixer.update(delta);

        // cm1.world.step(1/60, delta, 3);
        // 화면 주사율에 따라 다르게 처리
        let cannonStepTime = 1 / 60;
        if (delta < 0.012) cannonStepTime = 1 / 120;
        cm1.world.step(cannonStepTime, delta, 3);

        this.objects.forEach(item => {
          if (item.cannonBody) {
            if (item.name === "player") {
              if (item.modelMesh) {
                item.modelMesh.position.copy(item.cannonBody.position);
                if (this.fail) item.modelMesh.quaternion.copy(item.cannonBody.quaternion);
              }
              item.modelMesh.position.y += 0.15;
            } else {
              item.mesh.position.copy(item.cannonBody.position);
              item.mesh.quaternion.copy(item.cannonBody.quaternion);

              if (item.modelMesh) {
                item.modelMesh.position.copy(item.cannonBody.position);
                item.modelMesh.quaternion.copy(item.cannonBody.quaternion);
              }
            }
          }
        });

        controls.update();

        if (!this.onReplay) {
          renderer.render(cm1.scene, camera);
        } else {
          renderer.render(cm1.scene, camera2);
          camera2.position.x = player.cannonBody!.position.x;
          camera2.position.z = player.cannonBody!.position.z;
        }

        renderer.setAnimationLoop(Draw);
      };
      const setSize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(cm1.scene, camera);
      };

      // 이벤트
      const preventDragClick = new PreventDragClick(canvas);
      window.addEventListener("resize", setSize);
      canvas.addEventListener("click", e => {
        if (preventDragClick.mouseMoved) return;
        mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
        mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);
        checkIntersects();
      });
      Draw();
    } catch (error) {
      console.log("Error :", error);
    }
  }
}
