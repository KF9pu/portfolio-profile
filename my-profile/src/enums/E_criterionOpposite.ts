enum E_criterionOpposite {
  Extraversion = "Introversion", // 선호하는 세계 ( E -> I )
  Introversion = "Extraversion", // 선호하는 세계 ( I -> E )
  Intuition = "Sensing", // 인식형태 ( N -> s )
  Sensing = "Intuition", // 인식형태 ( S -> N )
  Thinking = "Feeling", // 판단기준 ( T -> F )
  Feeling = "Thinking", // 판단기준 ( F -> T )
  Perceiving = "Judging", // 생활양식 ( p -> J )
  Judging = "Perceiving", // 생활양식 ( J -> P )
}
export default E_criterionOpposite;
