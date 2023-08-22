import { useState } from "react";

const useMyinfo = () => {
  const [myinfo, setMyinfo] = useState<Myinfo>(new Myinfo());

  return { ...myinfo };
};

class Myinfo {
  name: string;
  gender: string;
  bloodType: string;
  mbti: string;
  residence: string;
  hobys: string;
  yearsOfService: string;
  color: string;
  born: string;
  age: string;

  constructor() {
    this.name = this.checkEnvData(process.env.NEXT_PUBLIC_NAME);
    this.born = this.checkEnvData(process.env.NEXT_PUBLIC_BORN_DT);
    this.age = this.setAge();
    this.gender = this.checkEnvData(process.env.NEXT_PUBLIC_GENDER);
    this.color = this.checkEnvData(process.env.NEXT_PUBLIC_COLOR);
    this.bloodType = this.checkEnvData(process.env.NEXT_PUBLIC_BLOOD_TYPE);
    this.mbti = this.checkEnvData(process.env.NEXT_PUBLIC_MBTI);
    this.residence = this.checkEnvData(process.env.NEXT_PUBLIC_RESIDENCE);
    this.hobys = this.checkEnvData(process.env.NEXT_PUBLIC_HOBY);
    this.yearsOfService = this.setYearsOfService();
  }

  private setAge() {
    if (process.env.NEXT_PUBLIC_BORN_DT) {
      const bornDate = Math.floor(new Date(process.env.NEXT_PUBLIC_BORN_DT).getTime() / 1000);
      const today = Math.floor(new Date().getTime() / 1000);
      return Math.floor((today - bornDate) / 60 / 60 / 24 / 365).toString();
    } else {
      return "-";
    }
  }

  private setYearsOfService() {
    if (process.env.NEXT_PUBLIC_DEVSTART_DT) {
      const devStartdate = Math.floor(new Date(process.env.NEXT_PUBLIC_DEVSTART_DT!).getTime() / 1000);
      const today = Math.floor(new Date().getTime() / 1000);
      return Math.round((today - devStartdate) / 60 / 60 / 24 / 365).toString();
    } else {
      return "-";
    }
  }

  private checkEnvData(envData: any) {
    return envData ?? "-";
  }
}

export default useMyinfo;
