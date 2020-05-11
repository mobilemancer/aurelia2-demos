import Aurelia, { RouterConfiguration, StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import * as Modules from './modules/_modules';
import * as Components from './components/_components';

Aurelia
    .register(
        // StyleConfiguration.cssModulesProcessor(),
        RouterConfiguration,
        Modules,
        Components
    )
    .app(MyApp)
    .start();
