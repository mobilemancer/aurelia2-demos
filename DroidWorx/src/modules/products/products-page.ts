import { bindable } from "aurelia";

import { IDroid } from "./../../common/IDroid";

export class ProductsPage {
  @bindable public filteredProducts: IDroid[] = [];
}
