import Aurelia, { RouterConfiguration, StyleConfiguration, Registration } from 'aurelia';

import { DataService } from './services/dataService';
import { MyApp } from './my-app';
import * as Modules from './modules/_modules';
import * as Components from './components/_components';
import { IDataService } from './common/IDataService';

Aurelia
    .register(
        // StyleConfiguration.cssModulesProcessor(),
        RouterConfiguration,
        Modules,
        Components,
        Registration.singleton(IDataService, DataService),

    )
    .app(MyApp)
    .start();
