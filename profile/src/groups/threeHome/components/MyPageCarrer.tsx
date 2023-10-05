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
        {CAREERS.map(({ company, tenure, contents }, idx) => {
          return changedPageIdx === undefined || idx === changedPageIdx ? (
            <div
              className={cls(
                "flex flex-col justify-center items-center",
                "w-full",
                "cursor-pointer",
                "hover:text-tertiary",
                "transition-all",
                idx === changedPageIdx
                  ? cls("absolute top-[12px]", "w-full h-full")
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
                  {contents}
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
    contents: (
      <div>
        <h1>SI 개발팀</h1>
        <section>
          <h1 className="">1. 공공데이터 스크레퍼 개발</h1>
          <ul className="pl-[8px]">
            <li>
              <h2>개발 언어 및 기술</h2>
              <div className="pl-[12px]">
                <p>개발 언어 : Java</p>
                <p>사용 기술 : Spring 프레임워크</p>
                <p>DB : PostgreSQL</p>
              </div>
            </li>
            <li>
              <h2>개발 도구</h2>
              <div className="pl-[12px]">
                <p>통합 개발 환경 (IDE) : Eclipse</p>
                <p>DB 관리 도구 : DBever</p>
              </div>
            </li>
            <li>
              <h2>형상 관리</h2>
              <div className="pl-[12px]">
                <p>관리 도구 : SoftManager</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    company: "ALTAVA Group",
    tenure: "(2021.05 ~ 2023.05)",
    contents: <div>오호라</div>,
  },
];

interface ContentsProps {
  teamName: string;
  lists: { projectTitle: string; title: string; contents: string[] }[];
}
const Contents: FC<ContentsProps> = ({ teamName, lists }) => {
  return (
    <div>
      <h1>{teamName}</h1>
      {lists.map(({ projectTitle, contents, title }, idx) => {
        return (
          <section key={`Carrer_lists_${idx}`}>
            <h1 className="">{projectTitle}</h1>
            <ul className="pl-[8px]">
              <li>
                <h2>{title}</h2>
                <div className="pl-[12px]">
                  {contents.map((sontrnt, idx) => {
                    return <p key={`Carrer_lists_contents_${idx}`}>{sontrnt}</p>;
                  })}
                </div>
              </li>
            </ul>
          </section>
        );
      })}
    </div>
  );
};
