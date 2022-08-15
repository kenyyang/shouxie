/**
 * 防抖
 */
function debounce(fn, delay) {
    let timer = null

    return function (...args) {
        if (timer) {
            clearInterval(timer)
        }
        setTimeout(() => {
            fn.apply(this, ...args)
        }, delay);
    }
}
/**
 * 节流
 */
function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
        let nowTime = Date.now();
        let remainTime = interval - (nowTime - lastTime);
        if (remainTime < 0) {
            fn.apply(this, ...args);
            lastTime = nowTime;
        }
    }
}
/**
 * 快排
 */
function quickSort(nums) {
    if (nums.length === 0) return nums;

    let midIndex = Math.floor(nums.length / 2);
    let midValue = nums.splice(midIndex, 1)[0];

    let left = [], right = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < midValue) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return quickSort[left].concat([midValue], quickSort(right))
}
/**
 * 手写flat
 */
function _flat(arr, depth) {
    if (Array.isArray(arr) || depth <= 0) {
        return arr;
    }
    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            return prev.concat(_flat(cur, depth - 1));
        } else {
            return prev.concat(cur);
        }
    }, [])
}
/**
 * promise.all
 */
function promiseAll(promises) {
    if (!Array.isArray(promiseAll)) {
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
/**
 * 手写instanceof
 */
function _instanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = Object.getPrototypeOf(right);

    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);
    }
}
/**
 * 手写call，apply，bind
 */
Function.prototype._call = function (thisArg, ...args) {
    let fn = this

    thisArg = thisArg ? Object(thisArg) : window;
    thisArg.fn = fn
    let result = thisArg.fn(...args)
    delete thisArg.fn
    return result
}
Function.prototype._apply = function (thisArg, thisArray) {
    let fn = this

    thisArg = thisArg ? Object(thisArg) : window
    thisArg.fn = fn
    let result
    if (!thisArray) {
        result = thisArg.fn()
    } else {
        result = thisArg.fn(...thisArray)
    }
    delete thisArg.fn
    return result
}
Function.prototype._bind = function (thisArg, thisArray) {
    let fn = this
    thisArg = thisArg ? Object(thisArg) : window
    return function (...args) {
        thisArg.fn = fn
        let fArg = [...thisArray, ...args]
        let result = thisArg.fn(...fArg)
        delete thisArg.fn
        return result
    }
}
/**
 * 浅拷贝
 */
function shallowCopy(object) {
    if (!object || typeof object !== 'object') return;
    const newObj = Array.isArray(object) ? [] : {};

    for (let key in object) {
        if (object.hasOwnproperty(key)) {
            newObj[key] = object[key]
        }
    }
    return newObj;
}

/**
 * 深拷贝
 */
function deepCopy(object) {
    if (!object || typeof object !== 'object') {
        return;
    }
    const newObj = Array.isArray(object) ? [] : {};
    for (let key in object) {
        if (object.hasOwnproperty(key)) {
            newObj[key] =
                typeof object[key] === 'object' ? deepCopy(object[key]) : object[key];
        }
    }
    return newObj;
}
/**
 * 手写柯里化
 */
function _curry(fn) {
    const curried = function (...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, ...args)
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2])
            }
        }
    }
}

/**
 * 手写new
 */
function objectFactory() {
    let newObject = null;
    let construct = Array.prototype.shift.call(arguments);
    if (typeof construct !== 'function') {
        throw new TypeError('type error')
    }
    let result = null

    newObject = Object.create(construct.prototype);
    result = construct.apply(newObject, arguments);

    let flag = result && (typeof result === 'object' || typeof result === 'function')

    return flag ? result : newObject
}
/**
 * 手写reduce
 */
Array.prototype._reduce = (cb, initialval) => {
    let array = this
    let acc = initialval ? initialval : array[0]
    let startIndex = initialval ? 0 : 1

    for (let i = startIndex; i < array.length; i++) {
        acc = cb(acc, array[i], i, arr)
    }
    return acc
}
/**
 * 手动封装ajax
 */
const xhr = new XMLHttpRequest();

//创建一个新的http请求
xhr.open('GET', url, true);
//设置状态监听函数
xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return

    if (this.status === 200) {
        handle(this.response)
    } else {
        console.error(this.statusText)
    }
}

xhr.onerror = function () {
    console.error(this.statueText)
}
//设置请求头信息
xhr.responseType = 'json'
xhr.sendRequestHeader('Accept', 'application/json')

xhr.send(null)
/**
 * promise封装ajax
 */
function getJson() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        xhr.onerror = function () {
            reject(new Error(this.response));
        }
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(null)
    })
}
/**
 * 项目中修改push
 */
const originPush = VueRouter.prototype.push;

VueRouter.prototype.push = (location, resolve, reject) => {
    if (resolve && reject) {
        originPush.call(location, resolve, reject)
    } else {
        originPush.call(location, () => { }, () => { })
    }
}
/**
 * 原型链继承
 */
function Parent() {
    this.name = 'parent';
    this.play = [1, 2, 3];
}
function Child() {
    this.type = 'child'
}
Child.prototype = new parent()
const c1 = new Child();
console.log(c1.name); // parent

/**
 * 构造函数继承
 */
function Parent() {
    this.color = ['blue', 'red', 'white', 'green'];
}
Parent.prototype.getName = function () {
    return this.name = 'parent'
}

function Child() {
    Parent.call(this)
}
const c2 = new Child();
console.log(c2.name()); //报错

/**
 * 组合继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function Child(name) {
    Parent.call(this, name)
}
Child.prototype = new Parent();
Child.prototype.construct = Child
/**
 * 原型式继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function _object(obj) {
    function f() { }
    f.prototype = obj
    return new f()
}
/**
 * 寄生式继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function createAnother(original) {
    let clone = Object.create(original);
    clone.prototype.getname = function () {
        return this.name
    }
    return clone
}
/**
 * 寄生组合式继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age
}
function inheritPrototype(child, parent) {
    let prototype = Object.create(parent.prototype);
    prototype.construct = child
    child.prototype = prototype
}
inheritPrototype(Child, Parent);
Child.prototype.getage = function () {
    return this.age
}

/**
 * 发布-订阅模式
 */
class PubSub {
    constructor() {
        this.events = [];
    }

    subscribe(type, cb) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push(cb)
    }

    publish(events, ...args) {
        if (this.events[type]) {
            this.events.forEach(cb => cb(...args))
        }
    }
}


console.log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
    return new Promise((resolve, reject) => {
        console.log('我在哪');
        resolve('成功啦')
    }).then(value => console.log(value))
}
async1()

setTimeout(function () {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })
    .then(function () {
        console.log('promise3')
    })
    .then(function () {
        console.log('promise4')
    })

console.log('script end')





function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
}

function throttle(fn, interval) {
    let lastTime = 0
    return function (...args) {
        let nowTime = Date.now();
        let reminTime = interval - (nowTime - lastTime);
        if (reminTime > 0) {
            fn.apply(this, args)
            lastTime = nowTime;
        }

    }
}

function quickSort(nums) {
    let midIndex = parseInt(nums.length / 2);
    let midValue = nums.splice(midIndex, 1)[0];

    const left = [], right = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= midValue) {
            right.push(nums[i]);
        } else {
            left.push(nums[i]);
        }
    }
    return quickSort(left).concat([midValue], quickSort(right));
}

function _flat(nums, path) {
    if (!Array.isArray(nums) || path <= 0) {
        return nums
    }

    return nums.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(_flat(cur, depth - 1));
        } else {
            return pre.concat(cur);
        }
    }, [])
}

function shallowCopy(obj) {
    if (typeof obj !== 'object') {
        return
    }
    const newObj = Array.isArray(obj) ? [] : {};

    for (let i in obj) {
        if (obj.hasOwnproperty(i)) {
            newObj[i] = obj[i]
        }
    }
    return newObj
}

function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return
    }
    const newObj = Array.isArray(obj) ? [] : {};

    for (let i in obj) {
        if (obj.hasOwnproperty(i)) {
            newObj[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i];
        }
    }
    return newObj
}

function _curry(fn) {
    function curried(...args1) {
        if (args1.length >= fn.length) {
            return fn.apply(this, args1)
        } else {
            return function (...args2) {
                const finArgs = [...args1, ...args2];
                return curried.apply(this, finArgs);
            }
        }
    }
    return curriedresult
}
Function.prototype.myApply = function (thisArg, argArray) {
    let fn = this;
    let thisArg = thisArg ? Object(thisArg) : window;

    thisArg.fn = argthisArgs;
    let result
    if (Array.isArray(argArray)) {
        result = thisArg.fn(...argArray)
    } else {
        result = thisArg.fn()
    }
    delete fn.args
    return result
}
Function.prototype.myCall = function (thisArg, args) {
    let fn = this;
    let thisArg = thisArg ? Object(thisArg) : window;

    thisArg.fn = fn;
    let result = thisArg.fn(...args)
    delete thisArg.fn

    return result
}
Function.prototype.myBind = function (thisArg, args1) {
    let fn = this;
    let thisArg = thisArg ? Object(thisArg) : window;
    thisArg.fn = thisArg;
    let result
    return function (args2) {
        let finArgs = [...args1, ...args2];
        result = thisArg.fn(...finArgs)
        return result
    }

}

function _instanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = Object.getPrototypeOf(right);

    while (true) {
        if (!proto) return false
        if (proto == prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
function promisesAll(arrays) {
    if (!Array.isArray(arrays)) {
        throw new TypeError('argement must be an array')
    }
    return new Promise((resolve, reject) => {
        const result = [];
        let num = 0;
        for (let i = 0; i < arrays.length; i++) {
            Promise.resolve(arrays[i]).then(value => {
                result.push(value);
                num++
                if (num === arrays.length) {
                    return resolve(result)
                }
            }, error => {
                return reject(error)
            })

        }

    })
}

function objectFactory() {
    let newObj = null
    const construct = Array.prototype.shift.call(arguments)
    if (typeof construct !== 'function') {
        console.error('type error')
        return
    }
    let result

    newObj = Object.create(construct.prototype);
    result = construct.apply(newObj, arguments);
    let flag = result && typeof result === 'object' || typeof result === 'function'

    return flag ? result : newObj
}


const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return

    if (this.status === 200) {
        handle(this.response)
    } else {
        console.error(this.statusText)
    }
}

xhr.onerror = function () {
    console.error(this.statusText)
}
xhr.responseType = 'json'
xhr.setRequestHeader('Accept', 'application/json')

xhr.send(null)


function getJson(url) {
    return new Promise((resolve, reject) => {
        const xhr = XMLHttpRequest();
        xhr.open('Get', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(this.statusText);
            }
        }
        xhr.onerror = function () {
            reject(this.statusText)
        }

        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(null)
    })
}

