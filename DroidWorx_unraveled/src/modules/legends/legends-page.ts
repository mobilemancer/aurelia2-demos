import { DataService } from "../../services/dataService";
import { IDataService } from "../../common/IDataService";

export class LegendsPage {
  public legends: any[];

  constructor(@IDataService private dataService: DataService) {}

  public async beforeBind() {
    this.legends = this.dataService.legends;
  }
}
