import { cls } from "@/common/libs";
import SetColorButton from "@/theme/components/SetColorButton";
import type { FC } from "react";

interface ColorChangeButtonLlistProps {}

const ColorChangeButtonLlist: FC<ColorChangeButtonLlistProps> = ({}) => {
  return (
    <div className={cls("flex flex-col gap-2")}>
      <SetColorButton ThemeCode="default">default</SetColorButton>
      <SetColorButton ThemeCode="light-red">light red</SetColorButton>
      <SetColorButton ThemeCode="light-green">light green</SetColorButton>
      <SetColorButton ThemeCode="light-blue">light blue</SetColorButton>
      <SetColorButton ThemeCode="light-pink">light pink</SetColorButton>
      <SetColorButton ThemeCode="dark-red">dark red</SetColorButton>
      <SetColorButton ThemeCode="dark-blue">dark blue</SetColorButton>
      <SetColorButton ThemeCode="dark-green">dark green</SetColorButton>
      <SetColorButton ThemeCode="dark-pupple">dark pupple</SetColorButton>
      <SetColorButton ThemeCode="dark-gold">dark gold</SetColorButton>
    </div>
  );
};
export default ColorChangeButtonLlist;
