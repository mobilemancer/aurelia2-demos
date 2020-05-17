import Aurelia, { RouterConfiguration, Registration } from "aurelia";

import { MyApp } from "./my-app";

import { DataService } from "./services/dataService";
import { IDataService } from "./common/IDataService";

import * as Components from "./components/_components";
import * as Modules from "./modules/_modules";
import * as ValueConverters from "./value-converters/_valueConverters";
import { XYZ } from "./components/droid-component/xyz";

Aurelia.register(
  RouterConfiguration,
  Registration.singleton(IDataService, DataService),

  Registration.singleton(XYZ, XYZ),
  XYZ,

  Modules,
  Components,
  ValueConverters
)
  .app(MyApp)
  .start();
