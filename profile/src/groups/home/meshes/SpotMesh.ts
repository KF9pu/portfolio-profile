import {
  BufferGeometry,
  CircleGeometry,
  Curve,
  Line,
  LineCurve,
  LineDashedMaterial,
  LineSegments,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  MeshToonMaterial,
  PlaneGeometry,
  RepeatWrapping,
  RingGeometry,
  Scene,
  SphereGeometry,
  SplineCurve,
  TextureLoader,
  Vector2,
  Vector3,
  WireframeGeometry,
} from "three";

interface SpotMeshProps {
  name: string;
  scene: Scene;
  position: { x: number; z: number };
  color: `#${string}`;
}

class SpotMesh {
  mesh: Line<any, any>;

  constructor({ name, scene, position: { x, z }, color }: SpotMeshProps) {
    const textureLoader = new TextureLoader();
    const floorTexture = textureLoader.load("/images/grass.jpg");
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.x = 5;
    floorTexture.repeat.y = 5;

    const vectors: Vector2[] = [];
    for (let i = 0; i < 13; i++) {
      vectors.push(new Vector2(Math.sin(i / 2) * 1.5, Math.cos(i / 2) * 1.6));
    }
    const curve = new SplineCurve(vectors);
    // curve.
    const points = curve.getPoints(100);
    const geometry = new BufferGeometry().setFromPoints(points);

    const material = new LineDashedMaterial({
      color: color,
      linewidth: 1.5,
      scale: 0.2,
      dashSize: 0.1,
      gapSize: 0.1,
    });

    const mesh = new Line(geometry, material);
    mesh.position.set(x, 0, z);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true; // 그림자 세팅
    mesh.computeLineDistances(); // 점선으로 만들어줌
    mesh.name = name;

    this.mesh = mesh;
    scene.add(this.mesh);
  }
}

export default SpotMesh;
