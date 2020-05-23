import { IEventAggregator, EventAggregator } from "aurelia";

export class ShoppingCart {
  public cart: { productName: string; qty: number }[] = [
    { productName: "R2", qty: 55 },
    { productName: "Viper Probe", qty: 55 },
    { productName: "RA-7", qty: 55 },
  ];

  constructor(@IEventAggregator eventAggregator: EventAggregator) {
    eventAggregator.subscribe("add-item", (product: string) => {
      this.cart.push({ productName: product, qty: 1 });
    });
  }
}
