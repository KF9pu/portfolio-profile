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
    content: `어머니의 권유로 아동복지회관에서 초등학생들에게 수학 선생님을 했던 기억은 저를 반성하는 계기가 되었습니다. 초등학교 1학년부터 6학년까지 학생들이 다같이 섞여있어서 학교 숙제 중에 모르는 문제를 알려주는 식으로 수업이 진행 되었습니다. 당연히 문제를 해결하는 방법을 알려주기 위해서 저만의 방식으로 아이들에게 설명해주려고 하였습니다. 하지만, 모든 아이들이 제가 생각한 방법을 이해하지는 못하였습니다. 그 전까지는 사람은 모두 같다는 생각을 했었는데, 처음으로 사람은 모두 다르다는 것을 어렴풋이 느꼈습니다. 그 후로는 아이들 개개인의 시선으로 설명을 해주려 노력을 하면서 ‘다름’을 받아들인 후에 얻을 수 있는 ‘존중’에 대하여 깨달았습니다.

    또한, 군대와 사회생활을 하며 구성원으로서의 책임에 대하여 배우게 되었습니다. 사회에 속한 모두는 사회에서 문제가 생기지 않도록 의무가 부여가 된다고 느꼈습니다. 하지만, 개인이 의무를 소홀히 하는 순간 구성원 전체가 곤경에 처하기도, 사회가 흔들리기도 한다는 것을 많이 느꼈습니다. 때문에 구성원이 되면 모든 구성원들이 자신들의 역할에 최선을 다할 수 있도록 최선을 다하고 서로 돕는 것이라고 생각하게 되었습니다.
    
    또한, 저는 초록색을 보기 위해 가끔 등산을 할 때가 있습니다. 30분이 지날 때 마다, ‘돌아 갈까?’. ‘이만 하면 됬어’ 라는 생각들이 저를 유혹합니다. 유혹을 이겨내고 목표했던 지점에 도달하는 순간 느껴지는 보람은 포기하자는 마음의 유혹을 물리치고, 업무나 학업에서 성취를 끌어내는 데 큰 도움이 되었습니다.
    
    좋은 요리가 되기 위해서는 좋은 재료들과 적절한 조미료들이 필요합니다. 인생을 요리에 비유하자면 경험이 재료이고, 가치관이 조미료라고 생각합니다. 아무리 좋은 경험을 하더라도, 상황에 맞는 조미료를 사용하지 않으면 좋은 요리는 나오기 어렵습니다. 제 인생의 요리사로써 좋은 재료를 구하기 위해 힘쓰고, 좋은 재료에 알맞은 조미료를 사용 할 수 있도록 정진하고 싶습니다.
  `,
  },
  {
    title: "포부",
    content: `가족이 세상 전부였던 어린 시절 저의 꿈은 좋은 아빠가 되는 것이었습니다. 지금의 저는 개발자로 일을 하면서 기술적인 역량을 향상시키는 것 이상으로, 사람들에게 긍정적인 영향을 줄 수 있는 사람이고 싶습니다.

    저에게 재발자라는 직업은 세상과 꿈의 연결고리 중 하나라고 생각합니다. 제가 만든 서비스가 사람들에게 혁신적이고 편리함을 가져다 줄 수 있을 것이고, 더 나은 미래에 보탬이 될 것을 알기 때문입니다.

     
  `,
  },
];
