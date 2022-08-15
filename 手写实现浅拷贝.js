// 浅拷贝的实现;
/**
 * （1）Object.assign()接受的第一个参数是目标对象，其余参数是源对象，
 *                     用法：Object.assign(target, source_1, ···)
 * （2）扩展运算符
 * （3）数组方法实现数组浅拷贝
 *      1）Array.prototype.slice
 *      2）Array.prototype.concat
 * （4）手写实现浅拷贝
 */
function shallowCopy(object) {
  // 只拷贝对象
  if (!object || typeof object !== "object") return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object，并且判断是 object 的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}
/********************************************* */
function shallowCopy(object) {
  if (!object || typeof object !== 'object') {

    return object;
  }

  const newObj = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnproperty(key)) {
      newObj[key] = Array.isArray(key) ? shallowCopy(obj[key]) : object[key];
    }
  }
  return newObj;
}

/**
 * promise.all
 */
function promiseAll(promises) {
  if(!Array.isArray(promiseAll)){
    throw new TypeError('arguments must be a array')
  }
  return new Promise((resolve, reject) => {
    let resolveNum = 0;
    let resolveResult = [];
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolveNum++;
        resolveResult.push(value);
        if (resolveResult.length === promises.length) {
          return resolve(resolveResult);
        }
      }, err => {
        return reject(err)
      })
    }
  })
}