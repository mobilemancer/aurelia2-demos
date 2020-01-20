import { inject } from 'aurelia';

import { IMyService } from './IMyService';

@inject()
export class MyApp {
  // public inject = [IMyService];
  public message = 'Hello World!';

  constructor(private service: IMyService) {
    console.warn(service.serviceName);
  }

  public clicked() {
    console.warn(this.service.serviceName);
    console.warn(this.service.action.call(this));
  }

}
