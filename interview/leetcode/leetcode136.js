var singleNumber = function (nums) {
  //   const set1 = new Set(nums);
  //   let res = 0;
  //   for (num of set1) {
  //     res += num;
  //   }
  //   res *= 2;
  //   for (num of nums) {
  //     res -= num;
  //   }
  //   return res;
  res = 0;
  for (num of nums) {
    res ^= num;
  }
  return res;
};
nums = [2, 2, 1];
nums2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
console.log(singleNumber(nums2));
