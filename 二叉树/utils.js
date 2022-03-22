/** 数组按下标转二叉树 */
function arrayToBinaryTree(arr) {
  if (!arr || !arr.length) return null;
  // 1. 记录下标
  let index = 0;
  // 2. 创建队列
  const queue = [];
  // 3. 记录数组长度
  const len = arr.length;
  // 4. 创建根节点
  const head = new TreeNode(arr[index]);
  // 5. 把根节点添加到队列中
  queue.push(head);

  // 6. 开始遍历数组
  while (index < len) {
    // 递增数组
    index++;
    // 从队列里面取出第一个元素
    const parent = queue.shift();
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.left = node;
      queue.push(node);
    }

    index++;
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.right = node;
      queue.push(node);
    }
  }
  return head;
};

/** 二叉树的节点 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/** 普通二叉搜索树 */
class BinarSearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  append(val) {
    const node = new TreeNode(val)
    if(this.root === null) {
      this.root = node
      this.size ++
    } else {
      this.appendNode(this.root, node)
    }
  }

  appendNode(parent, node) {
    if(parent.val > node.val) {
      if(parent.left === null) {
        parent.left = node
        this.size ++
      } else {
        this.appendNode(parent.left, node)
      }
    } else if(parent.val < node.val) {
      if(parent.right === null) {
        parent.right = node
        this.size ++
      } else {
        this.appendNode(parent.right, node)
      }
    }
  }
}

/** 数组转二叉搜索树 */
function arrayToBinarySearchTree(arr = []) {
  let bst = new BinarSearchTree()
  arr.forEach(val => bst.append(val))
  return bst.root
}
