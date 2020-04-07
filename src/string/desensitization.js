// 脱敏相关工具方法

/**
 * 字符串脱敏处理
 * 
 * @param {String} str 需要脱敏的字符串
 * @param {Number} star 开始留多少位字符
 * @param {Number} [end] 末位留多少位字符，默认为 0
 * @param {String} [placeholder] 脱敏替换的字符，默认为 ***
 */
const desensitization = (str, star, end, placeholder) => {
  placeholder = placeholder !== null && placeholder !== undefined ? placeholder : '***';
  end = typeof end === 'number' ? end : 0;

  if (str) {
    return str.substring(0, star) + placeholder + str.substring(str.length - end);
  } else {
    return '';
  }
}

module.exports = {
  desensitization
};