import { CircleGeometry, Mesh, MeshStandardMaterial, PlaneGeometry, RepeatWrapping, Scene, TextureLoader } from "three";

interface SpotMeshProps {
  name: string;
  scene: Scene;
  position: { x: number; z: number };
}

class SpotMesh {
  mesh: Mesh<CircleGeometry, MeshStandardMaterial>;

  constructor({ name, scene, position: { x, z } }: SpotMeshProps) {
    const textureLoader = new TextureLoader();
    const floorTexture = textureLoader.load("/images/grass.jpg");
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.x = 5;
    floorTexture.repeat.y = 5;

    const geometry = new CircleGeometry(1.5, 32);
    const material = new MeshStandardMaterial({
      map: floorTexture,
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
