import { cm1, geo, mat } from "../lib/common";
import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";
import { Stuff } from "./Stuff";
import { StuffProps, soundsType } from "../interface";

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
  sound?: HTMLAudioElement;

  constructor(info: StuffProps) {
    super(info);

    if (!info.type) return;
    this.type = info.type;
    this.step = info.step;
    if (info.sounds) this.sound = info.sounds[this.type];

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
    this.cannonBody.addEventListener("collide", (e: any) => playSound(e, this.sound));

    function playSound(e: any, sound: HTMLAudioElement | undefined) {
      // console.log("*** playSound start");
      if (!sound) return;
      const strength = e.contact.getImpactVelocityAlongNormal();
      if (strength > 5) {
        sound.currentTime = 0;
        sound.play();
        // console.log(strength);
      }
    }
  }
}
