import { IDroid } from "./../common/IDroid";
import droids from "../../data/legends.json";

export class DataService {
  public legends: IDroid[] = [];

  constructor() {
    this.legends = droids;
  }

  public getLegend(name: string): IDroid {
    if (!name || name === "") {
      throw new Error("Invalid argument!");
    }

    return this.legends.filter((l) => {
      return l.name === name;
    })[0];
  }
}
