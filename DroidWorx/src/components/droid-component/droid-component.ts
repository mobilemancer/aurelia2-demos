import { bindable, IEventAggregator, EventAggregator } from "aurelia";

import { Droid } from "../../common/Droid";

export class DroidComponent {
  @bindable public droid: Droid;
  public imgSource: string;

  constructor(@IEventAggregator private eventAggregator: EventAggregator) {}

  public afterBind() {
    this.imgSource = this.productImage(this.droid.model);
  }

  public addToCart() {
    this.eventAggregator.publish("add-item", this.droid);
  }

  private productImage(model: string) {
    if (!model || model === "") return "";
    const fileName = model.replace(/\s/g, "_") + ".png";
    return "./../../../../../content/images/products/" + fileName;
  }
}
