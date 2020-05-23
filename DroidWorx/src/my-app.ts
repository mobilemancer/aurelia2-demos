import { EventAggregator } from "aurelia";
import { IEventAggregator } from "aurelia";

export class MyApp {
  public cartDiv: HTMLElement;

  constructor(@IEventAggregator private eventAggregator: EventAggregator) {
    eventAggregator.subscribe("toggle-cart", () => {
      if (this.cartDiv.classList.contains("cart-open")) {
        this.cartDiv.classList.remove("cart-open");
        this.cartDiv.classList.add("cart-closed");
      } else {
        this.cartDiv.classList.remove("cart-closed");
        this.cartDiv.classList.add("cart-open");
      }
    });
  }
}
