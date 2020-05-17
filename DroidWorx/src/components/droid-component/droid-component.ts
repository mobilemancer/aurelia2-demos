import { XYZ } from "./xyz";
import { bindable } from "aurelia";

import { IDroid } from "../../common/IDroid";

export class DroidComponent {
  @bindable public droid: IDroid;
  public imgSource: string;

  constructor(xyz: XYZ) {}

  public afterBind() {
    if (!this.droid.model || this.droid.model === "") return "";

    const fileName = this.droid.model.replace(/\s/g, "_") + ".png";

    this.imgSource = "./../../../../../content/images/products/" + fileName;
  }
}
