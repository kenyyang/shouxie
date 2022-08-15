function _flat(arr, depth) {
    if (!Array.isArray(arr) || depth <= 0) {
        return arr;
    }
    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            return prev.concat(_flat(cur, depth - 1))
        } else {
            return prev.concat(cur);
        }
    }, []);
}

console.log(_flat([1, [2]], 1));
/**
 * 递归
 */
function flat(arr, depth = 1) {
    const result = []
    for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flat(item, depth - 1))
        } else {
            result.push(item)
        }
    }
    return result
}

