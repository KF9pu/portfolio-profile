export enum colorEnum {
  "default",
  "light-red",
  "light-blue",
  "light-green",
  "light-pink",
  "light-pupple",
  "light-gold",
  "dark-pink",
  "dark-red",
  "dark-green",
  "dark-blue",
  "dark-pupple",
  "dark-gold",
}

export const ColorKeys = ["primary", "secondary", "tertiary", "quaternary", "quinary"] as const;
export type IColor = {
  [key in (typeof ColorKeys)[number]]: `#${string}`;
};

export const Colors: IColor[] = [
  {
    primary: "#212529",
    secondary: "#495057",
    tertiary: "#adb5bd",
    quaternary: "#dee2e6",
    quinary: "#f8f9fa",
  },
  {
    primary: "#d58181",
    secondary: "#cc6666",
    tertiary: "#bf4440",
    quaternary: "#a13636",
    quinary: "#7a2929",
  },
  {
    primary: "#85d1d6",
    secondary: "#6eb0cf",
    tertiary: "#4b85c3",
    quaternary: "#3b71b0",
    quinary: "#3758a4",
  },
  {
    primary: "#7ec95e",
    secondary: "#4cc144",
    tertiary: "#66a136",
    quaternary: "#3a6b24",
    quinary: "#1f4517",
  },
  {
    primary: "#ecc6cd",
    secondary: "#e0a3b3",
    tertiary: "#d7889e",
    quaternary: "#cb6285",
    quinary: "#c34b75",
  },
  {
    primary: "#e9bed9",
    secondary: "#e0a3db",
    tertiary: "#cf90da",
    quaternary: "#b079d2",
    quinary: "#9f62cb",
  },
  {
    primary: "#dec99c",
    secondary: "#d4b17d",
    tertiary: "#cda76a",
    quaternary: "#b88d3d",
    quinary: "#957432",
  },
  {
    primary: "#cc6674",
    secondary: "#b04a5c",
    tertiary: "#722134",
    quaternary: "#b03b4e",
    quinary: "#913047",
  },
  {
    primary: "#a8281f",
    secondary: "#9b271c",
    tertiary: "#862219",
    quaternary: "#6c1414",
    quinary: "#450e0d",
  },
  {
    primary: "#cfe1b9",
    secondary: "#b5c99a",
    tertiary: "#97a97c",
    quaternary: "#87986a",
    quinary: "#718355",
  },
  {
    primary: "#2c7cd8",
    secondary: "#264bcf",
    tertiary: "#213fb5",
    quaternary: "#261fa8",
    quinary: "#161e79",
  },
  {
    primary: "#bda0ee",
    secondary: "#ab82e8",
    tertiary: "#8241dc",
    quaternary: "#7324c2",
    quinary: "#4c198a",
  },
  {
    primary: "#e2c347",
    secondary: "#d6b534",
    tertiary: "#7d6a01",
    quaternary: "#967a1e",
    quinary: "#6b5824",
  },
];

export const historys = [
  ["1992.02", "인생의 시작"],
  ["1998.02", "청주 원광유치원 졸업"],
  ["2004.02", "대전 가양초등학교 졸업"],
  ["2007.02", "대전 우송중학교 졸업"],
  ["2010.02", "대전 우송고등학교 졸업"],
  ["2010.03", "군산대학교 물리학과 입학"],
  ["2011.09", "군산 아르바이트"],
  ["2014.01", "육군 병장 전역"],
  ["2014.12", "군산대학교 물리학과 중퇴"],
  ["2015.03", "서울 두산타워 보안대원"],
  ["2015.05", "서울 삼성에어컨 설치 보조"],
  ["2016.06", "군산 OCI 보안대원"],
  ["2016.12", "군산 아르바이트"],
  ["2017.03", "을지대병원 간호보조"],
  ["2017.06", "대전 KT 영업사원"],
  ["2019.05", "진천 아트밸리 조리팀"],
  ["2019.06", "자전거 국토종주"],
  ["2019.09", "건설업 막노동"],
  ["2019.11", "목수 보조"],
  ["2020.06", "서울 자바기반웹개발 수료"],
  ["2021.05", "서울 제스트CNS SI팀"],
  ["2023.05", "서울 알타바그룹 Infra팀"],
];

export const selfIntroduceTitles = [
  {
    title: "자기소개",
    content: `안녕하세요! 초록색을 좋아하는 주황색의 홍성화입니다.
      저는 색체 심리를 좋아합니다. 색은 우리의 생활속에 녹아들어 특별한 영향을 준다고 생각하기 때문입니다.

      저를 설명하기 가장 좋은 색은 주황색과 파란색 인데, 주황색은 활기차고 따뜻한 느낌을 주는 색으로, 평소 사람들과의 관계에서 저의 모습과 많이 닮아 있고, 파란색은 차분하고 침착한 느낌을 주는 색으로, 위기나 사건에 대응하고 해결하는 모습과 많이 닮아 있습니다. 가장 좋아하는 색은 초록색으로, 초록색은 평온함과 자연스러운 느낌의 색 입니다. 그래서 저는 종종 등산이 생각나 근처에 있는 산을 올라갑니다. 초록색에 둘러쌓이면, 평온해 지는 느낌으로 마음이 건강해 지는 느낌이 들기 때문입니다.
      
      평소에는 활기차고 따뜻하지만, 위기에선 침착한 평온하고 싶은 홍성화 입니다!
    `,
  },
  {
    title: "가치관",
    content: `저는 좋은 기억들을 만드는 것을 좋아합니다. 저에게 좋은 기억은 삶의 원동력이 됩니다. 
      학창시절 공부를 하며 어려운 문제를 풀어냈을 때, 얻었던 성취감은 학업을 재미있게 할 수 있는 원동력이 되었고, 힘들었던 군생활을 마치고 전역했을 땐, 무엇이든 할 수 있을 것 같은 자신감을 얻었습니다.
      지인들과 즐거운 시간을 보낸 뒤에는 다음에도 이 시간을 갖기 위해 열심히 살아야 겠다는 다짐도 하게 되었습니다. 
      좋은 기억을 만들어 가는 과정에서 노력과 인내가 필요한 경우들도 많았지만, 이겨낸 뒤에 지나간 후에 그 시간들이 저에게는 인내와 노력으로 이뤄낸 좋은 기억들이 되었습니다.
      사회생활을 시작하면서도 많은 작고 큰 이벤트들이 정말 많았지만, 저는 좋지 않았던 일도 지금의 제가 있게된 소중한 기억이라고 생각합니다.
      저는 앞으로 생기는 모든 기억들이 시간이 지난 뒤에도 좋은 기억이 될것이라 확신합니다. 제가 그렇게 만들기 위하여 매 순간 최선을 다할 것이기 때문입니다.
  `,
  },
  {
    title: "경험",
    content: ` 저의 삶은 다양한 경험을 추구하며 성장과 발전을 위한 여정으로 가득 차 있습니다. 이러한 경험들을 통해 저의 가치관과 열정을 더욱 풍부하게 표현하고자 합니다.

    먼저, 물리학과 학업을 추구하면서 아이들에게 수학 선생님으로 봉사활동을 한 경험은 제게 큰 영감을 준 순간 중 하나입니다. 수학을 가르치며 학생들의 눈빛 속에서 새로운 지식을 배우고 자신감을 길러주는 과정을 경험하며, 가르치는 것의 의미와 성장의 가치를 깨달았습니다.
    
    또한, 직장에서 업무를 진행하면서 결과물을 만들어내는 과정은 어려움과 도전을 포함하지만, 그 뿌듯함과 성취감은 결코 대체될 수 없었습니다. 프로젝트를 통해 문제를 해결하고 목표를 달성하는 과정은 저에게 팀 협력의 중요성과 끊임없는 도전이 성장을 이끌어낸다는 것을 보여주었습니다.
    
    또한 등산을 하면서 어려움을 극복하고 정상에 도달했을 때 느꼈던 보람은 업무나 학업에서 성취를 이끌어내는 데도 큰 도움을 주었습니다. 마찬가지로 일본 여행을 통해 다른 문화와 다양성을 체험하며 배운 것은 열린 마음으로 세상을 바라보는 중요성을 강조하였습니다.
    
    이러한 경험들은 제 삶의 토대이며, 행복과 성장을 향한 끊임없는 열망을 이끌어내는 원동력이 되었습니다. 저는 이러한 경험들을 바탕으로 더 나은 세상을 위해 노력하고, 함께 성장하며 가치 있는 순간들을 만들어나가고자 합니다.

  `,
  },
  { title: "포부", content: `` },
];
