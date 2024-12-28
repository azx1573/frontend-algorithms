/**
 * 实现一个二叉搜索树
 */

function BinarySearchTree() {
  this.root = null;

  /**
   * 实现一个类中类，用来创建节点
   * @param {*} key
   */
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  /**
   * 查找指定的key是否在搜索二叉树中
   * @returns
   */
  BinarySearchTree.prototype.search = function (key) {
    let node = this.root;
    while (node !== null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  };

  /**
   * 查找搜索二叉树中的最小值
   */
  BinarySearchTree.prototype.min = function () {
    let node = this.root;
    while (node !== null) {
      node = node.left;
    }
    return node?.key;
  };

  /**
   * 查找搜索二叉树中的最大值
   */
  BinarySearchTree.prototype.max = function () {
    let node = this.root;
    while (node !== null) {
      node = node.right;
    }
    return node?.key;
  };
}
