function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var inorderTraversal = function (root) {
  const res = [];
  function inorder(root) {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res;
};
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
const root1 = new TreeNode(null);
const root2 = new TreeNode(1);
console.log(inorderTraversal(root));
console.log(inorderTraversal(root1));
console.log(inorderTraversal(root2));
