Function.prototype.myCall = function (thisArg, ...args) {
    //在这里可以去执行被调用的那个函数
    //得获取是哪个函数执行了myCall 
    //类似隐式绑定 fn.myCall() 此时myCall里面的this就是fn
    let fn = this
    //对thisArg 转化成对象类型，防止传进来的是非对象,null或undefind 为window
    thisArg = thisArg ? Object(thisArg) : window
    //调用需要被执行的函数
    thisArg.fn = fn
    let result = thisArg.fn(...args)
    delete thisArg.fn

    return result

}

/************************************************************************* */
Function.prototype.myCall = function(thisArg, ...args){

    let fn = this;
    thisArg = thisArg? Object(thisArg): window;
    thisArg.fn = fn;

    let result = thisArg.fn(...args)
    delete thisArg.fn;
    return result;

}



