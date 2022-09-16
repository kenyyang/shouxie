/** 
 防抖
 */
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
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
        if (remainTime <= 0) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    }
}
/**
 * 快排
 */
function quickSort(arr) {
    if (!arr.length) return arr
    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr.splice(midIndex, 1)[0];

    const left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([midValue], quickSort(right));
}
console.log(quickSort([1, 5, 7, 3, 4, 9, 8, 6]));
/**
 * 数组扁平,去重
 */
function myFlat(arr, depth) {
    if (!Array.isArray(arr) || depth <= 0) return

    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(myFlat(cur, depth - 1))
        } else {
            return pre.concat(cur)
        }
    }, [])
}

function Array_dfor(array) {
    const result = [];
    let isRepeat;

    for (let i = 0; i < array.length; i++) {
        isRepeat = false
        for (let j = 0; j < result.length; j++) {
            if (array[i] === result[j]) {
                isRepeat = true;
            }
        }
        if (!isRepeat) result.push(array[i]);
    }
    return result
}
console.log(Array_dfor([1, 1, 1, 1, 1, 1, 1, 2]));

/**
 * 封装AJAX
 */
function getJson(url) {
    const xhr = XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return
        if (this.status === 200) {
            handle(this.response);
        } else {
            console.error(this.statusText);
        }
    }
    xhr.orerror = function () {
        console.error(this.statusText);
    }
    xhr.respnseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(null)
}
/**
 * 柯里化
 */
function curry(fn) {
    function curried(...args) {
        if (fn.length <= args.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2]);
            }
        }
    }
    return curried
}
/**
 * 手写深/浅拷贝
 */
function shallowCopy(obj) {
    if (!obj || typeof obj !== 'object') return

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj
}
function deepCopy(obj) {
    if (!obj || typeof obj !== 'object') return

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj
}
/**
 * 手写instanceOf
 */
function myInstanceOf(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = left.prototype;
    while (true) {
        if (proto == prototype) return true
        if (!proto) return false
        proto = Object.getPrototypeOf(proto)
    }
}

/**
 * 手写promise.all
 */
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        let resCount = 0;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(val => {
                resCount++;
                result.push(val);
                if (resolve.length === promises.length) {
                    return resolve(result)
                }
            }, error => {
                return reject(error)
            })
        }

    })
}
/**
 * 手写new
 */
function myNew() {
    const newObj = null;
    const construct = Array.prototype.shift.call(arguments);
    let result;

    newObj = Object.create(construct.prototype);
    result = construct.apply(newObj, arguments);

    let flag = flag && (typeof result == 'object' || typeof result == 'function')
    if (flag) {
        return result
    } else {
        return newObj
    }
}