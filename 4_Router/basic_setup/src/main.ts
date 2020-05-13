import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

import { BookService } from './services/bookService';

Aurelia
    .register(
        // need to add the RouterConfig
        RouterConfiguration,
        BookService
    )
    .app(MyApp)
    .start();
