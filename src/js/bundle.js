const config = require('./config')
const save = require('./save');

// 本地存储的键
const noteName = config.name

// 本地存储的文章内容
const articleName = '欢迎使用基于Gulp模块化开发的笔记'
const articleContent = '这是一篇默认生成的文章，你可以自由修改。'
const articleTime = 2017

// 使用模板返回文章对象
const article = save.template(articleName, articleContent, articleTime)

// 初始化笔记应用
save.init(noteName, {
  list: [article]
});

// 在控制台输出笔记的方法
console.log(save);

// 添加一篇文章
save.add(article);