import droids from '../../data/legends.json'

export class DataService {
    public legends: any = [];

    constructor() {
        this.legends = droids;
        console.log(droids);
    }
}