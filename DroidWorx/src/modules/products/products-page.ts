import { bindable } from "aurelia";

import { IDroid } from "./../../common/IDroid";
import { IDataService } from "../../common/IDataService";
import { DataService } from "../../services/dataService";

export class ProductsPage {
  @bindable public filteredProducts: IDroid[] = [];
  public productRecommendations = [];

  constructor(@IDataService private dataService: DataService) {
    this.productRecommendations = dataService.productRecommendations;
  }
}
