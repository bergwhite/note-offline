const config = require('../config.js')

const add = function (article) {
  // 获取本地存储笔记内容
  const obj = localStorage.getItem(config.name)
  // 解析成对象
  const objParse = JSON.parse(obj)
  // 存储文章到对象内的list
  objParse.list.push(article)
  // 转成序列化的JSON
  const objIfy = JSON.stringify(objParse)
  // 将修改后的数据存进本地存储
  localStorage.setItem(config.name, objIfy)
}

module.exports = add