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
console.log(flat([1,2,[3,4],5],1))


function _flat(nums, depth) {
    if (!Array.isArray(nums) || depth <= 0) {
        return nums
    }
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        if (Array.isArray(nums[i]) && depth > 0) {
            array.push(..._flat(nums[i], depth - 1))
        } else {
            array.push(nums[i])
        }
    }
    return array
}
console.log(_flat([1,2,[3,4],5],1))
