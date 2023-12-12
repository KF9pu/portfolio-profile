import { cls } from "hsh-utils-string";
import { useRouter } from "next/navigation";
import type { FC } from "react";

interface TextEndButtonProps {}

const TextEndButton: FC<TextEndButtonProps> = ({}) => {
  const router = useRouter();
  return (
    <button
      className={cls("w-full", "p-[12px]", "rounded-[12px]", "shadow-bold")}
      onClick={() => router.push("/mbti")}
    >
      검사 종료 하기
    </button>
  );
};
export default TextEndButton;
