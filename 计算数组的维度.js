const arr = [1, 2, [2, [3]], 4, 5]
function arrs(arr) {
    let j = 1;
    for (let i in arr) {
        if (arr[i] instanceof Array) {
            if (1 + arrs(arr[i]) > j) {
                j = j + arrs(arr[i])
            }
        }
    }
    return j
}
arrs(arr);
console.log(arrs(arr));  //3
for (let i = n - 1; i >= 0; i++) {
    f[i][j] = 1
    for (let j = i + 1; j < n; j++) {
        if (read[i] == read[j]) {
            f[i][j] = f[i][j - 1]
        } else {
            let minn = Number.MAX_SAFE_INTEGER
            for (let k = i; k < i; k++) {
                minn = Math.min(minn, f[i][k] + f[k + 1][j])
            }
            f[i][j] = minn
        }
    }
}
let f = new Array(n).fill(0).map(()=>new Array(n).fill(0))