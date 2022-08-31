var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  for (const num of nums) {
    const x = (num - 1) % n;
    nums[x] += n;
  }
  const res = [];
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      res.push(i + 1);
    }
  }
  return res;
};
nums = [4, 3, 2, 7, 8, 2, 3, 1];
nums2 = [1, 1];
console.log(findDisappearedNumbers(nums));
console.log(findDisappearedNumbers(nums2));
