import { IDroid } from './../common/IDroid';
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

    public filterProducts(fragment: string): IDroid[] {
        if (!fragment || fragment === "") {
            throw new Error("Invalid argument!");
        }
        return this.products.filter((d) => {
            return d.class.includes(fragment);
        });
    }

}
