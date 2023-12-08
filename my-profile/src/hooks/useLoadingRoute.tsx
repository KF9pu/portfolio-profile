"use client";

import { _isLoading } from "@/app/recoilContextProvider";
import { useRouter, usePathname } from "next/navigation";
import { useSetRecoilState } from "recoil";

const useLoadingRoute = () => {
  const router = useRouter();
  const pathname = usePathname();
  const startLoading = useSetRecoilState(_isLoading);

  const loadingRouter = (path: string) => {
    if (!(path === pathname)) startLoading(true);

    setTimeout(() => {
      router.push(path);
    }, 1000);
  };

  return { loadingRouter };
};

export default useLoadingRoute;
