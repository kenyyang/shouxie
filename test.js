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