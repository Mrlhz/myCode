# myCode


### 测试

- [mocha](https://www.liaoxuefeng.com/wiki/1022910821149312/1101756368943712)
- [Nodejs单元测试小结](https://segmentfault.com/a/1190000002921481?utm_source=tag-newest)
- [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)



```js
document.querySelectorAll('.table.table-striped tr td:nth-child(2)')

document.querySelectorAll('.table.table-striped tr td div a')
```


### leetcode

- [用动画的形式呈现解LeetCode题目的思路](https://github.com/MisterBooo/LeetCodeAnimation)
- [leetcode](https://github.com/haoel/leetcode)
- https://github.com/soulmachine/leetcode


- [Mocha中文文档(翻译)](https://github.com/zhaosaisai/mocha-in-chinese)
- https://segmentfault.com/a/1190000011362879


### 单独测试一个文件


`npx  mocha ./test/leetcode-cn/7-reverse-integer.test.js`

`npx  mocha ./test/leetcode-cn/13-roman-to-integer.test`

```
npx  mocha ./test/leetcode-cn/7-reverse-integer.test.js

npx  mocha ./test/leetcode-cn/14-longest-common-prefix.test.js

```

### 使用`mochawesome`模块，可以生成漂亮的HTML格式的报告

```
npx  mocha ./test/leetcode-cn/7-reverse-integer.test.js --reporter mochawesome
```