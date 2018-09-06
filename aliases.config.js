const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

const aliases = {
  '@src': 'src',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@views': 'src/views',
  '@state': 'src/state',
  '@utils': 'src/utils',
  '@tests': 'tests'
};

module.exports = {
  webpack: {},
  jest: {}
};

const fullPathAliases = ['@tests'];
for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias]);
  if (fullPathAliases.includes(alias)) {
    module.exports.jest[`${alias}$`] = `<rootDir>/${aliases[alias]}`;
  } else {
    module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliases[alias]}/$1`;
  }
}
