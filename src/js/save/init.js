const init = function (key,val) {

  // 当前key不存在时，则进行初始化
  if (localStorage.getItem(key) === null) {
    // 把对象进行序列化
    valIfy = JSON.stringify(val)
    // 把键值对存储在本地存储
    localStorage.setItem(key, valIfy)
  }
  // 获取当前键的值
  console.log(localStorage.getItem(key))

}

module.exports = init