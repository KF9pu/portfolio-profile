import { _blue, _green, _red } from "@/app/recoilContextProvider";
import { limitAddNum, limitSubtractNum } from "hsh-utils-math";
import { useSetRecoilState } from "recoil";

const useChangeBackgroundColor = () => {
  const serRed = useSetRecoilState(_red);
  const setGreen = useSetRecoilState(_green);
  const setBlue = useSetRecoilState(_blue);

  const plusBackgroundColor = (red: number, green: number, blue: number) => {
    serRed(prev => limitAddNum(255, red, prev));
    setGreen(prev => limitAddNum(255, green, prev));
    setBlue(prev => limitAddNum(255, blue, prev));
  };

  const minusBackgroundColor = (red: number, green: number, blue: number) => {
    serRed(prev => limitSubtractNum(120, red, prev));
    setGreen(prev => limitSubtractNum(120, green, prev));
    setBlue(prev => limitSubtractNum(120, blue, prev));
  };

  return { plusBackgroundColor, minusBackgroundColor };
};
export default useChangeBackgroundColor;
