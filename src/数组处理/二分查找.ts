function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  let res = -1
  while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      if (nums[mid] === target) {
          return res = mid
      } else if (nums[mid] > target) {
          r = mid - 1
      } else {
          l = mid + 1
      }
  }

  return res
};
// findIndex 循环判断
function search2(nums: number[], target: number): number {
  return nums.findIndex((item) => item === target)
};