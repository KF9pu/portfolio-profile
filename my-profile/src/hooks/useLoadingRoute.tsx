"use client";

import { _isLoading } from "@/app/recoilContextProvider";
import { useRouter, usePathname } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";

const useLoadingRoute = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, startLoading] = useRecoilState(_isLoading);

  const loadingRouter = (path: string) => {
    if (!(path === pathname)) startLoading(true);

    if (!isLoading) {
      setTimeout(() => {
        router.push(path);
      }, 1000);
    }
  };

  return { loadingRouter };
};

export default useLoadingRoute;
