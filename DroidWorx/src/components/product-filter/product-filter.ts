import { bindable, IEventAggregator, EventAggregator } from "aurelia";

import { DataService } from "./../../services/dataService";
import { IDataService } from "../../common/IDataService";
import { IDroid } from "./../../common/IDroid";
import { IFilterProperties } from "../../common/IFilterProperties";

export class ProductFilter {
  @bindable public filteredProducts: IDroid[];

  @bindable public searchText: string;

  @bindable public arakyd: boolean;
  @bindable public cybot: boolean;
  @bindable public automaton: boolean;
  private filterProperties: IFilterProperties = {
    arakyd: true,
    cybot: true,
    automaton: true,
  };

  constructor(
    @IDataService private dataService: DataService,
    @IEventAggregator eventAggregator: EventAggregator
  ) {
    this.filteredProducts = dataService.filterProducts(
      "",
      this.filterProperties
    );

    eventAggregator.subscribe("filter", (model: string) => {
      this.searchText = model;
    });
  }

  public searchTextChanged(val: string): void {
    this.filteredProducts = this.dataService.filterProducts(
      val,
      this.filterProperties
    );
  }

  public arakydChanged(val) {
    this.filterProperties.arakyd = val;
    this.filteredProducts = this.dataService.filterProducts(
      this.searchText,
      this.filterProperties
    );
  }

  public automatonChanged(val) {
    this.filterProperties.automaton = val;
    this.filteredProducts = this.dataService.filterProducts(
      this.searchText,
      this.filterProperties
    );
  }

  public cybotChanged(val) {
    this.filterProperties.cybot = val;
    this.filteredProducts = this.dataService.filterProducts(
      this.searchText,
      this.filterProperties
    );
  }
}
