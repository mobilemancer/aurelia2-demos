import { bindable, CustomElement, customElement } from 'aurelia';
import template1 from './template-empire.html';
import template2 from './template-rebel.html';

export const LegendComponent =
    CustomElement.define(
        {
            // bindables: ['droidModel'],
            name: 'one-file',
            template: templateSelector(undefined),
        },
        class {
            public static bindables = { model: { property: 'model', attribute: 'model' } };
            public model: any;
        }
    );

function templateSelector(names: string[]) {
    // if (names.length === 0) {
    //     return '<div class="box-small color-3">Hello!</div>';
    // }
    // if (names.length === 1) {
    //     return template1;
    // } else {
    //     return template2;
    // }

    return 'hai!';
}
