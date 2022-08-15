/**
 * （1）JSON.stringify()
 *      JSON.parse(JSON.stringify(obj))
 * （2）函数库lodash的_.cloneDeep方法
 * （3）手写实现深拷贝函数   
 */
// 深拷贝的实现
function deepCopy(object) {
    if (!object || typeof object !== "object") return;
  
    let newObject = Array.isArray(object) ? [] : {};
  
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] =
          typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
      }
    }
  
    return newObject;
  }
  //sleep函数
  function sleep(delay){
      return new Promise(resolve =>{
        setTimeout(resolve,delay)
      })
  }
  /**
   * 
   */
  function deepCopy(object){

    if( ! object || typeof object !== 'object') return ;
    
    let newObject = Array.isArray(object)? [] : {};

    for(let key in object){
      if(object.hasOwnProperty(key)){
        newObject[key] = typeof object[key] ==='object' ? deepCopy(object[key]): object[key];
      }
    }
    return newObject;
  }