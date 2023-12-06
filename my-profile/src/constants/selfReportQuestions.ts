export enum E_criterion {
  PreferredWorld, // 선호하는 세계 ( E / I )
  PerceptualMode, // 인식형태 ( N / S )
  JudgmentCriteria, // 판단기준 ( T / F )
  LifestylePattern, // 생활양식 ( J / p )
}

export interface I_questions {
  key: number;
  question: string;
  type: E_criterion;
}

export const questions: I_questions[] = [
  // PreferredWorld -START-
  {
    key: 0,
    question:
      "대부분의 시간을 혼자 보내는 것을 좋아하나요, 아니면 사람들과 함께 있는 것을 좋아하나요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 1,
    question: "소규모 그룹 활동보다 대규모 모임에서 더 편안하게 느끼나요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 2,
    question:
      "새로운 사람들과 이야기를 나누는 것을 즐기나요, 아니면 친한 사람들과 깊게 대화하는 것을 선호하나요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 3,
    question:
      "사회적인 행사에서 에너지를 얻는 편인가요, 아니면 그런 행사에서 에너지를 소모하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 4,
    question:
      "다른 사람들과 함께 시간을 보낼 때 자주 말을 하는 편인가요, 아니면 듣는 것을 선호하고 말을 조심스럽게 하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 5,
    question:
      "사람들과 함께 있을 때 에너지를 얻는 편인가요, 아니면 혼자 있을 때 에너지를 얻는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 6,
    question:
      "대화 중에 말을 더 많이 하는 편인가요, 아니면 대부분 듣는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 7,
    question:
      "새로운 사람들과 만나면 쉽게 이야기를 시작하는 편인가요, 아니면 조금 더 소극적인 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 8,
    question:
      "사람들과 함께 있을 때 주로 들떠있는 편인가요, 아니면 조용하고 차분한 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 9,
    question:
      "사회적인 모임에서 주로 다른 사람들과 어울리는 편인가요, 아니면 주로 혼자 있는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 10,
    question:
      "사람들과 대화할 때 주로 그들의 이야기에 집중하는 편인가요, 아니면 자신의 생각을 말하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 11,
    question:
      "많은 사람들과의 활동을 즐기는 편인가요, 아니면 소수의 친한 사람들과 함께 시간을 보내는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 12,
    question:
      "대부분의 사람들과 쉽게 친해지는 편인가요, 아니면 친밀한 관계를 형성하는 데 시간이 걸리는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 13,
    question:
      "사람들과의 상호작용에서 쉽게 에너지를 소모하는 편인가요, 아니면 상호작용을 통해 에너지를 얻는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 14,
    question:
      "사람들과 함께하는 시간을 자주 가지는 편인가요, 아니면 혼자 있는 시간을 더 중요하게 여기는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 15,
    question:
      "사람들과 함께 있을 때 주로 말을 더 많이 하는 편인가요, 아니면 주로 듣는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 16,
    question:
      "타인의 이야기에 대해 관심을 가지고 질문하는 편인가요, 아니면 주로 자신의 이야기를 전달하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 17,
    question:
      "사람들과 함께 있는 동안 활동적으로 참여하는 편인가요, 아니면 주로 관찰하고 지켜보는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 18,
    question:
      "새로운 사람들과 만날 때 금방 친해지는 편인가요, 아니면 조금 더 시간이 필요한 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 19,
    question:
      "주변에서 나오는 소리나 자극에 예민한 편인가요, 아니면 주변의 소리나 자극에 크게 영향을 받지 않는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 20,
    question:
      "사람들과 함께 있을 때 주로 이야기의 중심이 되는 편인가요, 아니면 주로 수동적으로 대응하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 21,
    question:
      "사람들과의 대화에서 주로 다양한 주제를 돌아다니는 편인가요, 아니면 특정 주제에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 22,
    question:
      "사람들과 함께 있을 때 주로 웃고 재미있게 지내는 편인가요, 아니면 조용하고 진지한 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 23,
    question:
      "사람들과 함께 있을 때 주로 먼저 말을 거는 편인가요, 아니면 다른 사람이 먼저 말을 거는 것을 기다리는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 24,
    question:
      "사람들과 함께 있는 동안 자신의 생각과 감정을 쉽게 표현하는 편인가요, 아니면 조금 더 내적으로 생각하고 감정을 나타내는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 25,
    question:
      "사회적인 모임에서 대부분의 사람들과 인사를 나누는 편인가요, 아니면 몇몇 친한 사람들과만 인사를 나누는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 26,
    question:
      "사람들과 함께 있을 때 주로 말을 잘 듣고 이해하는 편인가요, 아니면 말하는 사람의 주장에 더 많이 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 27,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들을 도와주는 역할을 맡는 편인가요, 아니면 도움을 받는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 28,
    question:
      "사람들과 함께 있을 때 주로 자신의 생각이나 의견을 표현하는 편인가요, 아니면 다른 사람의 의견에 동의하고 조화를 이루려는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 29,
    question:
      "사회적인 모임에서 다른 사람들과 소통하고 상호작용하는 것을 즐기는 편인가요, 아니면 그런 상황에서 조금 더 소극적인 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 30,
    question:
      "사람들과 함께 있을 때 주로 활발하게 움직이고 동작하는 편인가요, 아니면 정적인 자세로 있거나 앉아 있는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 31,
    question:
      "사람들과 대화할 때 주로 먼저 말을 시작하는 편인가요, 아니면 다른 사람이 먼저 말을 시작하는 것을 기다리는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 32,
    question:
      "사회적인 모임에서 다른 사람들과 쉽게 어울리는 편인가요, 아니면 조금 더 내성적이고 소수의 사람들과 어울리는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 33,
    question:
      "사람들과 함께 있는 동안 활동적이고 에너지가 넘치는 편인가요, 아니면 조용하고 차분한 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 34,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 즐기는 편인가요, 아니면 조용한 환경에서 혼자 있는 것을 더 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 35,
    question:
      "사람들과 함께 있을 때 주로 말하는 시간보다 듣는 시간이 더 많은 편인가요, 아니면 말하는 시간이 더 많은 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 36,
    question:
      "사람들과 대화할 때 주로 일방적으로 이야기하는 편인가요, 아니면 상대방의 의견을 경청하고 수용하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 37,
    question:
      "사회적인 활동에서 다른 사람들과 적극적으로 협력하는 편인가요, 아니면 주로 자신의 일을 독립적으로 수행하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 38,
    question:
      "사람들과 함께 있을 때 주로 자신의 감정을 표현하는 편인가요, 아니면 조금 더 내적으로 감정을 느끼고 표현하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 39,
    question:
      "사람들과의 대화에서 주로 사회적인 이야기를 주제로 나누는 편인가요, 아니면 개인적인 이야기를 주제로 나누는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 40,
    question:
      "사회적인 활동에서 주로 다른 사람들과 함께 일하는 것을 선호하는 편인가요, 아니면 혼자서 일하는 것을 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 41,
    question:
      "사람들과 함께 있는 동안 주로 활기찬 분위기를 조성하는 편인가요, 아니면 조용하고 안정적인 분위기를 유지하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 42,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 에너지를 얻는 편인가요, 아니면 그런 활동으로부터 에너지를 소모하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 43,
    question:
      "사람들과 함께 있을 때 주로 다른 사람들의 의견에 동의하는 편인가요, 아니면 자신의 의견을 분명히 표현하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 44,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 쉽게 형성하는 편인가요, 아니면 조금 더 사려깊게 관계를 형성하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 45,
    question:
      "사람들과 함께 있을 때 주로 다른 사람들에게 관심을 가지는 편인가요, 아니면 본인의 생각과 관심사에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 46,
    question:
      "사회적인 모임에서 주로 다른 사람들과의 대화에 참여하는 편인가요, 아니면 주로 주변의 상황을 관찰하고 지켜보는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 47,
    question:
      "사람들과 함께 있을 때 주로 말을 많이 하는 편인가요, 아니면 말을 조금 더 삼가는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 48,
    question:
      "사회적인 활동에서 다른 사람들과의 상호작용을 즐기는 편인가요, 아니면 개인적인 활동을 더 즐기는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 49,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기에 관심을 가지고 듣는 편인가요, 아니면 자신의 이야기를 나누는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 50,
    question:
      "새로운 사람들과의 만남을 통해 에너지를 얻는 편인가요, 아니면 이전에 알고 있던 사람들과의 만남을 더 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 51,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 아이디어를 발전시키는 편인가요, 아니면 개인적으로 생각하고 아이디어를 구체화하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 52,
    question:
      "사람들과 함께 있는 동안 주로 분위기를 즐기고 재미있게 만드는 편인가요, 아니면 목적에 따라 집중하고 진지하게 행동하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 53,
    question:
      "사회적인 활동에서 다른 사람들과의 협업을 통해 목표를 달성하는 것을 선호하는 편인가요, 아니면 개인적으로 독립적으로 목표를 달성하는 것을 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 54,
    question:
      "사람들과 함께 있을 때 주로 다른 사람들의 의견을 수용하고 조율하는 편인가요, 아니면 자신의 의견을 표현하고 주장하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 55,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 새로운 관점과 아이디어를 얻는 편인가요, 아니면 자신의 생각과 경험을 나누는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 56,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 이해하고 공감하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 57,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하는 것을 중요하게 여기는 편인가요, 아니면 주로 자신의 역량과 성과에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 58,
    question:
      "사람들과 함께 있을 때 주로 다른 사람들의 이야기에 집중하고 관심을 가지는 편인가요, 아니면 자신의 이야기를 나누는 것을 더 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 59,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각을 정리하고 발전시키는 편인가요, 아니면 개인적으로 고민하고 내면의 세계를 탐색하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 60,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 요구와 필요에 빠르게 대응하는 편인가요, 아니면 조금 더 내적인 가치와 원칙에 따라 행동하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 61,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 유지하고 발전시키는 것을 중요하게 여기는 편인가요, 아니면 주로 자신의 목표와 성장에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 62,
    question:
      "사람들과 함께 있을 때 주로 다른 사람들의 이야기를 경청하고 이해하는 편인가요, 아니면 자신의 의견을 표현하고 주장하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 63,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각을 표출하고 공유하는 편인가요, 아니면 다른 사람들의 의견을 듣고 받아들이는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 64,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 공감하고 이해하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 65,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요하게 여기는 편인가요, 아니면 주로 자신의 아이디어와 목표에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 66,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기에 관심을 가지고 듣는 편인가요, 아니면 자신의 이야기를 나누는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 67,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각과 의견을 발전시키는 편인가요, 아니면 개인적으로 고민하고 내면의 세계를 탐색하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 68,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 요구와 필요에 대응하고 도움을 주는 편인가요, 아니면 조금 더 내적인 가치와 원칙에 따라 행동하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 69,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 유지하고 발전시키는 것을 중요하게 여기는 편인가요, 아니면 주로 자신의 목표와 성장에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 70,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기를 경청하고 이해하는 편인가요, 아니면 자신의 의견을 표현하고 주장하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 71,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각과 의견을 표출하고 공유하는 편인가요, 아니면 다른 사람들의 의견을 듣고 받아들이는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 72,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 공감하고 이해하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 73,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요하게 여기는 편인가요, 아니면 주로 자신의 아이디어와 목표에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 74,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기에 관심을 가지고 듣는 편인가요, 아니면 자신의 이야기를 나누는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 75,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 새로운 아이디어를 얻는 것을 즐기는 편인가요, 아니면 자신의 아이디어를 발전시키는 과정에서 더 흥미를 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 76,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 읽고 이해하는 데 능숙한 편인가요, 아니면 자신의 감정을 인식하고 표현하는 데 더 능숙한 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 77,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하는 것을 중요한 가치로 여기는 편인가요, 아니면 개인적인 성장과 발전을 중요한 가치로 여기는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 78,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 의견을 수용하고 받아들이는 편인가요, 아니면 자신의 의견을 분명히 표현하고 주장하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 79,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 새로운 관점을 얻는 것을 즐기는 편인가요, 아니면 자신의 생각과 가치관을 탐색하고 강화하는 데 더 흥미를 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 80,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 요구와 필요에 빠르게 대응하고 도움을 주는 편인가요, 아니면 조금 더 내적인 가치와 원칙에 따라 행동하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 81,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요한 가치로 여기는 편인가요, 아니면 주로 자신의 목표와 역량을 발전시키는 것에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 82,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기에 집중하고 공감하는 편인가요, 아니면 자신의 이야기를 나누고 표현하는 데 더 흥미를 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 83,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각을 정리하고 발전시키는 것을 즐기는 편인가요, 아니면 개인적으로 다양한 아이디어와 가능성을 탐색하는 것을 더 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 84,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 공감하고 이해하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 데 더 편안함을 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 85,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요한 가치로 여기는 편인가요, 아니면 주로 자신의 아이디어와 목표를 실현하는 데 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 86,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기를 경청하고 이해하는 편인가요, 아니면 자신의 의견을 표현하고 주장하는 데 더 열정적인 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 87,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각과 의견을 표현하고 공유하는 것을 즐기는 편인가요, 아니면 다른 사람들의 의견을 듣고 받아들이는 데 더 흥미를 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 88,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 공감하고 이해하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 데 더 자유로운 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 89,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요한 가치로 여기는 편인가요, 아니면 주로 자신의 목표와 성장을 추구하는 것에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 90,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기에 관심을 가지고 듣는 편인가요, 아니면 자신의 이야기를 나누는 데 더 흥미를 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 91,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각을 표출하고 공유하는 것을 즐기는 편인가요, 아니면 다른 사람들의 의견을 듣고 받아들이는 데 더 흥미를 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 92,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 공감하고 이해하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 데 더 능숙한 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 93,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요한 가치로 여기는 편인가요, 아니면 주로 자신의 아이디어와 목표를 추구하는 것에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 94,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기를 경청하고 이해하는 편인가요, 아니면 자신의 의견을 분명히 표현하고 주장하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 95,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 새로운 아이디어와 관점을 얻는 것을 즐기는 편인가요, 아니면 자신의 내면적인 세계를 탐색하고 이해하는 데 더 관심이 있는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 96,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 감정을 공감하고 이해하는 편인가요, 아니면 자신의 감정을 표현하고 표출하는 데 더 편안함을 느끼는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 97,
    question:
      "사회적인 활동에서 다른 사람들과의 관계를 형성하고 유지하는 것을 중요한 가치로 여기는 편인가요, 아니면 주로 자신의 목표와 성취를 추구하는 것에 집중하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 98,
    question:
      "사람들과 함께 있는 동안 주로 다른 사람들의 이야기에 집중하고 공감하는 편인가요, 아니면 자신의 이야기를 나누고 표현하는 데 더 중점을 둔 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  {
    key: 99,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각과 의견을 표현하고 공유하는 것을 좋아하는 편인가요, 아니면 다른 사람들의 의견을 경청하고 받아들이는 것을 더 선호하는 편인가요?",
    type: E_criterion.PreferredWorld,
  },
  // PerceptualMode -START-
  {
    key: 100,
    question:
      "사회적인 모임에서 다른 사람들과의 대화를 통해 자신의 생각과 의견을 표현하고 공유하는 것을 좋아하는 편인가요, 아니면 다른 사람들의 의견을 경청하고 받아들이는 것을 더 선호하는 편인가요?",
    type: E_criterion.PerceptualMode,
  },

  // JudgmentCriteria -START-
  // LifestylePattern -START-
];
