import { ContactMaterial } from "cannon-es";
import { cm1 } from "../common";

const SetPhysicalEngine = () => {
  console.log("*** SetPhysicalEngine Start");
  cm1.world.gravity.set(0, -10, 0);

  const defaultContactMaterial = new ContactMaterial(cm1.defaultMaterial, cm1.defaultMaterial, {
    friction: 0.3,
    restitution: 0.2,
  });
  const glassDefaultContactMaterial = new ContactMaterial(cm1.glassMaterial, cm1.defaultMaterial, {
    friction: 1,
    restitution: 0,
  });
  const playerGlassContactMaterial = new ContactMaterial(cm1.playerMaterial, cm1.glassMaterial, {
    friction: 1,
    restitution: 0,
  });
  cm1.world.defaultContactMaterial = defaultContactMaterial;
  cm1.world.addContactMaterial(glassDefaultContactMaterial);
  cm1.world.addContactMaterial(playerGlassContactMaterial);
};

export default SetPhysicalEngine;
