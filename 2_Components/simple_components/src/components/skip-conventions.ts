import { customElement } from 'aurelia';

@customElement({
    name: 'non-conventional',
    template: '<div class="box color-2">Hello, ${name}!</div>'
})
export class NoConventions {
    public name = 'John';
}
