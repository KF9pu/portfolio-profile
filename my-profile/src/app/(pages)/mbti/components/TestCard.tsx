import { E_testTypes } from "@/enums/testTypes";
import { cls } from "hsh-utils-string";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, HTMLProps, useCallback } from "react";

interface SelectInspectionTypeBoxProps extends HTMLProps<HTMLDivElement> {
  testTypes: E_testTypes;
}

const TestCard: FC<SelectInspectionTypeBoxProps> = ({
  children,
  testTypes,
  ...restProps
}) => {
  const searchParams = useSearchParams()!;
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      className={cls(
        "flex justify-center items-center",
        "w-[160px] h-[120px]",
        "border",
        "shadow-bold",
        "rounded-[12px]"
      )}
      onClick={() =>
        router.push(
          "/mbti" + "?" + createQueryString("type", testTypes.toString())
        )
      }
      {...restProps}
    >
      {children}
    </div>
  );
};

export default TestCard;
