import Aurelia, { StyleConfiguration, CustomElement } from 'aurelia';
import { MyApp } from '../src/my-app';

function createAu(template: string, ...deps: readonly unknown[]) {
  const wrapper = CustomElement.define({name: 'wrapper', template});
  document.body.appendChild(document.createElement('wrapper'));
  return Aurelia.register(StyleConfiguration.cssModulesProcessor()).register(deps).app(wrapper);
}

function cleanup() {
  const wrapper = document.querySelector('wrapper');
  if (wrapper) {
    wrapper.remove();
  }
}

