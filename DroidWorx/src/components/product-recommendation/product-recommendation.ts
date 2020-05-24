import { bindable, IEventAggregator, EventAggregator } from "aurelia";

export class ProductRecommendation {
  @bindable public item: any;
  public imgSource: string;

  constructor(@IEventAggregator private eventAggregator: EventAggregator) {}

  public afterBind() {
    if (!this.item.productName || this.item.productName === "") return;
    const fileName = this.item.productName.replace(/\s/g, "_") + ".png";
    this.imgSource = "./../../../../../content/images/products/" + fileName;
  }

  public filterProduct(model: string) {
    this.eventAggregator.publish("filter", model);
  }
}
