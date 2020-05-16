import { DI } from "aurelia";

import { ILegend } from "./ILegend";
import { IDroid } from "./IDroid";

export const IDataService = DI.createInterface<IDataService>();

export interface IDataService {
    legends: ILegend[];
    getLegend: ILegend;
    filterProducts(fragment: string): IDroid[];
}
