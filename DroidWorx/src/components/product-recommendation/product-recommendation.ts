import { bindable } from "aurelia";

export class ProductRecommendation {
  @bindable public item: any;
  public imgSource: string;

  public afterBind() {
    if (!this.item.productName || this.item.productName === "") return;
    const fileName = this.item.productName.replace(/\s/g, "_") + ".png";
    this.imgSource = "./../../../../../content/images/products/" + fileName;
  }
}
