import { E_testTypes } from "@/enums/testTypes";

const useMBTI = () => {
  const getQuestion = (testType: E_testTypes) => {
    console.log("🚀 ~ file: useMBTI.tsx:5 ~ getQuestion ~ testType:", testType);
    // TODO: 타입별 검사지 생성
  };

  return { getQuestion };
};
export default useMBTI;
