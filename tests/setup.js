import Vue from 'vue';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import {mount, shallowMount, createLocalVue} from '@vue/test-utils';
_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });
_.debounce = (fn) => (...args) => fn(...args);

// ===
// Global helpers
// ===

global.mount = mount;
global._ = _;
global.shallow = shallowMount;

// A special version of `shallow` for view components
global.mountShallowView = (Component, options = {}) => global.shallow(Component, {
  ...options,
});

global.debug = (componentWrapper) => {
  // eslint-disable-next-line
  console.log('debug: ', pretty(componentWrapper.html()));
};

global.scroll = jest.fn();

global.getLocalVue = () => {
  const localVue = createLocalVue();

  return localVue;
};

global.waitForRequest = (fn) => {
  setTimeout(fn);
}

// ===
// Register global components
// ===

const globalComponentFiles = fs.readdirSync(path.join(__dirname, '../src/components')).filter((fileName) => /^_base-.+\.vue$/.test(fileName));

for (const fileName of globalComponentFiles) {
  const componentName = _.pascalCase(fileName.match(/^_(base-.+)\.vue$/)[1]);
  /* eslint-disable */
  const componentConfig = require(`../src/components/${fileName}`);
  /* eslint-enable */
  Vue.component(componentName, componentConfig.default || componentConfig);
}
