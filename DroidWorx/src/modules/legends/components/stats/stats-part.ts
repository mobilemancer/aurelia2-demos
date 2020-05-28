import { ILegend } from "./../../../../common/ILegend";

export class StatsPart {
  public legend: ILegend;

  public enter(params: object) {
    if (!params) return false;
    this.legend = params['legend'];
  }
}
