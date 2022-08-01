var majorityElement = function (nums) {
  //   const set = new Set(nums);
  //   for (num of set) {
  //     if (nums.filter((x) => x === num).length > nums.length / 2) {
  //       return num;
  //     }
  //   }
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
nums = [3, 2, 3];
nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
console.log(majorityElement(nums2));
