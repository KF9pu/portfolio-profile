import E_criterion from "@/enums/E_criterion";

type ColorValues = {
  red: number;
  green: number;
  blue: number;
};

type t_personalityColorDatas = {
  [key in E_criterion]: ColorValues;
};

const personalityColorDatas: t_personalityColorDatas = {
  Extraversion: { red: 3, green: 1, blue: -3 },
  Introversion: { red: -3, green: 1, blue: -3 },
  Intuition: { red: 1, green: -3, blue: -3 },
  Sensing: { red: -2, green: 1, blue: -2 },
  Feeling: { red: 3, green: -1, blue: 1 },
  Thinking: { red: -3, green: -3, blue: 1 },
  Judging: { red: 3, green: -3, blue: -3 },
  Perceiving: { red: 3, green: 3, blue: -3 },
};

export default personalityColorDatas;
