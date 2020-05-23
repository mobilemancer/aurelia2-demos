import { IEventAggregator, EventAggregator } from "aurelia";

export class NavMenu {
  constructor(@IEventAggregator private eventAggregator: EventAggregator) {}

  public toggleShoppingCart() {
    this.eventAggregator.publish("toggle-cart");
  }
}
