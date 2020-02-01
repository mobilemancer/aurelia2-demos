import { CustomElement } from 'aurelia';

export const SomeElement =
    CustomElement.define(
        {
            name: 'functional-element',
            template: '<div class="box color-2">Hello, ${name}!</div>'
        },
        class {
            public static bindables = {
                name: { property: 'name', attribute: 'name' }
            };
        }
    );
