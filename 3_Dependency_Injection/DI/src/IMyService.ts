import { DI } from 'aurelia';

export const IMyService = DI.createInterface<IMyService>();

export interface IMyService {
    serviceName: string;
    action: () => string;
}
