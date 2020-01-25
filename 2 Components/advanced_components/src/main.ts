import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import * as ComponentRegistry from './components/_components';
Aurelia
    .register(
        StyleConfiguration.cssModulesProcessor(),
        ComponentRegistry
    )
    .app(MyApp)
    .start();
