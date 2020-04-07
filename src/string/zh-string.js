// 中文字符相关的工具方法

/**
 * 区分中英文，获取单个字符的长度
 * - 中文 计算值为2 英文为 1
 * - 内部方法
 * 
 * @param {String} char 单个字符 
 */
const _zhCharLength = (char) => {
  let l = 0;

  if (char) {
    let charCode = char.charCodeAt(0);
    if (charCode > 127 || charCode === 94) {
      l = 2;
    } else {
      l = 1;
    }
  }
  return l;
};

/**
 * 区分中英文，计算字符串长度
 * - 中文 计算值为2 英文为 1
 * 
 * @param {String} str 字符串
 */
const zhStrLength = (str) => {
  let l = 0;
  if (typeof str === 'string' && str) {
    let strs = str.split('');
    strs.forEach(item => {
      l += _zhCharLength(item);
    });
  }
  return l;
};

/**
 * 按中文字符串的方式，截取字符
 * 
 * @param {String} str 
 * @param {Number} start 开始位置
 * @param {Number} length 截取长度，如果不设置，默认为最后一个字符
 */
const zhStrSubstr = (str, start, length) => {
  let checkStr = str.substring(start);

  if (length === null || length === undefined) { // 直接返回截取的字符
    return checkStr;
  } else {
    let strs = checkStr.split('');
    let nweStrs = [];
    let checkLength = 0;
    strs.forEach(function (item) {
      checkLength += _zhCharLength(item);
      if (length && checkLength > length) {
        return false;
      } else {
        nweStrs.push(item);
      }
    });
    return nweStrs.join('');
  }
}

module.exports = {
  zhStrLength,
  zhStrSubstr
}