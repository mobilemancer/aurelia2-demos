import { bindable, IEventAggregator, EventAggregator, IDisposable } from "aurelia";

import { DataService, IDataService } from "./../../services/dataService";
import { Droid } from "../../common/Droid";
import { FilterProperties } from "../../common/FilterProperties";

export class ProductFilter {
  @bindable public filteredProducts: Droid[];

  @bindable public searchText: string;

  @bindable public arakyd: boolean;
  @bindable public cybot: boolean;
  @bindable public automaton: boolean;
  private filterProperties: FilterProperties = {
    arakyd: true,
    cybot: true,
    automaton: true,
  };
  private eventListeners: IDisposable[] = [];

  constructor(@IDataService private dataService: DataService, @IEventAggregator eventAggregator: EventAggregator) {
    this.filteredProducts = dataService.filterProducts("", this.filterProperties);

    this.eventListeners.push(
      eventAggregator.subscribe("filter", (model: string) => {
        this.searchText = model;
      }),
    );
  }

  public afterUnbind() {
    this.eventListeners.forEach((el) => el.dispose());
  }

  public searchTextChanged(val: string): void {
    this.filteredProducts = this.dataService.filterProducts(val, this.filterProperties);
  }

  public arakydChanged(val) {
    this.filterProperties.arakyd = val;
    this.filteredProducts = this.dataService.filterProducts(this.searchText, this.filterProperties);
  }

  public automatonChanged(val) {
    this.filterProperties.automaton = val;
    this.filteredProducts = this.dataService.filterProducts(this.searchText, this.filterProperties);
  }

  public cybotChanged(val) {
    this.filterProperties.cybot = val;
    this.filteredProducts = this.dataService.filterProducts(this.searchText, this.filterProperties);
  }
}
