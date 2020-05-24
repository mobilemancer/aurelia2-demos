import Aurelia, { RouterConfiguration, Registration } from "aurelia";

import { MyApp } from "./my-app";

import { DataService } from "./services/dataService";
import { IDataService } from "./common/IDataService";

import * as Components from "./components/globalComponents";
import * as Modules from "./modules/globalModules";
import * as ValueConverters from "./value-converters/globalValueConverters";

Aurelia.register(
  RouterConfiguration.customize({ useUrlFragmentHash: false }),
  Registration.singleton(IDataService, DataService),

  Modules,
  Components,
  ValueConverters
)
  .app(MyApp)
  .start();
