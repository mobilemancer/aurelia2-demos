import { DataService } from "./../../../../services/dataService";
import { IDroid } from "./../../../../common/IDroid";
import { IDataService } from "../../../../common/IDataService";

export class ImagePart {
  public source: string;

  constructor(@IDataService private dataService: DataService) {}

  public enter(droidName: object) {
    if (!droidName || !droidName[0]) return false;

    const legend = this.dataService.getLegend(droidName[0]);

    this.source = "./../../../../../content/images/legends/" + legend.image;
  }
}
