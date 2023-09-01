import { NoneProps } from "@/common/interface";
import type { FC } from "react";
import { ModalLayout } from "./MePageSub";
import { historys } from "../constants";
import { cls } from "@/common/libs";

const MyPageHistory: FC<NoneProps> = ({}) => {
  return (
    <ModalLayout>
      <div className={cls("flex flex-col gap-[4px]", "")}>
        {historys.map((history, index) => {
          return (
            <div className={cls("flex gap-[4px]", "hover:text-quinary")}>
              {history.map((item, index) => {
                return (
                  <span>
                    {item}
                    {index === 0 ? " :" : ""}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </ModalLayout>
  );
};
export default MyPageHistory;
