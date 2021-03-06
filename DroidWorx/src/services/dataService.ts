import { DI } from "aurelia";

import { Droid } from "../common/Droid";
import { FilterProperties } from "../common/FilterProperties";
import { Legend } from "../common/Legend";
import { Recommendation } from "../common/Recommendation";

import legends from "../../data/legends.json";
import products from "../../data/products.json";
import productRecommendations from "../../data/product-recommendations.json";

export class DataService {
  public legends: Legend[] = [];
  public products: Droid[] = [];
  private productRecommendations: Recommendation[] = [];

  constructor() {
    this.legends = legends;
    this.products = products;
    this.productRecommendations = productRecommendations;
  }

  public getLegend(name: string): Legend {
    if (!name || name === "") {
      throw new Error("Invalid argument!");
    }

    return this.legends.filter((l) => {
      return l.name === name;
    })[0];
  }

  public filterProducts(fragment: string, filterProps: FilterProperties): Droid[] {
    const res = this.filterByText(fragment).filter((d) => {
      return (
        (filterProps.arakyd && d.manufacturer.includes("Arakyd")) ||
        (filterProps.automaton && d.manufacturer.includes("Automaton")) ||
        (filterProps.cybot && d.manufacturer.includes("Cybot"))
      );
    });
    return res;
  }

  public getRecommendations(amount: number): Recommendation[] {
    const results = [];
    do {
      const item = this.productRecommendations[Math.floor(Math.random() * this.productRecommendations.length)];
      if (results.indexOf(item) < 0) results.push(item);
    } while (results.length < amount);
    return results;
  }

  private filterByText(fragment: string): Droid[] {
    if (!fragment || fragment === "") {
      return this.products;
    } else {
      fragment = fragment.toLowerCase();
      return this.products.filter((d) => {
        return d.class.toLowerCase().includes(fragment) || d.model.toLowerCase().includes(fragment);
      });
    }
  }
}

export const IDataService = DI.createInterface<DataService>("IDataService").withDefault((x) =>
  x.singleton(DataService),
);
