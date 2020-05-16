import { bindable } from "aurelia";

import { IDroid } from "../../common/IDroid";

export class DroidComponent {
    @bindable public droid: IDroid[];

    public afterBind() {
        console.log(this.droid);
    }
}
