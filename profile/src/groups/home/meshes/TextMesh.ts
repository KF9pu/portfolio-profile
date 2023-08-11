import { Mesh, MeshBasicMaterial, MeshStandardMaterial, Scene, TextureLoader, MathUtils } from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

interface TextMeshProps {
  text: string;
  size: number;
  scene: Scene;
  position: { x: number; z: number };
}
export class TextMesh {
  mesh?: Mesh<TextGeometry, MeshStandardMaterial>;

  constructor({ text, size, scene, position: { x, z } }: TextMeshProps) {
    console.log(`TextMesh ${text} create`);
    const frontLoader = new FontLoader();

    frontLoader.load("/fonts/HakgyoansimBunpilR.json", font => {
      console.log("load ??? ", font);
      const geometrie = new TextGeometry(text, {
        font,
        size: 0.3,
        height: 0.05,
        curveSegments: 1,
        bevelEnabled: true,
        bevelThickness: 0.0001,
        bevelSize: 0.005,
        bevelOffset: 0.005,
        bevelSegments: 24,
      });

      const material = new MeshStandardMaterial({
        color: "#000",
        roughness: 0.3,
        metalness: 0.7,
      });

      this.mesh = new Mesh(geometrie, material);

      this.mesh.position.set(x - 0.8, 0.01, z + 0.7);
      this.mesh.rotateX(MathUtils.degToRad(-60));
      scene.add(this.mesh);
    });
  }
}
