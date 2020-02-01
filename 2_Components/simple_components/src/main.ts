import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import * as components from './components/_component-registry';

Aurelia
    .register(components)
    .app(MyApp)
    .start();
