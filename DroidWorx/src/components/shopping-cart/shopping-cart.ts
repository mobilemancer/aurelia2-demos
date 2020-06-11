import { IEventAggregator, EventAggregator, IDisposable } from "aurelia";
import { Droid } from "../../common/Droid";

export class ShoppingCart {
  public cart: {
    productName: string;
    qty: number;
    imgSource: string;
    price: number;
  }[] = [];
  public totalPrice = 0;
  public totalCount: number = 0;

  private eventListeners: IDisposable[] = [];

  constructor(@IEventAggregator private eventAggregator: EventAggregator) {
    this.eventListeners.push(
      eventAggregator.subscribe("add-item", (product: Droid) => {
        const prod = this.cart.filter((p) => p.productName === product.model);
        if (prod.length === 0) {
          this.cart.push({
            productName: product.model,
            qty: 1,
            imgSource: this.getImageLink(product.model),
            price: product.price,
          });
        } else {
          ++prod[0].qty;
        }

        this.calculateTotals();
      }),
    );
  }

  public afterUnbind(): void {
    this.eventListeners.forEach((el) => el.dispose());
  }

  calculateTotals() {
    this.totalPrice = this.calculateTotalPrice();
    this.totalCount = this.calculateTotalCount();
  }

  private calculateTotalPrice(): number {
    let total = 0;
    this.cart.forEach((p) => {
      total = total + p.qty * p.price;
    });
    return total;
  }

  private calculateTotalCount(): number {
    let total = 0;
    this.cart.forEach((p) => {
      total = total + parseFloat(<any>p.qty);
    });
    return total;
  }

  public filterProduct(model: string): void {
    this.eventAggregator.publish("filter", model);
  }

  private getImageLink(product: string): string {
    if (!product || product === "") return "";
    const fileName = product.replace(/\s/g, "_") + ".png";
    return "./../../../../../content/images/products/" + fileName;
  }
}
