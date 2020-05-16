import { ILegend } from './../../../../common/ILegend';
import { IDataService } from "../../../../common/IDataService";
import { DataService } from "../../../../services/dataService";

export class StatsPart {
  public legend: ILegend;

  public get calculatedMass(): string {
    return this.legend.mass !== 0 ? this.legend.mass + " kg" : "Unknown";
  }

  public get calculatedHeight(): string {
    return this.legend.height !== 0 ? this.legend.height + " m" : "Unknown";
  }

  constructor(@IDataService private dataService: DataService) { }

  public enter(legendName: object) {
    if (!legendName || !legendName[0]) return false;

    this.legend = this.dataService.getLegend(legendName[0]);
  }
}
