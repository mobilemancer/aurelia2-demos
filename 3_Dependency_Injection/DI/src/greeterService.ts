import { IMyService } from './IMyService';

export class GreeterService implements IMyService {
    public serviceName = "GreeterService";
    public action = () => `Hello from ${this.serviceName}`;
}
