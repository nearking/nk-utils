# nk-utils
normal utils | 常用的工具方法

提取日常编码中，经常使用的方法。

### 使用介绍

#### string

- desensitization(str, star, [end], [placeholder]) 字符串脱敏

```javascript
let str = '准备占位符HTML元素ID和消息键对的列表';

console.log('1 - ', nkUtils.string.desensitization(str, 0, 4)); // 1 -  ***对的列表
console.log('2 - ', nkUtils.string.desensitization(str, 2, 4)); // 2 -  准备***对的列表
console.log('3 - ', nkUtils.string.desensitization(str, 2, 4, '---')); // 3 -  准备---对的列表
```

- zhStrLength(str) 计算中英文字符的长度，中文字符长度为2，英文字符长度为1
- zhStrSubstr(str, star, [length]) 按中英文字符的长度进行字符串截取

```javascript
let str = '你好，123-abc';

console.log(`${str} - 文本长度: `, nkUtils.string.zhStrLength(str)); // 你好，123-abc - 文本长度:  13
console.log(`${str} - 保留7个字符: `, nkUtils.string.zhStrSubstr(str, 0, 7)); // 你好，123-abc - 保留7个字符:  你好，1
```