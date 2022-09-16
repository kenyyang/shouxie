class Solution {
   public static void main(String[] args) {
      System.out.println(new Solution().myAlg(new String("bab").toCharArray()));
   }
    char[] nums;
   public int myAlg(char[] nums) {
      this.nums = nums;
       int left = 0;
       int right = nums.length - 1;
       int res = right - left + 1;
       int outer = 0;
      while (left <= right) {
         if (nums[left] == nums[right]) {
            right--;
            left++;
            outer += 2;
         }
         else {
            res = Math.max(leftCheck(left, right), rightCheck(left, right)) + outer;
            break;
         }
      }
      return res;
   }

   private int leftCheck(int left, int right) {
      while (left <= right && nums[left] != nums[right]) {
         left++;
      }
       int res = right - left + 1;
      while (left <= right) {
         if (nums[left] != nums[right]) return 0;
         left++;
         right--;
      }
      return res;
   }
   private int rightCheck(int left, int right) {
      while (left <= right && nums[left] != nums[right]) {
         right--;
      }
       int res = right - left + 1;
      while (left <= right) {
         if (nums[left] != nums[right]) return 0;
         left++;
         right--;
      }
      return res;
   }
}
var threeSum = function (nums) {
   nums.sort((a, b) => a - b)
   const res = []

   for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || nums[i] !== nums[i - 1]) {
         let l = i + 1, r = nums.length - 1
         while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
               res.push([nums[i], nums[l], nums[r]])
               l++
               r--
               while (l < r && nums[l] === nums[l - 1]) {
                  l++
               }
               while (l < r && nums[r] === nums[r + 1]) {
                  r--
               }
            } else if (nums[i] + nums[l] + nums[r] < 0) {
               l++
            } else {
               r--
            }
         }
      }
   }
   return res
};
let n = parseInt(readline());
let arr = readline().split(' ').map(Number);
let result = 0;
const lmap = new Map();
const jmap = new Map();
for (let j = 0; i < arr.length; i++) {
   if (i % 2 == 0) {
      lmap.set(arr[i], (lmap.get(arr[i]) || 0) + 1);
   } else {
      jmap.set(arr[i], (jmap.get(arr[i]) || 0) + 1);
   }
}
const jcount = Array.from(jmap).sort((a, b) => {
   return b[1] - a[1];
});
const lcount = Array.from(lmap).sort((a, b) => {
   return b[1] - a[1];
});
if (jcount.length === 1 && lcount.length === 1) {
   result = Math.floor(n / 2);
} else if (jcount[0][0] == lcount[0][0]) {
   if (jcount[0][1] < lcount[0][1]) {
      result = n - jcount[1][1] - lcount[0][1]
   } else {
      result = n - jcount[0][1] - lcount[1][1]
   }
} else {
   result = n - jcount[0][1] - lcount[0][1]
}
print(result)


// let num1 = 3, num2 = 2, num = 5, str = 'aBcBa'
// let res = ''
// for (let i = 0; i < num1; i++) {
//   res += str[i].toUpperCase()
// }
// for (let i = num1; i < num; i++) {
//   res += str[i].toLowerCase()
// }
// console.log(res)
let num1 = 3,str = 'aBcBa'
let res = ''
for(let i = 0; i< str.length;i++){
   if(num1 >0){
      res += str[i].toUpperCase();
      num1--;
   }else{
      res += str[i].toLowerCase();
   }
}
console.log(res);
var a = 1;
function func() {
    {console.log(a);}
    let a = 2;
}
func();  // 报错