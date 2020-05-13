import { bindable, CustomElement, customElement } from 'aurelia';

import { IDroid } from '../../common/IDroid';

export class DroidComponent {
    @bindable public droid: IDroid[];

    afterBind() {
        console.log(this.droid);
    }
}