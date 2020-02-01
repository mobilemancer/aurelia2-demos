import { IMyService } from './IMyService';

export class GreeterService implements IMyService {
    public serviceName = "GreeterService";
    public action() {
        return `Hello from ${this.serviceName}`;
    }
}
