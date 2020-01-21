import { IMyService } from './IMyService';

export class MyApp {
  // public static inject = [IMyService];
  public message = '';

  constructor(@IMyService private service: IMyService) { }

  public clicked() {
    this.message = this.service.action.call(this);
  }

}
