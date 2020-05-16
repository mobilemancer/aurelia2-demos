import { DataService } from './../../services/dataService';
import { bindable } from "aurelia";
import { IDataService } from "../../common/IDataService";

export class ProductFilter {

    constructor(@IDataService private dataService: DataService) { }

    public set searchFilter(val: string) {
        console.log(val);
    }

    @bindable public searchText: string;

    public searchTextChanged(val) {
        console.log(this.dataService.filterProducts(val));
    }

}
