const obj = {
    data: [
        ['xiaoming', 'male', '18', 'beijing', '2020-01-02'],
        ['xiaofang', 'female', '18', 'shanghai', '2020-03-02']
    ],
    columns: [
        { name: 'name', note: '' },
        { name: 'gender', note: '' },
        { name: 'age', note: '' },
        { name: 'address', note: '' },
        { name: 'registerTime', note: '' },
    ]
}
function format(obj) {

    const result = [];
    for(let j = 0; j< obj.data.length; j++){
        const newObj = {};
        for(let i = 0; i< obj.columns.length; i++){
            let attr = obj.columns[i].name;
            newObj[attr] = obj.data[j][i]; 
        }
        result.push(newObj);
    }
    return result;
}
// function format(obj) {

//     const result = [];
//          let ans = 0; 
//          const newObj = {};
//          for(let i = 0; i< obj.columns.length; i++){
//             let attr = obj.columns[i].name;
//             newObj[attr] = obj.data[ans][i]; 
//         }
//         result.push(newObj);
//         ans++;
//         const newObj2 = {};
//         for(let i = 0; i< obj.columns.length; i++){
//             let attr = obj.columns[i].name;
//             newObj2[attr] = obj.data[ans][i]; 
//         }
//         result.push(newObj2);
//     return result;
// }
console.log(format(obj))
// 输出下面结果
// [
//     { name: 'xiaoming', 'gender': 'male', age: '18', address: 'beijing', registerTime: '2020-01-02' },
    
//     { name: 'xiaofang', 'gender': 'female', age: '18', address: 'shanghai', registerTime: '2020-03-02' },
// ]
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {



        grid[row][col] = '0';
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row , col - 1);
        dfs(row , col + 1);

    }

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === '1'){
                count++;
                dfs(row, col);
            }
        }
    }
    return count;
};