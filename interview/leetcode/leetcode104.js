function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
var root = new TreeNode(
  3,
  new TreeNode(2),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root));
