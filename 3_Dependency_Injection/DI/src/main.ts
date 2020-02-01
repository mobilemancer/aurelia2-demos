import Aurelia, { Registration } from 'aurelia';
import { MyApp } from './my-app';

import { IMyService } from './IMyService';
import { GreeterService } from "./greeterService";

Aurelia
    .register(
        Registration.singleton(IMyService, GreeterService)
    )
    .app(MyApp)
    .start();
