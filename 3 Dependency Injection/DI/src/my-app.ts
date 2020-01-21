import { inject } from 'aurelia';

import { IMyService } from './IMyService';

@inject(IMyService)
export class MyApp {
  // public static inject = [IMyService];
  public serviceMessage = '';

  constructor(private service: IMyService) { }

  public clicked() {
    this.serviceMessage = this.service.action.call(this);
  }

}
