import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import * as Modules from './modules/_modules';

Aurelia
    .register(
        // need to add the RouterConfig
        RouterConfiguration,
        // Modules

    )
    .app(MyApp).start();
