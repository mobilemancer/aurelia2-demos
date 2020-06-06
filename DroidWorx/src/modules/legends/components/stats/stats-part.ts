import { Legend } from "../../../../common/Legend";

export class StatsPart {
  public legend: Legend;

  public enter(params: object): boolean {
    if (!params) return false;
    this.legend = params["legend"];
    return true;
  }
}
