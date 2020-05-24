import { IEventAggregator, EventAggregator } from "aurelia";

export class ShoppingCart {
  public cart: {
    productName: string;
    qty: number;
    imgSource: string;
    price: number;
  }[] = [];
  public totalPrice: number = 0;

  constructor(@IEventAggregator eventAggregator: EventAggregator) {
    eventAggregator.subscribe("add-item", (product: any) => {
      let prod = this.cart.filter((p) => p.productName === product.model);
      debugger;
      if (prod.length === 0) {
        this.cart.push({
          productName: product.model,
          qty: 1,
          imgSource: this.getImageLink(product.model),
          price: product.price,
        });
      } else {
        prod[0].qty += 1;
      }

      this.calculateTotalPrice();
    });
  }

  public calculateTotalPrice(): void {
    let total = 0;
    this.cart.forEach((p) => {
      total = total + p.qty * p.price;
    });
    this.totalPrice = total;
  }

  private getImageLink(product: string): string {
    if (!product || product === "") return "";
    const fileName = product.replace(/\s/g, "_") + ".png";
    return "./../../../../../content/images/products/" + fileName;
  }
}
