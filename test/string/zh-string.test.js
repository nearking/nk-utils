const nkUtils = require('../../index');

const test = () => {
  let str = '你好，123-abc';

  console.log(`${str} - 文本长度: `, nkUtils.string.zhStrLength(str));
  console.log(`${str} - 保留7个字符: `, nkUtils.string.zhStrSubstr(str, 0, 7));
};
test();