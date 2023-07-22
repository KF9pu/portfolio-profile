import { BoxGeometry, Mesh, MeshPhongMaterial, Object3D } from "three";
import { Stuff } from "./Stuff";
import { StuffProps } from "../interface";
import { cm1, geo, mat } from "../lib/common";

export class Bar extends Stuff {
  geometry: BoxGeometry;
  material: MeshPhongMaterial;
  mesh: Object3D;

  constructor(info: StuffProps) {
    super(info);

    this.geometry = geo.bar;
    this.material = mat.bar;

    this.width = this.geometry.parameters.width;
    this.height = this.geometry.parameters.height;
    this.depth = this.geometry.parameters.depth;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    cm1.scene.add(this.mesh);

    this.setCannonBody();
  }
}
