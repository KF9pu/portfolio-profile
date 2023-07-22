import { Box, Vec3, Body } from "cannon-es";
import { cm1 } from "../lib/common";
import { StuffProps } from "../interface";

export class Stuff {
  name: string;
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  mass: number;
  cannonMaterial: any;
  width: number = 0;
  height: number = 0;
  depth: number = 0;
  cannonBody?: Body;

  constructor(info: StuffProps) {
    this.name = info.name || "";
    this.x = info.x || 0;
    this.y = info.y || 0;
    this.z = info.z || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;

    this.mass = info.mass || 0;
    this.cannonMaterial = info.cannonMaterial || cm1.defaultMaterial;
  }

  setCannonBody() {
    const material = this.cannonMaterial;

    const shape = new Box(new Vec3(this.width / 2, this.height / 2, this.depth / 2));
    this.cannonBody = new Body({
      mass: this.mass,
      position: new Vec3(this.x, this.y, this.z),
      shape,
      material,
    });
    this.cannonBody.quaternion.setFromAxisAngle(new Vec3(0, 1, 0), this.rotationY);
    cm1.world.addBody(this.cannonBody);
  }
}
