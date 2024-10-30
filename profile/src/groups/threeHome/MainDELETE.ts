import { Clock, Raycaster, Scene, Vector2, Vector3 } from "three";
import { ThemeCodeType } from "../theme/Interfaces";
import { Dispatch, SetStateAction } from "react";
import { colorEnum, Colors } from "./constants";
import MethodsDELETE from "./MethodsDELETE";

interface MainProps {
  canvas: HTMLCanvasElement | null;
  ThemeCode: ThemeCodeType;
  spotEvent: { open: Dispatch<SetStateAction<number>>; close: () => void };
}

class MainDELETE {
  constructor({ canvas, ThemeCode, spotEvent }: MainProps) {
    const colors = Colors[colorEnum[ThemeCode]];
    const { MeshShowHide, SetRenderer, SetCamera, SetLight, CreateMeshes } =
      new MethodsDELETE();

    try {
      if (!canvas) return;
      const renderer = SetRenderer(canvas);

      const scene = new Scene();

      const { camera, cameraPosition } = SetCamera(scene);

      const { ambientLight, directionalLight } = SetLight(scene);

      const {
        Intro,
        introText,
        introSpot,
        Me,
        meText,
        meSpot,
        adminSpot,
        adminText,
        Admin,
        boardSpot,
        boardText,
        Board,
        skillSpot,
        skillText,
        Skill,
        player,
        pointerMesh,
        meshes,
      } = CreateMeshes({ scene, colors });

      const raycaster = new Raycaster();
      let mouse = new Vector2();
      let destinationPoint = new Vector3();
      let angle = 0;
      let isPressed = false; // 마우스를 누르고 있는 상태

      // 그리기
      const clock = new Clock();

      const draw = () => {
        // console.log("🚀 ~ file: Main.ts:222 ~ Main ~ draw ~ draw:");

        const delta = clock.getDelta();

        if (player.mixer) player.mixer.update(delta);

        if (player.mesh) {
          camera.lookAt(player.mesh.position);
        }

        if (player.mesh) {
          if (isPressed) {
            raycasting();
          }

          if (player.moving) {
            // 걸어가는 상태
            angle = Math.atan2(
              destinationPoint.z - player.mesh.position.z,
              destinationPoint.x - player.mesh.position.x
            );
            player.mesh.position.x += Math.cos(angle) * 0.05;
            player.mesh.position.z += Math.sin(angle) * 0.05;

            camera.position.x = cameraPosition.x + player.mesh.position.x;
            camera.position.z = cameraPosition.z + player.mesh.position.z;

            if (player.actions) {
              player.actions[0].stop();
              player.actions[1].play();
            }

            if (
              Math.abs(destinationPoint.x - player.mesh.position.x) < 0.03 &&
              Math.abs(destinationPoint.z - player.mesh.position.z) < 0.03
            ) {
              player.moving = false;
              // console.log("멈춤");
            }

            MeshShowHide({
              mesh: Intro,
              spotMesh: introSpot.mesh,
              player,
              camera,
              meshShowPositionY: 1,
              spotEvent,
              spotNum: 1,
              outColors: colors.tertiary,
            });

            MeshShowHide({
              mesh: Me,
              spotMesh: meSpot.mesh,
              player,
              camera,
              meshShowPositionY: 0.1,
              spotEvent,
              spotNum: 2,
              outColors: colors.tertiary,
            });

            MeshShowHide({
              mesh: Board,
              spotMesh: boardSpot.mesh,
              player,
              camera,
              meshShowPositionY: 0,
              spotEvent,
              spotNum: 3,
              outColors: colors.tertiary,
            });

            MeshShowHide({
              mesh: Skill,
              spotMesh: skillSpot.mesh,
              player,
              camera,
              meshShowPositionY: 1,
              spotEvent,
              spotNum: 4,
              outColors: colors.tertiary,
            });

            MeshShowHide({
              mesh: Admin,
              spotMesh: adminSpot.mesh,
              player,
              camera,
              meshShowPositionY: 1.3,
              spotEvent,
              spotNum: 5,
              outColors: colors.tertiary,
            });
          } else {
            // 서 있는 상태

            if (player.actions) {
              player.actions[1].stop();
              player.actions[0].play();
            }
          }
        }

        renderer.render(scene, camera);
        renderer.setAnimationLoop(draw);
      };

      const checkIntersects = () => {
        // raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(meshes);
        // console.log("checkIntersects!!! : ", intersects);

        for (const item of intersects) {
          if (item.object.name === "floor") {
            destinationPoint.x = item.point.x;
            destinationPoint.y = 0.3;
            destinationPoint.z = item.point.z;
            player.mesh.lookAt(destinationPoint);

            // console.log(item.point)
            player.moving = true;

            pointerMesh.position.x = destinationPoint.x;
            pointerMesh.position.z = destinationPoint.z;
          }
          break;
        }
      };

      const setSize = () => {
        camera.left = -(window.innerWidth / window.innerHeight);
        camera.right = window.innerWidth / window.innerHeight;
        camera.top = 1;
        camera.bottom = -1;

        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      };

      // 이벤트
      window.addEventListener("resize", setSize);

      // 마우스 좌표를 js에 맞게 변환
      const calculateMousePosition = (e: any) => {
        mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
        mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);

        // console.log("mouse : ", mouse);
      };

      // 변환된 마우스 좌표를 이용해 래이캐스팅
      const raycasting = () => {
        raycaster.setFromCamera(mouse, camera);
        checkIntersects();
      };

      // 마우스 이벤트
      canvas.addEventListener("mousedown", (e) => {
        isPressed = true;
        calculateMousePosition(e);
      });
      canvas.addEventListener("mouseup", () => {
        isPressed = false;
      });
      canvas.addEventListener("mousemove", (e) => {
        if (isPressed) {
          calculateMousePosition(e);
        }
      });

      // 터치 이벤트
      canvas.addEventListener("touchstart", (e) => {
        isPressed = true;
        calculateMousePosition(e.touches[0]);
      });
      canvas.addEventListener("touchend", () => {
        isPressed = false;
      });
      canvas.addEventListener("touchmove", (e) => {
        if (isPressed) {
          calculateMousePosition(e.touches[0]);
        }
      });

      draw();
    } catch (error) {
      console.log("error : ", error);
    }
  }
}

export default MainDELETE;
