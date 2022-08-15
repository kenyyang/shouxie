// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function curry(fn){
    function curried (...args){
        //判断当前已经接受的参数的个数，可以参数本事需要接受的参数是否已经一致了
        // 1.当已经传入的参数 大于等于 需要的参数时，就执行参数
        if(args.length >= fn.length){

            return fn.apply(this,args) 
        }else{
            //没有达到个数时，需要返回一个新的函数，继续来接受的参数
            return function(...args2){
                return curried.apply(this,[...args , ...args2])
            } 
        }
        
    }
    return curried
}
  
  // es6 实现
  function curry(fn) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
  }

/******************************************************************************* */
function curry(fn){

    function curried(...args){
        if(args.length >= fn.length){
            return fn(this, args);
        }else{
            return function(...args2){
                return curried.appky(this,[...args,...args2]);
                
            }
        }
    }
    return curried
}






