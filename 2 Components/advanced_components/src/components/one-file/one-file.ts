import { CustomElement } from 'aurelia';
import template1 from './template-1.html';
import template2 from './template-2.html';

const droidModel = [
    'R2-D2',
    'C3-PO'
];

export const OneFile =
    CustomElement.define(
        {
            name: 'one-file',
            template: templateSelector(droidModel),
        }
        ,
        class {
            public static bindables = ['model']; //{ model: { property: 'model', attribute: 'model' } };
            public model = droidModel;
        }
    );

function templateSelector(names: string[]) {
    if (names.length === 0) {
        return '<div class="box-small color-3">Hello!</div>';
    }
    if (names.length === 1) {
        return template1;
    } else {
        return template2;
    }
}

// more examples

// export const SomeElement =
//  CustomElement.define({ name: 'some-element', template: '${msg}' }, class { @bindable msg });

// @customElement({ name: 'some-element', template: '${msg}' })
// export class SomeElement { @bindable msg; }
