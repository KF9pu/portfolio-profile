import type { FC } from "react";
import SetColorButton from "./SetColorButton";

interface ColorChangeButtonLlistProps {}

const ColorChangeButtonLlist: FC<ColorChangeButtonLlistProps> = ({}) => {
  return (
    <>
      <SetColorButton colorCode="default">default</SetColorButton>
      <SetColorButton colorCode="red">red</SetColorButton>
      <SetColorButton colorCode="green">green</SetColorButton>
      <SetColorButton colorCode="blue">blue</SetColorButton>
      <SetColorButton colorCode="pink">pink</SetColorButton>
      <SetColorButton colorCode="pupple">pupple</SetColorButton>
      <SetColorButton colorCode="gold">gold</SetColorButton>
    </>
  );
};
export default ColorChangeButtonLlist;
