Function.prototype.myBind = function (thisArg, ...argArray) {
    let fn = this

    thisArg = thisArg ? Object(thisArg) : window
    return function (...args) {
        thisArg.fn = fn

        let finArg = [...argArray, ...args]
        let result = thisArg.fn(...finArg)
        delete thisArg.fn

        return result
    }
}

{/* <input v-model = 'sth'>

<input v-bind :value = 'message'
  v-on:input = 'message = $event.target.value'

> */}
Function.prototype.myBind = function(thisArg, ...argArray){
    let fn = this;
    thisArg = thisArg ? Object(thisArg): window
     
    thisArg.fn = fn;
    return function(...args){
        let result = thisArg.fn(this,[...argArray,...args])
        delete thisArg.fn;
        return result
    }

}