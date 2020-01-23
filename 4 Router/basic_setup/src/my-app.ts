import { IRouter } from '@aurelia/router';

export class MyApp {
  public message = 'Hello World!';

  constructor(@IRouter private router: IRouter) {

  }

  public beforeBind() {
    this.setRoutes();
  }

  private setRoutes() {
    this.router.setNav('main', [
      { title: 'Home', route: 'home' },
      { title: 'About', route: 'about' },
    ]);
  }
}
