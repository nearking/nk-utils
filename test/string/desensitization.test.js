const nkUtils = require('../../index');

const testDese = () => {
  let str = '准备占位符HTML元素ID和消息键对的列表';

  console.log('1 - ', nkUtils.string.desensitization(str, 0, 4));
  console.log('2 - ', nkUtils.string.desensitization(str, 2, 4));
  console.log('3 - ', nkUtils.string.desensitization(str, 2, 4, '---'));
}
testDese();