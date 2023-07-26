import { AmbientLight, SpotLight } from "three";
import { cm1, cm2 } from "../common";

const SetLight = () => {
  console.log("*** SetLight Start");
  const ambientLight = new AmbientLight(cm2.lightColor, 0.8);
  cm1.scene.add(ambientLight);

  const spotLightDistance = 50;
  const spotLight1 = new SpotLight(cm2.lightColor, 1);
  spotLight1.castShadow = true;
  spotLight1.shadow.mapSize.width = 2048;
  spotLight1.shadow.mapSize.height = 2048;
  const spotLight2 = spotLight1.clone();
  const spotLight3 = spotLight1.clone();
  const spotLight4 = spotLight1.clone();
  spotLight1.position.set(-spotLightDistance, spotLightDistance, spotLightDistance);
  spotLight2.position.set(spotLightDistance, spotLightDistance, spotLightDistance);
  spotLight3.position.set(-spotLightDistance, spotLightDistance, -spotLightDistance);
  spotLight4.position.set(spotLightDistance, spotLightDistance, -spotLightDistance);
  cm1.scene.add(spotLight1, spotLight2, spotLight3, spotLight4);
};

export default SetLight;
