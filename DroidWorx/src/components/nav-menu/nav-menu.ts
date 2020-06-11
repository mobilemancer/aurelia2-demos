import { IEventAggregator, EventAggregator } from "aurelia";

import { ShoppingCart } from "./../shopping-cart/shopping-cart";

export class NavMenu {
  constructor(@IEventAggregator private eventAggregator: EventAggregator, public shoppingCart: ShoppingCart) {}

  public toggleShoppingCart(): void {
    this.eventAggregator.publish("toggle-cart");
  }
}
