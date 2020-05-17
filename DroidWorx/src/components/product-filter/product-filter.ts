import { bindable } from "aurelia";

import { DataService } from "./../../services/dataService";
import { IDataService } from "../../common/IDataService";
import { IDroid } from "./../../common/IDroid";

export class ProductFilter {
  @bindable public filteredProducts: IDroid[];

  @bindable public searchText: string;

  constructor(@IDataService private dataService: DataService) {
    this.filteredProducts = dataService.filterProducts("");
  }

  public set searchFilter(val: string) {
    console.log(val);
  }

  public searchTextChanged(val) {
    console.log(this.dataService.filterProducts(val));
    this.filteredProducts = this.dataService.filterProducts(val);
  }
}
