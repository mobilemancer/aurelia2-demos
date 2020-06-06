import { bindable, IEventAggregator, EventAggregator } from "aurelia";

import { Recommendation } from "../../common/Recommendation";

export class ProductRecommendation {
  @bindable public item: Recommendation;
  public imgSource: string;

  constructor(@IEventAggregator private eventAggregator: EventAggregator) {}

  public afterBind(): void {
    if (!this.item.productName || this.item.productName === "") return;
    const fileName = this.item.productName.replace(/\s/g, "_") + ".png";
    this.imgSource = "./../../../../../content/images/products/" + fileName;
  }

  public filterProduct(model: string): void {
    this.eventAggregator.publish("filter", model);
  }
}
