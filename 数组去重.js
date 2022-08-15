//for双重循环
function Array_dfor(data) {
    let newArray = []
    let isRepeat
    for (let i = 0; i < data.length; i++) {
        isRepeat = false
        for (let j = 0; j < newArray.length; j++) {
            if (data[i] === newArray[j]) {
                isRepeat = true
                break
            }
        }
        if (!isRepeat) newArray.push(data[i])
    }
    return newArray
}

//includes
function Array_includes(data) {
    let newarr = []
    for (let i = 0; i < data.length; i++) {

        if (!newarr.includes(data[i])) {
            newarr.push(data[i])
        }

    }
    return newarr
}

//indexof
function Arr_indexOf(data) {
    let newarr = []
    for (let i = 0; i < data.length; i++) {
        if (newarr.indexOf(data[i] === -1)) {
            newarr.push([data[i]])
        }

    }
    return newarr
}

//map
function Arr_map(data) {
    let newarr = []
    let map = new Map()
    for (let i = 0; i < data.length; i++) {
        if (!map.has(data[i])) {
            map.set(data[i], i)
            newarr.push(data[i])
        }

    }
    return newarr  
}
//set
function Arr_set(data){
    //Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
    return Array.from(new Set(data))
}

