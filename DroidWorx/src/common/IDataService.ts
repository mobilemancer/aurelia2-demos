import { DI } from "aurelia";

import { IDroid } from "./IDroid";

export const IDataService = DI.createInterface<IDataService>();

export interface IDataService {
  legends: IDroid[];
  getLegend: IDroid;
}
