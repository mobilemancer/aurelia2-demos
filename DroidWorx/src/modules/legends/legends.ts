import { HttpClient } from "aurelia";

import { DataService } from "../../services/dataService";
import { IDataService } from "../../common/IDataService";

export class Legends {
    public legends: any[];
    public elementName = "legend-component";

    constructor(@IDataService private dataService: DataService,
        private httpClient: HttpClient) { }

    public async beforeBind() {
        if (!this.legends || this.legends?.length === 0) {
            // const submissionsRequest =
            //     await this.httpClient.fetch('https://droid-worx.azurewebsites.net/api/Models?code=A6Oek6wVI/h6wkmBjB0UV7Dccs6j72GrgsHEgk9EQc3jliqXqj0GhA==');
            // this.legends = await submissionsRequest.json();

            this.legends = this.dataService.legends;
        }
    }
}
