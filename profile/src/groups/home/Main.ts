import { Clock } from "three";
import { ThemeCodeType } from "../theme/Interfaces";
import Methods from "./Methods";

interface MainProps {
  canvas: HTMLCanvasElement | null;
  ThemeCode: ThemeCodeType;
}

class Main {
  constructor({ ThemeCode, canvas }: MainProps) {
    // console.log("*** Home Main.ts Start");

    if (!canvas) return;
    const { BearMe, ambientLight, camera, renderer, scene } = new Methods(canvas, ThemeCode);

    // dragControls.addEventListener("dragstart", e => {
    //   console.log(e.object.name);
    // });

    // 그리기
    const clock = new Clock();

    function animate() {
      const delta = clock.getDelta();

      if (BearMe.mixer) BearMe.mixer.update(delta);

      // orbitControls.update();

      renderer.render(scene, camera);
      renderer.setAnimationLoop(animate);
    }

    animate();
  }
}

export default Main;
