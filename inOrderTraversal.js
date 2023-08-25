// Inorder Traversal
function inorderTraversal(node) {
  if (node !== null) {
    inorderTraversal(node.left);
    console.log(node.data);
    inorderTraversal(node.right);
  }
}

// Height Calculation (DFS)
function findTreeHeight(node) {
  if (node === null) {
    return -1; // Empty tree has a height of -1
  }
  const leftHeight = findTreeHeight(node.left);
  const rightHeight = findTreeHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}
