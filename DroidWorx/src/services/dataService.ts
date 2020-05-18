import { IFilterProperties } from './../common/IFilterProperties';
import { IDroid } from "./../common/IDroid";
import { ILegend } from "../common/ILegend";

import legends from "../../data/legends.json";
import products from "../../data/products.json";

export class DataService {
  public legends: ILegend[] = [];
  public products: IDroid[] = [];

  constructor() {
    this.legends = legends;
    this.products = products;
  }

  public getLegend(name: string): ILegend {
    if (!name || name === "") {
      throw new Error("Invalid argument!");
    }

    return this.legends.filter((l) => {
      return l.name === name;
    })[0];
  }

  public filterProducts(fragment: string, filterProps: IFilterProperties): IDroid[] {
    let res = this.filterByText(fragment).filter((d) => {
      return (
        (filterProps.arakyd && d.manufacturer.includes("Arakyd"))
        || (filterProps.automaton && d.manufacturer.includes("Automaton"))
        || (filterProps.cybot && d.manufacturer.includes("Cybot"))
      );
    });
    console.log(res);
    return res;
  }

  private filterByText(fragment: string): IDroid[] {
    if (!fragment || fragment === "") {
      return this.products;
    } else {
      return this.products.filter((d) => {
        d.class.includes(fragment)
      });
    }
  }

}
