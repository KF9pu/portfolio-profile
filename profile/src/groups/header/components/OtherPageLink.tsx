import { cls } from "@/libs/common";
import useTheme from "@/theme/hooks/useTheme";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface OtherPageLinkProps {
  children: React.ReactNode;
  url: string;
}

const OtherPageLink: FC<OtherPageLinkProps> = ({ children, url }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={url}
      className={cls(
        "rounded-md hover:border",
        "w-[80%]",
        "py-[8px]",
        "text-center",
        "border",
        pathname === url ? cls("border-primary", "text-primary") : cls("border-tertiary", "border-transparent")
      )}
    >
      {children}
    </Link>
  );
};
export default OtherPageLink;
