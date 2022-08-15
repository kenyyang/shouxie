
var sortArray = function (nums) {
    let max = -1, min = -1
    let count = 0
    let dp = [];
    max = Math.max(...nums)
    min = Math.min(...nums)
    let ans = new Array(max - min + 1)
    for (var i = 0; i <= max - min + 1; i++) {
        ans[i] = 0
    }
    for (let d of nums) {
        ans[d - min]++
    }
    for (var k = 0; k <= max - min + 1; k++) {
        while (ans[k]-- > 0) {
            dp.push(k + min);
        }
    }
    return dp
};

