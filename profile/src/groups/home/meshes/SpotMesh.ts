import { CircleGeometry, Mesh, MeshStandardMaterial, PlaneGeometry, Scene } from "three";

interface SpotMeshProps {
  name: string;
  scene: Scene;
  position: { x: number; z: number };
}

class SpotMesh {
  mesh: Mesh<CircleGeometry, MeshStandardMaterial>;
  constructor({ name, scene, position: { x, z } }: SpotMeshProps) {
    const geometry = new CircleGeometry(2, 32);
    const material = new MeshStandardMaterial({
      color: "yellow",
      // transparent: true,
      opacity: 0.5,
    });
    const mesh = new Mesh(geometry, material);
    this.mesh = mesh;
    this.mesh.position.set(x, 0.005, z);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.receiveShadow = true;
    this.mesh.name = name;
    scene.add(this.mesh);
  }
}

export default SpotMesh;
