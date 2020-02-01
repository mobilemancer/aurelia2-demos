import { bindable } from 'aurelia';

export class ComposedComponent {
    @bindable public person;
    constructor() {
        this.person = {
            familyName: 'Wänqvist',
            firstName: 'Andreas'
        };
    }
}
