import { HttpClient } from "aurelia";

import { Legend } from "./../../common/Legend";
import { DataService, IDataService } from "../../services/dataService";

export class LegendsPage {
  public legends: Legend[];
  public elementName = "legend-component";

  constructor(@IDataService private dataService: DataService, private httpClient: HttpClient) {}

  public async beforeBind(): Promise<void> {
    if (!this.legends || this.legends?.length === 0) {
      // const submissionsRequest =
      //     await this.httpClient.fetch('https://droid-worx.azurewebsites.net/api/Models?code=A6Oek6wVI/h6wkmBjB0UV7Dccs6j72GrgsHEgk9EQc3jliqXqj0GhA==');
      // this.legends = await submissionsRequest.json();

      this.legends = this.dataService.legends;
    }
  }
}
