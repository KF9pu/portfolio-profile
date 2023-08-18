import { DevStartdate } from "../constants";

export class useMyinfo {
  yearsOfService: number;
  constructor() {
    this.yearsOfService = this.setYearsOfService();
  }

  private setYearsOfService() {
    const devStartdate = Math.floor(new Date(DevStartdate).getTime() / 1000);
    const today = Math.floor(new Date().getTime() / 1000);
    return Math.round((today - devStartdate) / 60 / 60 / 24 / 365);
  }
}