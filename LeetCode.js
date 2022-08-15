//无重复字符的最长子串
let lengthOfLongestSubstring = function (s) {
    let j = 0, maxlength = 0;
    let set = new Set();
    if (s.length === 0) return 0;

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxlength = Math.max(maxlength, set.size)
        } else {
            while (set.has(s[i])) {
                set.delete(s[j]);
                j++
                maxlength = Math.max(maxlength, set.size)
            }
            set.add(s[i])
        }
    }
    return maxlength
}
//合并两个有序数组
var merge = function (nums1, m, nums2, n) {
    //slice LeetCode 不能用？？？？
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b)
};
//合并两个有序链表
var mergeTwoLists = function (list1, list2) {

    let curr = new Listnode()
    let dummy = curr
    while (list1 != null && list2 != null) {

        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
    }
    //list2为空
    if (list1 != null) {
        curr.next = list1
    } else {
        curr.next = list2
    }
    return dummy.next
}
//字符串相加
//给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回
var addStrings = function (num1, num2) {
    let l = num1.length - 1
    let r = num2.length - 1
    let add = 0
    let total = ''

    while (l >= 0 || r >= 0 || add) {
        let t = (num1[l] * 1 || 0) + (num2[r] * 1 || 0) + add
        total = (t % 10) + total;
        add = t > 9 ? 1 : 0
        l--
        r--
    }
    return total
}
//比较版本号
var compareVersion = function (version1, version2) {

    version1 = version1.split('.');
    version2 = version2.split('.');
    //取两个数组中较大值作为遍历次数
    let n = Math.max(version1.length, version2.length);

    for (let i = 0; i < n; i++) {
        //利用js的特性，在版本号不等长情况下，当元素为undefined时取0，否则使用parseInt清除前导0进行比较
        let code1 = (version1[i] === undefined) ? 0 : parseInt(version1[i]);
        let code2 = (version2[i] === undefined) ? 0 : parseInt(version2[i]);

        if (code1 > code2) {
            return 1;
        } else if (code1 < code2) {
            return -1;
        }
    }
    return 0;
}
//两数之和
var twoSum = function (nums, target) {

    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let tem = target - nums[i];
        if (!map.has(tem)) {
            map.set(nums[i], i);
        } else {
            return [i, map.get(tem)]

        }
    }
    return [];
}
//有效的括号
var isValid = function (s) {
    const map = { '[': ']', '{': '}', '(': ')' }
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else {
            if (s.length === 0 || s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    return s.length === 0
}
//爬楼梯
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    const dp = [, 1, 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];

};
//全排列
var permute = function (nums) {

    const res = [], path = [];
    backTracking(nums, nums.length, [])
    return res;

    function backTracking(n, k, used) {

        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < k; i++) {
            if (used[i]) continue;
            path.push(n[i])
            used[i] = true
            backTracking(n, k, used);
            path.pop()
            used[i] = false

        }

    }
}
//最大子数组和 最大子序和
var maxSubArray = function (nums) {
    if (nums.length === 0) return 0;
    let ans = nums[0], sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        ans = Math.max(sum, ans);
    }
    return ans;
}
//层级关系题目
/*  以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，
    为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
    parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
    */
//原始 list 如下
{
    let list = [
        { id: 1, name: "部门A", parentId: 0 },
        { id: 2, name: "部门B", parentId: 0 },
        { id: 3, name: "部门C", parentId: 1 },
        { id: 4, name: "部门D", parentId: 1 },
        { id: 5, name: "部门E", parentId: 2 },
        { id: 6, name: "部门F", parentId: 3 },
        { id: 16, name: "部门L", parentId: 3 },
        { id: 7, name: "部门G", parentId: 2 },
        { id: 8, name: "部门H", parentId: 4 },
    ];

    const result = convert(list);
    console.log(result);
    // 转换后的结果如下

    // let result = [
    //   {
    //     id: 1,
    //
    //     name: "部门A",
    //
    //     parentId: 0,
    //
    //     children: [
    //       {
    //         id: 3,
    //
    //         name: "部门C",
    //
    //         parentId: 1,
    //
    //         children: [
    //           {
    //             id: 6,
    //
    //             name: "部门F",
    //
    //             parentId: 3,
    //           },
    //           {
    //             id: 16,
    //
    //             name: "部门L",
    //
    //             parentId: 3,
    //           },
    //         ],
    //       },
    //
    //       {
    //         id: 4,
    //
    //         name: "部门D",
    //
    //         parentId: 1,
    //
    //         children: [
    //           {
    //             id: 8,
    //
    //             name: "部门H",
    //
    //             parentId: 4,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ];

    function convert(list, id = 0) {
        let res = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].parentId === id) {
                res.push(list[i]);
                list[i].children = convert(list, list[i].id);
            }
        }
        return res;
    }
}
//路径总和
//给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，
//这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
var hasPathSum = function (root, targetSum) {
    const travesal = (node, cnt) => {
        if (cnt === 0 && !node.left && !node.right) return true;
        if (!node.left && !node.right) return false;
        //遍历左节点
        if (node.left && travesal(node.left, cnt - node.left.val)) return true;
        //遍历右节点
        if (node.right && travesal(node.right, cnt - node.right.val)) return true;

        return false;

    }
    if (!root) return false;
    return travesal(root, targetSum - root.val);
};
//求根节点到叶节点数字之和
/**
 * 输入：root = [1,2,3]
 *  输出：25
 */
var sumNumbers = function (root) {
    if (!root) return 0;
    let res = 0;
    const dfs = (root, sum) => {
        if (!root) return;
        // 更新sum
        sum = sum * 10 + root.val;
        // 若是叶子节点，则累加到res
        if (!root.left && !root.right) res += sum;
        dfs(root.left, sum);
        dfs(root.right, sum);
    };
    dfs(root, 0);
    return res;
};