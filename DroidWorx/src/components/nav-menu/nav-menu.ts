import { IEventAggregator, EventAggregator } from "aurelia";

export class NavMenu {
  constructor(@IEventAggregator private eventAggregator: EventAggregator) {}

  public toggleShoppingCart(): void {
    this.eventAggregator.publish("toggle-cart");
  }
}
