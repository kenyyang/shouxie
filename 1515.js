let num = [1, 2, 3, 4];
var combine = () => {

    let result = [], path = [];
    backtracking(num.length, 3, 0);
    return console.log(result);

    function backtracking(n, k, index) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        for (let i = index; i < n - (k - path.length) + 1; i++) {
            path.push(num[i]);
            backtracking(n, k, i + 1);
            path.pop();
        }
    }

}
combine()

function debounce(fn, delay) {
    let timer = null

    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let nowTime = Date.now();
        let remainTime = delay - (nowTime - lastTime);
        if (remainTime <= 0) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    }
}

function quickSort(arr) {

    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr.splice(midIndex, 1)[0];

    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([midValue], quickSort(right))
}

function _flat(arr, depth) {
    if (arr.length === 0 || depth <= 0) {
        return;
    }
    return arr.reduce((per, cur) => {
        if (!Array.isArray(cur)) {
            return per.concat(cur);
        } else {
            return per.concat(_flat(cur, depth - 1))
        }
    }, [])
}
function getJson(url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (this.readState != 4) return;

        if (this.status === 200) {
            handle(this.response)
        } else {
            console.error(this.statusText)
        }
    }
    xhr.onerror = function () {
        console.error(this.statusText)
    }

    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json')

    xhr.send(null)
}

function curry(fn) {

    const curried = function (...args) {

        if (fn.length <= args.length) {
            fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2])
            }
        }
    }
    return curried
}

function shallowCopy(obj) {
    if (!obj || typeof obj !== 'object') return;

    let newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.hasOwnproperty(key)) {
            // newObj[key] = obj[key];
            newObj[key] = typeof obj[key] === 'object' ? shallowCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = Object.getPrototypeOf(right);

    while (true) {
        if (!proto) return false;
        if (proto == prototype) return true;
        proto = Object.getPrototypeOf(proto);

    }

}

Array.prototype.muReduce = function (cb, init) {
    const array = this;
    let acc = init ? init : array[0];
    let startIndex = init ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        const cur = array[i];
        acc = cb(acc, cur, array, i);
    }
    return acc;
}

function promiseAll(promises) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) {
            throw new TypeError(`promises must be a array`)


        }
        let resolvedCount = 0;
        const resolveResult = [];

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((value) => {

                resolvedCount++;
                if (resolvedCount === promises.length) {
                    resolveResult.push(value);
                    return resolve(resolveResult);
                }
            }, error => {
                return reject(error);
            })
        }
    })
}

const dateFormat = (dateInput, format) => {
    let day = dateInput.getDate();
    let month = dateInput.getMonth() + 1;
    let year = dateInput.getFullYear();

    format = format.replace(/yyyy/, year);
    format = format.replace(/MM/, month);
    format = format.replace(/dd/, day);
    return format;
}

function formatNum(number) {
    let arr = (number + '').split('.');
    let int = arr[0].split('');
    let fraction = arr[1] || '';
    let r = '';

    int.reverse().forEach((v, i) => {

        if (i !== 0 && i % 3 === 0) {
            r = v + ',' + r;
        } else {
            r = v + r;
        }
    })
    return r + !!fraction ? r + '.' + fraction : '';
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000)
}

function getJson(url) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;

        if (this.status === 200) {
            handle(this.response);
        } else {
            console.error(this.statusText);
        }
    }
    xhr.onerr = function () {
        console.error(this.statusText);
    }

    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept, application/json')

    xhr.send(null);
}

function promiseAll(promises) {

    let promise = new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) {
            throw new TypeError('argument must be a array');
        }
        let resolvedCount = 0;
        let resolvedResult = [];

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCount++;
                resolvedResult[i] = value;
                if (resolvedCount === promises.length) {
                    return resolve(resolvedResult);
                }
            }, error => {
                return reject(error.message);
            })
        }


    })
    return promise;
}





var search = function (nums, target) {

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}





var minSubArrayLen = function (target, nums) {

    let l = r = sum = 0

    res = nums.length + 1
    while (r < res) {

        sum += nums[r++]

        while (sum >= target) {
            res = res < r - l ? res : r - l
            sum -= nums[l++]
        }
    }
    return res > nums.length ? 0 : r - l
}

var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    let set = new Set()
    let j = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i])
            maxLength = Math.max(maxLength, set.size)
        } else {
            while (set.has(s[i])) {
                set.delete(s[j])
                j++
                maxLength = Math.max(maxLength, set.size)
            }
            set.add(s[i])
        }
    }
    return maxLength
};

var hasPathSum = function (root, targetSum) {
    const travelTree = function (node, cnt) {
        if (!node.left && !node.right && cnt === 0) {
            return true
        }
        if (!node.left && !node.right) return false

        if (node.left && travelTree(node.left, cnt - node.left.val)) return true
        if (node.right && travelTree(node.right, cnt - node.right.val)) return true
        return false
    }
    if (!root) return false

    return travelTree(root, targetSum - root.val)
};

var isValid = function (s) {
    const map = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            if (!stack.length || stack.pop() !== s[i]) return false
        }
    }
    return stack.length === 0
};


var threeSum = function (nums) {
    const result = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1, end = nums.length - 1
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] === 0) {
                    result.push([nums[i], nums[start], nums[end]])
                    start++
                    end--

                    while (start < end && nums[start] === nums[start - 1]) {
                        start++
                    }
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    start++
                } else {
                    end--
                }
            }
        }

    }
    return result
};
var levelOrder = function (root) {

    const res = [], queue = [root]
    if (!root) return res
    while (queue.length) {

        let length = queue.length

        let curLevel = []
        while (length--) {
            let node = queue.shift()
            curLevel.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
};
var numIslands = function (grid) {
    let count = 0
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return
        }
        grid[i][j] = '0'
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }



    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }
    return count
};

var numIslands = function (grid) {
    let count = 0
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
            return
        }
        grid[row][col] = '0'
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
    }



    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                count++
                dfs(row, col)
            }
        }
    }
    return count
};
var reverseList = function(head) {
    let pre = null
    let cur = head
     while(cur){
         next = cur.next
         cur.next = pre
         pre =cur
         cur = next
     }
     return pre
 };


