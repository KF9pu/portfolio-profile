import E_criterion from "@/enums/E_criterion";
import E_criterionOpposite from "@/enums/E_criterionOpposite";

export default interface I_question {
  question: string;
  criterion: E_criterion | E_criterionOpposite;
}
