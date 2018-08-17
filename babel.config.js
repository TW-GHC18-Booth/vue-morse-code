module.exports = function(api) {
  process.env.NODE_ENV === 'test' ? api.cache(false) : api.cache(true);
  // const plugins = ['syntax-dynamic-import', 'lodash'];
  return {
    plugins: ['syntax-dynamic-import'],
    presets: [
      [
        '@vue/app',
        {
          useBuiltIns: 'entry'
        }
      ]
    ],
    env: {
      test: {
        presets: [
          [
            '@vue/app',
            {
              modules: 'commonjs'
            }
          ]
        ]
      }
    }
  };
};
