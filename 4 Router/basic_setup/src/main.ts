import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

import { BookService } from './services/bookService';
import * as Modules from './modules/_modules';

Aurelia
    .register(
        // need to add the RouterConfig
        RouterConfiguration,
        // Modules
        BookService

    )
    .app(MyApp).start();
