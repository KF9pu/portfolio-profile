import E_MyersBriggsType from "@/enums/E_MyersBriggsType";
import E_criterion from "@/enums/E_criterion";

type TestResultMap = {
  [key in E_MyersBriggsType]: {
    type: E_criterion;
    per: number;
    weakness: boolean;
  };
};

export default interface I_testResult extends TestResultMap {}
