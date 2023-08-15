import type { FC } from "react";
import SetColorButton from "./SetColorButton";

interface ColorChangeButtonLlistProps {}

const ColorChangeButtonLlist: FC<ColorChangeButtonLlistProps> = ({}) => {
  return (
    <>
      <SetColorButton colorCode="default">Default</SetColorButton>
      <SetColorButton colorCode="red">Red</SetColorButton>
      <SetColorButton colorCode="green">Green</SetColorButton>
      <SetColorButton colorCode="blue">Blue</SetColorButton>
      <SetColorButton colorCode="pink">Pink</SetColorButton>
      <SetColorButton colorCode="pupple">Pupple</SetColorButton>
      <SetColorButton colorCode="gold">Gold</SetColorButton>
    </>
  );
};
export default ColorChangeButtonLlist;
