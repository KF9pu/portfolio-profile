import { cm1, geo, mat } from "../lib/common";
import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";
import { Stuff } from "./Stuff";
import { StuffProps } from "../interface";

interface CustomMesh extends Mesh {
  step?: number | undefined;
  glassType?: "strong" | "normal";
}

export class Glass extends Stuff {
  geometry?: BoxGeometry;
  material?: MeshPhongMaterial;
  mesh?: CustomMesh;
  type?: "strong" | "normal";
  step?: number;
  cannonBody: any;
  constructor(info: StuffProps) {
    super(info);
    if (!info.type) return;
    this.type = info.type;
    this.step = info.step;

    this.geometry = geo.glass;

    switch (this.type) {
      case "normal":
        this.material = mat.glass1;
        this.mass = 1;
        break;
      case "strong":
        this.material = mat.glass2;
        this.mass = 0;
        break;
    }

    this.width = this.geometry.parameters.width;
    this.height = this.geometry.parameters.height;
    this.depth = this.geometry.parameters.depth;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.name = this.name;
    this.mesh.step = this.step;
    this.mesh.glassType = this.type;
    cm1.scene.add(this.mesh);

    this.setCannonBody();
  }
}
