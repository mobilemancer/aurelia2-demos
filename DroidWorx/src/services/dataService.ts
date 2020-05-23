import { IFilterProperties } from "./../common/IFilterProperties";
import { IDroid } from "./../common/IDroid";
import { ILegend } from "../common/ILegend";

import legends from "../../data/legends.json";
import products from "../../data/products.json";
import productRecommendations from "../../data/product-recommendations.json";

export class DataService {
  public legends: ILegend[] = [];
  public products: IDroid[] = [];
  public productRecommendations: any[] = [];

  constructor() {
    this.legends = legends;
    this.products = products;
    this.productRecommendations = productRecommendations;
  }

  public getLegend(name: string): ILegend {
    if (!name || name === "") {
      throw new Error("Invalid argument!");
    }

    return this.legends.filter((l) => {
      return l.name === name;
    })[0];
  }

  public filterProducts(
    fragment: string,
    filterProps: IFilterProperties
  ): IDroid[] {
    let res = this.filterByText(fragment).filter((d) => {
      return (
        (filterProps.arakyd && d.manufacturer.includes("Arakyd")) ||
        (filterProps.automaton && d.manufacturer.includes("Automaton")) ||
        (filterProps.cybot && d.manufacturer.includes("Cybot"))
      );
    });
    return res;
  }

  private filterByText(fragment: string): IDroid[] {
    if (!fragment || fragment === "") {
      return this.products;
    } else {
      fragment = fragment.toLowerCase();
      return this.products.filter((d) => {
        return (
          d.class.toLowerCase().includes(fragment) ||
          d.model.toLowerCase().includes(fragment)
        );
      });
    }
  }
}
