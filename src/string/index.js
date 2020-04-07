const desensitization = require('./desensitization');
const zhString = require('./zh-string');

const stringUtils = {
  ...desensitization,
  ...zhString
};

module.exports = stringUtils;