import E_MyersBriggsType from "@/enums/E_MyersBriggsType";
import E_criterion from "@/enums/E_criterion";

type AnalyzedResultsMap = {
  [key in E_MyersBriggsType]?: {
    type: E_criterion;
    per: string;
    weakness: boolean;
  };
};

export default interface I_AnalyzedResults extends AnalyzedResultsMap {}
