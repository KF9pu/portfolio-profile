import { SideLightProps } from "../interface";
import { cm1, cm2, geo, mat } from "../lib/common";
import { Mesh, MeshPhongMaterial, SphereGeometry } from "three";

export class SideLight {
  geometry: SphereGeometry;
  material: MeshPhongMaterial;
  mesh: Mesh<SphereGeometry, MeshPhongMaterial>;
  name: string;
  x: number;
  y: number;
  z: number;

  constructor(info: SideLightProps) {
    const container = info.container || cm1.scene;

    this.name = info.name || "";
    this.x = info.x || 0;
    this.y = info.y || 0;
    this.z = info.z || 0;

    this.geometry = geo.sideLight;
    this.material = mat.sideLight;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    // this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;
    container.add(this.mesh);
  }

  turnOff() {
    this.mesh.material.color.set(cm2.lightOffColor);
  }
}
