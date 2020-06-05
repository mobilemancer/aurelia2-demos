import { bindable } from "aurelia";

import { Droid } from "../../common/Droid";
import { DataService, IDataService } from "../../services/dataService";

export class ProductsPage {
  @bindable public filteredProducts: Droid[] = [];
  public productRecommendations = [];

  constructor(@IDataService dataService: DataService) {
    this.productRecommendations = dataService.getRecommendations(4);
  }
}
