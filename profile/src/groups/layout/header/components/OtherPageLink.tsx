import { cls } from "@/common/libs";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { _isDropDown } from "@/store/default";

interface OtherPageLinkProps {
  children: React.ReactNode;
  url: string;
}

const OtherPageLink: FC<OtherPageLinkProps> = ({ children, url }) => {
  const router = useRouter();
  const setIsDropDown = useSetRecoilState(_isDropDown);

  return (
    <Link
      href={url}
      className={cls(
        "rounded-md hover:border",
        "w-[80%]",
        "py-[8px]",
        "text-center",
        "border",
        router.pathname === url ? cls("border-primary", "text-primary") : cls("border-tertiary", "border-transparent")
      )}
      onClick={() => setIsDropDown(false)}
    >
      {children}
    </Link>
  );
};
export default OtherPageLink;
