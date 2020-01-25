import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';

Aurelia.register(StyleConfiguration.cssModulesProcessor()).app(MyApp).start();
