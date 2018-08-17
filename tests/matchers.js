// See these docs for details on Jest's matcher utils:
// https://facebook.github.io/jest/docs/en/expect.html#thisutils

const customMatchers = {};

customMatchers.toBeAViewComponent = function(options, mockInstance) {
  function usesALayout() {
    return options.components && options.components.Layout;
  }

  function definesAPageTitleAndDescription() {
    if (!options.metaInfo) return false;
    const pageObject = typeof options.metaInfo === 'function' ? options.metaInfo.apply(mockInstance || {}) : options.metaInfo;
    /* eslint-disable */
    if (!pageObject.hasOwnProperty('title')) return false;
    /* eslint-enable */
    if (!pageObject.meta) return false;
    /* eslint-disable */
    const hasMetaDescription = pageObject.meta.some((metaProperty) => metaProperty.name === 'description' && metaProperty.hasOwnProperty('content'));
    /* eslint-enable */

    if (!hasMetaDescription) return false;
    return true;
  }

  if (usesALayout() && definesAPageTitleAndDescription()) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(options)} not to register a local Layout component nor define a page title and meta description`,
      pass: true
    };
  }

  return {
    message: () => `expected ${this.utils.printReceived(options)} to register a local Layout component and define a page title and meta description`,
    pass: false
  };
};

// https://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers
global.expect.extend(customMatchers);
