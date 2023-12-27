"use client";

import { _isLoading, _isVisible } from "@/app/recoilContextProvider";
import { useRouter, usePathname } from "next/navigation";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import useNavigator from "./useNavigator";

const useLoadingRoute = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, startLoading] = useRecoilState(_isLoading);
  const resetIsVisible = useSetRecoilState(_isVisible);
  // const {} = useNavigator();
  const loadingRouter = (path: string) => {
    resetIsVisible(false);
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
