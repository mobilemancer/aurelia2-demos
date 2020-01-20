import Aurelia from 'aurelia';
import { MyApp } from './my-app';

import { Registration } from 'aurelia';
import { IMyService } from './IMyService';
import { GreeterService } from "./greeterService";

Aurelia
    .register(
        Registration.singleton(IMyService, GreeterService)
    )
    .app(MyApp)
    .start();
