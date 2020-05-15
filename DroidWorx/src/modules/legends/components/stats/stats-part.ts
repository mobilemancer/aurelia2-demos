import { IDroid } from "./../../../../common/IDroid";
import { IDataService } from "../../../../common/IDataService";
import { DataService } from "../../../../services/dataService";

export class StatsPart {
  public droid: IDroid;

  public get calculatedMass(): string {
    return this.droid.mass !== 0 ? this.droid.mass + " kg" : "Unknown";
  }

  public get calculatedHeight(): string {
    return this.droid.height !== 0 ? this.droid.height + " m" : "Unknown";
  }

  constructor(@IDataService private dataService: DataService) {}

  public enter(droidName: object) {
    if (!droidName || !droidName[0]) return false;

    this.droid = this.dataService.getLegend(droidName[0]);
  }
}
