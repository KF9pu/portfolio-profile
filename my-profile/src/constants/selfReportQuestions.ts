export enum E_criterion {
  Extraversion = "Extraversion", // 선호하는 세계 ( E )
  Introversion = "Introversion", // 선호하는 세계 ( I )
  Intuition = "Intuition", // 인식형태 ( N )
  Sensing = "Sensing", // 인식형태 ( S )
  Thinking = "Thinking", // 판단기준 ( T )
  Feeling = "Feeling", // 판단기준 ( F )
  Perceiving = "Perceiving", // 생활양식 ( p )
  Judging = "Judging", // 생활양식 ( J )
}

export interface I_questions {
  question: string;
  criterion: E_criterion;
}

export interface I_IndexByQuestions extends I_questions {
  index: number;
}

export const questions: I_questions[] = [
  // Extraversion -START-
  {
    question: "나는 대부분의 사람들과 만나는 것을 즐깁니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "파티나 사회 행사에서 에너지를 많이 얻습니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "대화하는 동안 나는 다른 이들과의 상호 작용을 즐깁니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "새로운 사람들과 친해지는 것을 어려워하지 않습니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "집에서 혼자 있는 것보다 친구들과 시간을 보내는 것을 선호합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "대부분의 사람들과 쉽게 친밀감을 느낍니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "대화 중에는 상대방의 반응에 민감하게 반응합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "공동 작업이나 팀 프로젝트에서 일하는 것을 선호합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "새로운 환경이나 상황에서 적응하는 것을 좋아합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 소규모 모임보다 대규모 행사에서 더 편안하게 느낍니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 미리 계획된 활동보다 즉흥적인 활동을 선호합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "다양한 사람들과 어울리는 것이 나에게 에너지를 줍니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question:
      "외로움을 느끼기보다는 사람들과 함께 시간을 보내는 것을 선호합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "대화에서 나는 자주 이야기를 시작하는 편입니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question:
      "나는 다양한 관심사와 취미를 가진 사람들과 어울리는 것을 즐깁니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "대화에서 나는 주로 이야기를 듣는 편입니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 대화 중에도 활동적으로 참여합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "새로운 아이디어나 경험에 민감하게 반응합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "사람들과 함께 있는 동안 에너지가 넘칩니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "주로 사람들과 어울리는 것을 통해 스트레스를 해소합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "대부분의 시간을 혼자 보내는 것을 피하려고 노력합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 다양한 사람들과의 관계를 중요하게 생각합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "사람들과 함께 일하는 것이 팀워크를 강화시킬 수 있다고 믿습니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "새로운 사람들과의 만남이 흥미로워 보입니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 공적인 장소나 이벤트에서 만남을 좋아합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "친구나 가족과의 소통이 나에게 중요합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 대부분의 시간을 사람들과 어울려 보내는 것을 좋아합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "새로운 사람들과 만날 때 흥분을 느낍니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question: "나는 대부분의 활동을 다른 이들과 함께 하는 것을 좋아합니다.",
    criterion: E_criterion.Extraversion,
  },
  {
    question:
      "주로 외부에서 일하거나 활동하는 것이 내 성향에 맞다고 생각합니다.",
    criterion: E_criterion.Extraversion,
  },
  // Introversion -START-
  {
    question: "나는 혼자 있는 시간을 즐깁니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "대화나 사람들과의 만남보다 혼자서 책을 읽는 것을 선호합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "사람들과의 소규모 대화보다는 혼자 있는 것이 편안합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에도 절대로 심심하지 않습니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 종종 혼자서 생각에 잠깁니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "주말이나 여가 시간에도 혼자 있는 것을 즐깁니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 대부분의 시간을 혼자 보내는 것이 좋다고 생각합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에도 만족스러운 경험을 할 수 있습니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question:
      "사람들과의 사회적인 행사보다는 집에서 혼자 있는 것을 더 선호합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 종종 혼자서 일하거나 공부하는 것을 좋아합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question:
      "새로운 사람들과의 만남보다는 이미 친숙한 사람들과 어울리는 것이 편안합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "대화 중에는 주로 말보다 듣는 편입니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자서 새로운 취미나 기술을 익히는 것을 좋아합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "다른 이들과 함께 있는 동안에는 에너지가 빠르게 소모됩니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에도 몰입하여 작업할 수 있습니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question:
      "나는 대부분의 시간을 혼자 보내는 것이 내 성향에 맞다고 생각합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question:
      "새로운 환경이나 사회적인 상황에서는 적응하는 데 시간이 필요합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 혼자 있는 동안에도 즐거운 시간을 보낼 수 있습니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "사람들과의 대화나 만남이 많아지면 피로를 느낍니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question:
      "혼자 있는 동안에도 주로 자기계발이나 내적 생각에 시간을 할애합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 대화 중에도 내면의 생각에 빠져들 수 있습니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에는 주로 글을 쓰거나 예술 활동에 몰두합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "주로 혼자 있는 것을 선택하는 휴일이 더 많습니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 사람들과의 대화나 사회적인 활동을 피하려고 합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에도 창의적인 아이디어가 떠오릅니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "대화보다는 글이나 텍스트를 통해 표현하는 것을 선호합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "주로 혼자서 일하는 것이 더 생산적이라고 느낍니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에도 주로 내면의 감정에 빠져들기 좋아합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "나는 사람들과의 소소한 대화보다는 깊은 대화를 선호합니다.",
    criterion: E_criterion.Introversion,
  },
  {
    question: "혼자 있는 동안에도 즐거운 활동을 즐기는 편입니다.",
    criterion: E_criterion.Introversion,
  },
  // Intuition -START-
  {
    question: "미래에 대한 비전이나 목표를 설정하는 것을 좋아합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "새로운 아이디어나 방법을 찾는 것에 흥미를 느낍니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "문제에 대한 해결책을 찾을 때 직관보다는 분석보다 의존합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "자주 직관적인 예감이 맞는 경험이 있습니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "현재의 상황보다 미래의 가능성에 더 집중합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "새로운 일에 도전하는 것을 즐깁니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "일상 생활에서 상상력을 자주 발휘합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "특정한 일이나 결정에 대한 직관을 믿고 따릅니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "현재의 경험을 넘어서 미래의 추세를 파악하는 것이 쉽습니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "복잡한 문제에 대해 감각적인 해결책을 찾기를 선호합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "상상력이 풍부하여 새로운 아이디어를 쉽게 생각해냅니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "일상적인 상황에서도 심각한 것보다 유쾌한 가능성을 고려합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "예측이 어려운 상황에서도 직관을 믿고 행동합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "현재의 사실보다는 가능성과 기회에 주목합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "미래의 가능성에 대한 상상이 일상 생활에서 자주 발생합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "대체로 직관이 나를 올바른 결정으로 이끕니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "일을 처리할 때 미래에 대한 비전을 고려합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "다양한 아이디어나 옵션을 고려하는 것을 선호합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "감정이나 직관을 더 신뢰하며 결정하는 편입니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "어떤 일이든 예상치 못한 변화에 대비합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "새로운 경험을 통해 배우는 것을 즐깁니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "일상에서 일어나는 사건들에 대해 더 큰 의미나 패턴을 찾습니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question:
      "미래에 대한 목표를 설정하고 그 목표를 이루기 위한 계획을 세우는 것을 중요하게 생각합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question:
      "주로 직관적으로 판단하는 것이 분석적으로 판단하는 것보다 나을 것이라고 믿습니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "예측하기 어려운 일에 대한 풍부한 상상력을 가지고 있습니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "문제 해결 시 상상력을 활용하여 창의적인 해결책을 찾습니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question:
      "미래의 가능성에 대한 상상력을 통해 목표를 달성하려고 노력합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "상상력을 활용하여 일상적인 일을 더 흥미롭게 만듭니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question: "자주 직관이 나를 새로운 경험으로 인도합니다.",
    criterion: E_criterion.Intuition,
  },
  {
    question:
      "미래에 대한 비전을 가지고 일을 추진하는 것이 중요하다고 생각합니다.",
    criterion: E_criterion.Intuition,
  },
  // Sensing -START-
  {
    question: "현재 경험이나 사실에 주로 관심이 있습니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "구체적인 사실이나 세부사항에 주의를 기울입니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "일을 계획하거나 일상적인 일을 처리할 때 세부사항을 고려하는 편입니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일상적인 상황에서 현재의 사실에 신뢰를 가집니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "새로운 아이디어보다는 현재의 경험을 통한 실용적인 해결책을 선호합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일을 처리할 때 실제적이고 구체적인 방식을 중요시합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "일상적인 일을 처리할 때 논리나 현실적인 사실을 기반으로 판단합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "예측이나 가정보다는 현재의 사실을 더 중요하게 생각합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "새로운 정보를 받아들이는 데 있어서 실제적이고 구체적인 사실에 주목합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "계획을 세울 때 구체적인 세부사항을 고려하는 것을 선호합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일을 처리할 때 현실적이고 실용적인 방식을 중시합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일상적인 상황에서 현재의 사실에 대한 자세한 정보를 수집합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "세부사항이나 구체적인 사실에 대한 기억력이 뛰어나다고 느낍니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "주로 현재의 경험을 토대로 판단하는 편입니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "일을 처리할 때 실제적이고 구체적인 단계를 따르는 것을 선호합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일상적인 일을 처리할 때는 주로 객관적인 사실을 고려합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "새로운 아이디어나 가능성보다는 현재의 경험에 의존합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "감각적인 경험을 중시하며 실제적인 사실에 의존합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "현재의 상황에 대한 명확한 사실을 파악하는 것이 쉽습니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "새로운 정보를 이해할 때 구체적인 예시를 듣는 것을 선호합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "현재의 일상 생활에서 세부적인 정보에 민감하게 반응합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일을 처리할 때 현실적인 제약이나 가능성을 고려합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "현재의 상황에서 현실적인 사실에 대한 지식이 풍부합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "주로 실제적이고 구체적인 경험을 통해 배우는 것을 선호합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "일을 처리할 때는 주로 현실적이고 논리적인 단계를 따릅니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "현재의 상황에서 나타나는 세부사항에 주목합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "정보를 받아들일 때는 주로 현실적이고 구체적인 사실을 우선시합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "세부사항이나 구체적인 정보에 대한 관심이 높습니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question: "현재의 경험을 토대로 문제를 해결하는 것을 선호합니다.",
    criterion: E_criterion.Sensing,
  },
  {
    question:
      "일상적인 일을 처리할 때는 현실적이고 실용적인 방식으로 접근합니다.",
    criterion: E_criterion.Sensing,
  },
  // Thinking -START-
  {
    question: "감정적인 상황에서도 객관적이고 논리적인 판단을 하는 편인가요?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "문제에 접근할 때 감정보다는 논리적인 분석을 선호하나요?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "의사 결정을 할 때 주로 논리적인 이유를 고려합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "감정보다는 사실과 데이터에 의존하여 판단하는 경향이 있나요?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "갈등 상황에서 주로 객관적인 판단을 내립니까?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "문제 해결 시 객관적이고 논리적인 접근을 중시합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "자신의 의견을 결정하는 데 감정보다는 논리적인 이유를 중요하게 생각합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "문제 상황에서 객관적인 판단을 하려고 노력하는 편인가요?",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "자신의 결정이나 행동에 대해 논리적인 이유를 설명하는 것을 선호하나요?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "주변의 의견이나 감정에 영향을 쉽게 받지 않는 편인가요?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "문제에 대한 접근에서 감정적인 편향을 최소화하려고 노력합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "주로 논리적이고 객관적인 사고를 중시하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "자신의 의견이나 결정을 내릴 때 주로 논리적인 근거를 찾습니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "의사 결정이나 판단에 감정적인 영향을 최소화하려고 합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "문제 상황에서 객관적인 사실과 데이터를 중시합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "갈등 상황에서 객관적이고 합리적인 판단을 중요하게 생각합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "감정적인 상황에서도 논리적으로 문제를 해결하는 경향이 있나요?",
    criterion: E_criterion.Thinking,
  },
  {
    question: "의사 결정 시에 주로 논리적이고 합리적인 근거를 찾으려고 합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "감정적인 요소를 배제하고 주로 논리적으로 의사 결정을 하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "문제에 대한 해결책을 찾을 때 주로 논리적인 분석을 활용합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "자신의 의견이나 결정에 객관적이고 합리적인 근거를 요구하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "감정에 휩싸여도 주변의 사실과 데이터를 중요시하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "갈등이나 문제 상황에서 주로 객관적이고 합리적인 대화를 선호합니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "의사 결정이나 판단에 개인적인 감정보다는 논리적인 판단을 중시하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "감정적인 상황에서도 논리적으로 문제를 해결하는 것을 쉽게 느낍니까?",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "문제에 대한 해결책을 찾을 때 감정적인 편향을 최소화하는 노력을 기울입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "주변의 의견이나 감정에 쉽게 휩싸이지 않는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "감정에 휩싸이지 않고 주로 객관적인 판단을 유지하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question:
      "갈등 상황에서 주로 논리적이고 합리적인 대화를 추구하는 편입니다.",
    criterion: E_criterion.Thinking,
  },
  {
    question: "의사 결정 시에 감정적인 영향을 최소화하려고 노력합니다.",
    criterion: E_criterion.Thinking,
  },

  // Feeling -START-
  {
    question:
      "감정에 민감하게 반응하고, 다른 사람들의 감정에 관심이 많은 편인가요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "의사 결정을 할 때 자신의 감정이나 주변의 감정을 중요하게 고려하는 경향이 있나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "갈등 상황에서 다른 사람들의 감정을 이해하고 수용하는 것을 선호합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "타인과의 관계에서 감정적인 연결을 중요하게 생각하나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "다른 사람들의 감정에 공감하고, 그에 따라 행동하는 경향이 있나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정이나 행동에 자신의 감정을 많이 반영하는 편인가요?",
    criterion: E_criterion.Feeling,
  },
  {
    question: "주변 사람들의 감정에 민감하게 반응하는 경향이 있나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question: "타인과의 대화에서 감정적인 표현이나 의미를 중요시하는 편인가요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "의사 결정 시에 자신의 감정을 고려하는 것이 주로 중요하다고 느낍니까?",
    criterion: E_criterion.Feeling,
  },
  {
    question: "주변 사람들의 감정이나 니즈를 이해하고 수용하는 것을 즐깁니까?",
    criterion: E_criterion.Feeling,
  },
  {
    question: "타인과의 관계에서 감정적인 연결을 만들려고 노력하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "갈등 상황에서 타인의 감정을 먼저 이해하려고 노력하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정 시에 주로 자신의 감정을 고려하는 경향이 있나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "다른 사람들과의 관계에서 감정적인 연결을 만들려고 노력하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정이나 행동에 감정적인 측면을 고려하는 것을 선호하나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "다른 사람들의 감정을 중요시하며, 그에 따라 행동하는 것이 편합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "갈등 상황에서는 타인의 감정을 우선 고려하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정 시에 주변 사람들의 감정을 고려하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "자신의 감정을 표현하거나 다른 사람들에게 이해시키는 것을 중요하게 생각합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "주변 사람들의 감정에 대한 이해와 공감을 통해 관계를 유지하는 것이 중요합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "갈등 상황에서는 상대방의 감정을 먼저 이해하려고 합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "주변 사람들의 감정이나 니즈에 민감하게 반응하는 경향이 있나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question: "타인과의 관계에서 감정적인 교류가 중요하다고 생각합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정이나 행동에 감정적인 측면을 중요시하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "감정적인 표현이나 행동을 통해 자신의 감정을 주변에 전달하는 편입니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "다른 사람들의 감정에 대한 이해와 공감을 통해 자신의 행동을 조절합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "갈등 상황에서는 타인의 감정을 이해하고 조절하는 것이 중요합니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정 시에 감정적인 측면을 중요시하는 경향이 있나요?",
    criterion: E_criterion.Feeling,
  },
  {
    question:
      "주변 사람들의 감정에 대한 이해와 공감이 주변 관계에 긍정적인 영향을 미칩니다.",
    criterion: E_criterion.Feeling,
  },
  {
    question: "의사 결정이나 행동에 감정적인 측면을 중요시하는 것이 편합니다.",
    criterion: E_criterion.Feeling,
  },
  // Perceiving -START-
  {
    question: "계획을 세우기보다는 상황에 유연하게 대처하는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "일을 미루는 경향이 있거나 계획을 세우지 않고 행동하는 것을 즐깁니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "주로 자신의 일정이나 계획을 유연하게 조정하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "새로운 경험을 즐기며 계획 없이 살아가는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "주변 환경의 변화에 빠르게 적응하며 즉흥적으로 행동하는 경향이 있나요?",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획을 따라가기보다는 현재의 상황에 따라 행동하는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "새로운 아이디어나 계획이 떠오를 때마다 빠르게 적용하려고 합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "주변의 일정이나 계획이 바뀌어도 쉽게 적응하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "일을 미리 계획하는 것보다는 상황이 벌어질 때 대처하는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획이나 일정을 느슨하게 유지하며 자유로운 상태에서 일하는 것이 편합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "새로운 정보나 아이디어에 빠르게 적응하여 변화에 적극적으로 대처합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "일상적인 상황에서도 미리 계획하는 것을 꺼리며 즉흥적으로 행동하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획을 세우는 것보다는 현재의 상황에 따라 플랜을 수정하는 것을 좋아합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "주변 환경의 변화에 빠르게 적응하며 즉흥적으로 행동하는 경향이 있나요?",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "상황이나 계획이 변경되어도 쉽게 적응하며 즉흥적으로 행동하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "주로 일을 미리 계획하기보다는 상황에 따라 즉흥적으로 행동하는 것이 편합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "새로운 아이디어에 빠르게 적응하며, 그에 따라 행동하는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획을 세우는 것보다는 상황에 따라 신속하게 행동하는 것이 더 편합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "주변의 일정이나 계획이 변경되어도 쉽게 적응하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획을 세우기보다는 현재의 상황에 따라 즉흥적으로 행동하는 것을 좋아합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "새로운 아이디어나 계획이 떠오를 때 빠르게 적응하며 즉흥적으로 행동합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획이나 일정을 느슨하게 유지하며 즉흥적으로 일하는 것이 편합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "일을 미리 계획하지 않고도 변화에 적응하는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "상황이나 계획이 변경되어도 즉흥적으로 대처하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "새로운 정보나 아이디어에 빠르게 적응하며 변화에 대응하는 경향이 있나요?",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "주로 미리 계획하지 않고 현재의 상황에 따라 즉흥적으로 행동하는 것이 편합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "새로운 경험이나 계획이 떠오를 때 빠르게 적응하며 행동하는 편입니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question: "상황이나 일정이 변경되어도 즉흥적으로 대처하는 경향이 있나요?",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "계획을 세우기보다는 상황에 따라 즉흥적으로 행동하는 것을 선호합니다.",
    criterion: E_criterion.Perceiving,
  },
  {
    question:
      "일을 미리 계획하는 것보다는 현재의 상황에 따라 플랜을 수정하는 것이 좋습니다.",
    criterion: E_criterion.Perceiving,
  },
  //  -START-
  {
    question: "계획을 세우고 일정을 따르는 것을 선호합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "일을 미리 계획하고 조직적으로 처리하는 것을 즐깁니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "일상적인 일을 체계적으로 계획하여 처리하는 편입니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "주로 계획된 일정을 따라가는 것이 중요하다고 생각합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "일을 미리 계획하고 조직적인 방식으로 처리하는 것이 편합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "목표를 미리 정하고 계획을 세워 그 목표를 이루려고 합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "일을 처리할 때 미리 계획한 순서에 따라 진행하는 것을 좋아합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "일정이나 계획을 미리 세우고 그에 따라 행동하는 것을 중요하게 생각합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "계획된 일정이나 목표를 달성하는 것이 주요 관심사입니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "주로 일을 미리 계획하고 조직적인 방식으로 처리하는 것을 선호합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "일을 처리할 때 목표를 미리 설정하고 그에 따라 진행하는 편입니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "계획 없이 일을 처리하는 것보다는 계획을 세우고 행동하는 것이 좋습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "목표를 설정하고 일을 계획적으로 처리하는 것을 중요하게 생각합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "계획된 일정에 따라 일을 처리하려고 노력합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "목표를 설정하고 그에 따라 행동하는 것이 일을 처리하는 중요한 방법입니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "계획 없이 일을 처리하는 것보다는 계획을 세우고 행동하는 것이 더 나은 것 같습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "주로 목표를 설정하고 그에 따라 일을 처리하는 것이 편합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "계획 없이 행동하는 것보다는 미리 계획을 세우는 것이 좋습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "목표를 미리 설정하고 계획을 세우는 것이 일을 효과적으로 처리하는 방법입니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "일을 처리할 때 일정을 미리 계획하고 그에 따라 진행하는 것이 좋습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "주로 일을 미리 계획하고 조직적인 방식으로 처리하는 것이 편합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "목표를 미리 설정하고 계획을 세워 일을 처리하는 것이 중요합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "일을 처리할 때 계획된 일정에 따라 행동하는 것이 효과적이라고 생각합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question:
      "계획 없이 행동하는 것보다는 목표를 설정하고 일정을 계획하는 것이 좋습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "목표를 설정하고 계획을 세워 일을 처리하는 것이 편합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "일을 처리할 때 미리 계획한 일정에 따라 진행하는 것이 좋습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "주로 계획을 세우고 그에 따라 행동하는 것을 중요하게 생각합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "목표를 미리 설정하고 일을 조직적으로 처리하는 것이 좋습니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "계획된 일정을 따라 일을 처리하는 것이 효과적이라고 생각합니다.",
    criterion: E_criterion.Judging,
  },
  {
    question: "주로 목표를 설정하고 그에 따라 일을 처리하는 것이 편합니다.",
    criterion: E_criterion.Judging,
  },
];
