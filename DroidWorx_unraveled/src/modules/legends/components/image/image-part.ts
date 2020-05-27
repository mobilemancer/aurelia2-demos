import { DataService } from "./../../../../services/dataService";
import { IDataService } from "../../../../common/IDataService";

export class ImagePart {
  public source: string;

  constructor(@IDataService private dataService: DataService) {}

  public enter(legendName: object) {
    if (!legendName || !legendName[0]) return false;
    const legend = this.dataService.getLegend(legendName[0]);
    this.source = "./../../../../../content/images/legends/" + legend.image;
  }
}
