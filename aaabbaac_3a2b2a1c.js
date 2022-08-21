function count(str) {
    const result = [];

    let l = 0, r = 0, sum = 0;
    while (r <= str.length) {
        if (str[l] === str[r]) {
            r++;
            sum++;
        } else {
            result.push(sum + str[l]);
            l = r;
            sum = 0;
        }
    }
    return result.join('');

}
console.log(count('aaabbaaac'));


function toFixed(str) {
    let left = 0, right = 0;
    let sum = 0;
    let newStr = '';
    while (right <= str.length) {
        if (str[left] === str[right]) {
            right++
        } else {
            sum = right - left;
            newStr += sum + str[left];
            left = right;
        }
    }
    return newStr
}
console.log(toFixed('aaabbaaac'));

function findLastOne(num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(i + 1);
    }
    let tem = 0
    while (result.length > 1) {
        if (tem++ < 2) {
            result.push(result.shift())
        } else {
            tem = 0
            result.shift()
        }
    }
    return result[0]
}
console.log(findLastOne(20))

const dateFormat = (dateInput, format) => {
    const getDay = dateInput.getDate();
    const getMonth = dateInput.getMonth() + 1;
    const getYear = dateInput.getFullYear();

    format = format.replace(/yyyy/, getYear);
    format = format.replace(/MM/, getMonth);
    format = format.replace(/dd/, getDay);
    return format
}
console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd'));
console.log(dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd'));
console.log(dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日'));

function formatNum(num) {
    let str = '';
    let arr = num.toString().split('');
    let length = arr.length;

    while (length > 3) {
        str = `,${arr.splice(-3).join('')}` + str
        length = arr.length;
    }
    return arr.join('') + str;
}
console.log(formatNum(123456789));


const run = url => {
    // 实际场景这里用axios等请求库 发请求即可 也不用设置延时
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('完成一个任务', url, new Date());
            resolve({ url, date: new Date() });
        }, 1000);
    })
};
function limitedQueue(urls, limit) {
    let i = 0;

    for (let i = 0; i < limit; i++) {
        fn();
    }
    function fn() {
        return new Promise((resolve, reject) => {
            let url = urls[i];
            i++;
            resolve(run(url));
        }).then(() => {
            if (i < urls.length) fn()
        })
    }
}
const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

(async _ => {
    await limitedQueue(urls, 4);
})()


function run(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('这是一个事件', url, new Date());
            resolve(url)
        }, 1000);
    })
}

function limitedQueue(urls, limit) {
    let i = 0;

    for (let i = 0; i < limit; i++) {
        fn();
    }

    function fn() {
        return new Promise((resolve, reject) => {
            let url = urls[i];
            i++;
            resolve(run(url))
        }).then(() => {
            if (i < urls.length) fn()
        })
    }
}

const urls2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
(async _ => {
    await limitedQueue(urls2, 3)
})()

function formatNum(num) {
    const arr = num.toString().split('');
    let str = '';
    let length = arr.length;

    while (length > 3) {
        str = `,${arr.splice(-3).join('')}` + str;
        length = arr.length;
    }
    return arr.join('') + str;
}
console.log(formatNum(123456789123456));

function formatNum(number) {
    let arr = number.toString().split('.');
    let int = arr[0].split('');
    let decimal = arr[1] || '';
    let len = int.length;
    let str = ''
    while (len > 3) {
        str = `,${int.splice(-3).join('')}` + str;
        len = int.length;
    }
    return int.join('') + str + '.' + decimal
}
console.log(formatNum(123456789.654321));

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
function formatUrl(url) {
    const res = {};
    const arr1 = url.split('?')[1];
    const arr2 = arr1.split('&');
    console.log(arr2);

    // const arr3 = arr2.join('').split('=')
    const arr3 = [];
    arr2.forEach(item => {
        let [key, val] = item.split('=');
        arr3.push(key);
        arr3.push(val)
    })

    const id = [];
    arr3.forEach((item, i) => {
        if (item === 'user') {
            res.user = arr3[i + 1];
        }
        if (item === 'id') {
            id.push(Number(arr3[i + 1]));
        }
        if (item === 'city') {
            res.city = decodeURIComponent(arr3[i + 1])
        }
        if (item === 'enabled') {
            res.enabled = true;
        }
    })
    if (!res.enabled) res.enabled = false;
    res.id = id;
    console.log(arr3);

    return res
}
console.log(formatUrl(url));


/**
 * // 转换前：
source = [{
            id: 1,
            pid: 0,
            name: 'body'
          }, {
            id: 2,
            pid: 1,
            name: 'title'
          }, {
            id: 3,
            pid: 2,
            name: 'div'
          }]
// 转换为: 
tree = [{
          id: 1,
          pid: 0,
          name: 'body',
          children: [{
            id: 2,
            pid: 1,
            name: 'title',
            children: [{
              id: 3,
              pid: 2,
              name: 'div'
            }]
          }]
        }]

 */
    const source = [{
        id: 1,
        pid: 0,
        name: 'body'
    }, {
        id: 2,
        pid: 1,
        name: 'title'
    }, {
        id: 3,
        pid: 2,
        name: 'div'
    }]
function toTree(arrays) {
    const tree = [];
    const map = {};

    for (let item of arrays) {
        const newItem = map[item.id] = {
            ...item,
            children:[]
        }
        if(map[item.pid]){
            map[item.pid].children.push(newItem);
        }else{
            tree.push(newItem);
        }
    }
  console.log(tree.children);
    
    return tree;
}
console.log(toTree(source));

const tree = {
    name: 'root',
    children: [
      { name: '叶子1-1' },
      { name: '叶子1-2' },
      {
        name: '叶子2-1',
        children: [{
          name: '叶子3-1',
          children: [{
            name: '叶子4-1'
          }]
        }]
      }
    ]
  }