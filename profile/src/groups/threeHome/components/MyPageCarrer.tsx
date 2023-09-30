import { useState, type FC } from "react";
import { ModalLayout } from "./MePageSub";
import { cls } from "@/common/libs";

interface MyPageCarrerProps {}

const MyPageCarrer: FC<MyPageCarrerProps> = ({}) => {
  const [changedPageIdx, setChangedPageIdx] = useState<number | undefined>(undefined);
  return (
    <ModalLayout>
      <div
        className={cls(
          "flex flex-col gap-[12px]",
          changedPageIdx === undefined ? "w-[80%]" : cls("", "w-full h-full", "relative")
        )}
      >
        {CAREERS.map(({ company, tenure, projects }, idx) => {
          return changedPageIdx === undefined || idx === changedPageIdx ? (
            <div
              className={cls(
                "flex flex-col justify-center items-center",
                "w-full",
                "cursor-pointer",
                "hover:text-tertiary",
                "transition-all",
                idx === changedPageIdx
                  ? cls("absolute top-0", "w-full h-full")
                  : "border-2 border-quaternary rounded-md hover:border-tertiary"
              )}
              key={`CAREERS_${idx}`}
              onClick={() => setChangedPageIdx(prev => (prev === undefined ? idx : undefined))}
            >
              <div className={cls("flex flex-col", changedPageIdx === undefined ? "justify-center items-center" : "")}>
                <h1 className="text-[20px] md:text-[24px]">{company}</h1>
                <h1 className="text-[12px] md:text-[16px]">{tenure}</h1>
              </div>
              {idx === changedPageIdx ? (
                <div
                  className={cls(
                    "flex flex-col gap-[16px]",
                    "w-full h-full",
                    "overflow-y-scroll",
                    "py-[12px] px-[12px]"
                  )}
                >
                  {projects.map(({ project, duration, works }, projects_idx) => {
                    return (
                      <div key={`projects_idx_${projects_idx}`}>
                        <p className={cls("text-[18px]")}>{project}</p>
                        <p className={cls("text-[15px]")}>{duration}</p>
                        <div className={cls("text-[13px]", "mt-[8px]")}>
                          {works.map((work, work_idx) => {
                            return (
                              <p className={cls("")} key={`work_idx_${work_idx}`}>
                                {work}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ) : null;
        })}
      </div>
    </ModalLayout>
  );
};
export default MyPageCarrer;

const CAREERS = [
  {
    company: "JEST CNS",
    tenure: "(2020.10 ~ 2021.05)",
    projects: [
      {
        project: "SI [(주)이크레더블]",
        duration: "(2020. 10 - 2021.01)",
        works: [
          "* 프로젝트 소개 : ",
          "- 기업평가를 위한 데이터 수집을 위하여 공공기관 공개 기업정보를 주기적으로 스크래핑",
          "* 사용기술 : ",
          "- JAVA, Spring, postgreSQL",
          "* 사용툴 : ",
          "- Eclipse, DBever",
          "* 형상관리 : ",
          "- SoftManager",
          "* 주 업무",
          "- Spring 스케줄러를 이용하여 데이터를 DB에 저장하는 기능 개발",
        ],
      },
      {
        project: "SM [삼성화재]",
        duration: "(2021. 02 - 2021.05)",
        works: [
          "* 프로젝트 소개 : ",
          "- 삼성화재 헬스케어앱 운영관리",
          "* 사용기술 : ",
          "- HTML, Jquery, JAVA, NEXUS, MySQL, Oracle",
          "* 사용툴 : ",
          "- Eclipse, HeidiSQL, DBever",
          "* 주 업무 : ",
          "- 헬스케어앱 정기업무 수행",
          "- 프로젝트 마이그레이션으로 인한 정기업무 쿼리 수정",
          "- UI 수정 & 개발",
        ],
      },
    ],
  },
  {
    company: "ALTAVA Group",
    tenure: "(2021.05 ~ 2023.05)",
    projects: [
      {
        project: "[Prada] NFT 프로젝트",
        duration: "(2021.05 - 2021.09)",
        works: [
          "* 프로젝트 소개 : ",
          "- Prada 내의 제품을 실사화한 3D NFT 발행하여 판매",
          "* 사용기술 : ",
          "- Reactjs, Solidity, hardhat",
          "* 사용툴 : ",
          "- VS code, RemixIde",
          "* 클라우드 : ",
          "- GCP",
          "* 도메인 : ",
          "- Godday, Namebright",
          "* 형상관리 : ",
          "- Github (Github Desktop)",
          "* 주 업무 : ",
          "- Web site UI 개발",
          "- NFT metadata API server 개발",
          "- smart contract 개발",
          "- Binance MainNet 배포",
        ],
      },
      {
        project: "[TAVA] 코인",
        duration: "(2021.10 - 2022.02)",
        works: [
          "* 프로젝트 소개 : ",
          "- Ethereum ERC20 Token 발행을 위한 Smart Contract 개발",
          "* 사용기술 : ",
          "- Solidity, hardhat",
          "* 사용툴 : ",
          "- VS code, RemixIde",
          "* 형상관리 : ",
          "- Github (Github Desktop)",
          "* 주 업무 : ",
          "- smart contract 개발",
          "- smart contract 패보 (Ethereum MainNet)",
          "- Tava coin 발행",
        ],
      },
      {
        project: "자사 홈페이지",
        duration: "(2022.02 - 2022.02)",
        works: [
          "* 프로젝트 소개 : ",
          "- 자사 홈페이지 개발",
          "* 사용기술 : ",
          "- Reactjs, typescript, nodejs, pm2",
          "* 사용툴 : ",
          "- VS code, Figma, Notion",
          "* 클라우드 : ",
          "- NCP",
          "* 도메인 : ",
          "- Godday, Namebright",
          "* 형상관리 : ",
          "- Github (Github Desktop)",
          "* 주 업무 : ",
          "- Web site UI 개발",
          "- Front-end 코드 빌드 & 배포",
          "- 도메인 설정",
        ],
      },
      {
        project: "[Second skin] NFT 웹 프로젝트",
        duration: "(2022.03 - 2022.06)",
        works: ["* 프로젝트 소개 : ", "* 사용기술 : ", "* 사용툴 : ", "* 주 업무 : "],
      },
      {
        project: "[BYGC] 랜딩 페이지",
        duration: "(2022.08 - 2022.08)",
        works: ["* 프로젝트 소개 : ", "* 사용기술 : ", "* 사용툴 : ", "* 주 업무 : "],
      },
      {
        project: "B2B [르노 코리아] 인터렉티브 NFT 웹 프로젝트",
        duration: "(2022.08 - 2022.12)",
        works: ["* 프로젝트 소개 : ", "* 사용기술 : ", "* 사용툴 : ", "* 주 업무 : "],
      },
      {
        project: "Clarins NFT 웹 프로젝트",
        duration: "(2023.01 - 2023.05)",
        works: ["* 프로젝트 소개 : ", "* 사용기술 : ", "* 사용툴 : ", "* 주 업무 : "],
      },
    ],
  },
];
