Function.prototype.myApply = function(thisArg,argArray){
     //1. 获取到要执行的函数
     let fn = this;

     //2. 处理绑定的thisArg
     thisArg = thisArg? Object(thisArg): window;
     //3.  执行函数
     thisArg.fn = fn;
     let result
     if(! argArray){
        result = thisArg.fn()
     }else{
        result = thisArg.fn(...argArray)
     }

     delete argArray.fn
     
     return result
}
/********************************* */
Function.prototype.myApply = function(thisArg, argArray){

      let fn = this;
      thisArg = thisArg? Object(thisArg) :window;

      thisArg.fn = fn;

      let result =  thisArg.fn(argArray);
      delete thisArg.fn;
      return result;
}
/****************************** */
Function.prototype.myApply = function(thisArg, arrayArg){
   let fn = this;
   let thisArg = thisArg? Object(thisArg): window;

   thisArg.fn = fn
   let result

   if(!arrayArg){
      return thisArg.fn();
   }else{
      return thisArg.fn(this, arrayArg)
   }
   delete thisArg.fn
}