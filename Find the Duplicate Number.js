/**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var fast = 0,
        slow = 0,
        find = 0;
        
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if (fast === slow) {
            break;
        }
    }
    
    while (find !== slow) {
        find = nums[find];
        slow = nums[slow];
    }
    
    return find;
};


// SOLUTION 2
/**
二分法
复杂度
时间 O(NlogN) 空间 O(1)

思路
实际上，我们可以根据抽屉原理简化刚才的暴力法。我们不一定要依次选择数，然后看是否有这个数的重复数，我们可以用二分法先选取n/2，按照抽屉原理，整个数组中如果小于等于n/2的数的数量大于n/2，说明1到n/2这个区间是肯定有重复数字的。比如6个抽屉，如果有7个袜子要放到抽屉里，那肯定有一个抽屉至少两个袜子。这里抽屉就是1到n/2的每一个数，而袜子就是整个数组中小于等于n/2的那些数。这样我们就能知道下次选择的数的范围，如果1到n/2区间内肯定有重复数字，则下次在1到n/2范围内找，否则在n/2到n范围内找。下次找的时候，还是找一半。

注意
我们比较的mid而不是nums[mid]
因为mid是下标，所以判断式应为cnt > mid，最后返回min

代码
public class Solution {
    public int findDuplicate(int[] nums) {
        int min = 0, max = nums.length - 1;
        while(min <= max){
            // 找到中间那个数
            int mid = min + (max - min) / 2;
            int cnt = 0;
            // 计算总数组中有多少个数小于等于中间数
            for(int i = 0; i < nums.length; i++){
                if(nums[i] <= mid){
                    cnt++;
                }
            }
            // 如果小于等于中间数的数量大于中间数，说明前半部分必有重复
            if(cnt > mid){
                max = mid - 1;
            // 否则后半部分必有重复
            } else {
                min = mid + 1;
            }
        }
        return min;
    }
}

*/
