interface TreeNodeInterface {
  val: NodeVal,
  left: LeafNode,
  right: LeafNode
}
type LeafNode = TreeNode | null
type LevelNodes = Array<LeafNode>
type NodeVal = string | number | null

// const TreeNode = (val:any, left=null, right=null) => {
// this.val = val
// this.left = left
//   this.right = right
// }
class TreeNode implements TreeNodeInterface {
  val: any
  left: LeafNode
  right: LeafNode
  constructor (val: any, left: LeafNode = null, right: LeafNode = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const cutInLevel = function (arr: Array<NodeVal>): Array<Array<NodeVal>> {
  // 对arr的元素进行分层[1, 2, 3, 4, 5, 6, 7, 8] => [[1], [2, 3], [4, 5, 6, 7], [8]]
  const levelArr:Array<Array<NodeVal>> = []
  let i = 0
  while (true) {
    const start = Math.pow(2, i) - 1
    if ((Math.pow(2, i + 1) - 2) >= arr.length) {
      levelArr[i] = arr.slice(start)
      break
    } else {
      levelArr[i] = arr.slice(start, Math.pow(2, i + 1) - 1)
    }
    i++
    if ((Math.pow(2, i) - 1) >= arr.length) break
  }
  return levelArr
}

const createLevelTreeNode = function (levelArr:Array<NodeVal>, childNodes:LevelNodes):LevelNodes {
  const nodes:LevelNodes = []
  for (let i = 0; i < levelArr.length; i++) {
    if (levelArr[i]) {
      const treeNode = new TreeNode(levelArr[i])
      const leftChild = 2 * i
      if (childNodes.length > leftChild) {
        treeNode.left = childNodes[leftChild]
      }
      const rightChild = 2 * i + 1
      if (childNodes.length > rightChild) {
        treeNode.right = childNodes[rightChild]
      }
      nodes.push(treeNode)
    } else {
      nodes.push(null)
    }
  }
  return nodes
}

const createTree = function (arr:Array<NodeVal>): TreeNode {
  const levelNode = cutInLevel(arr)
  let nodes:LevelNodes = []
  for (let i = levelNode.length - 1; i >= 0; i--) {
    nodes = createLevelTreeNode(levelNode[i], nodes)
    // console.log('111111111: ', i, nodes)
  }
  return nodes[0] as TreeNode
}

const preOrder = function (root: TreeNode): Array<NodeVal> {
  // 前置遍历，根节点，左节点，右节点
  const recursion = function (root: TreeNode, res: Array<NodeVal>) {
    if (!root) return
    res.push(root.val)
    if (root.left) {
      recursion(root.left, res)
    }
    if (root.right) {
      recursion(root.right, res)
    }
  }
  const iterate = function (root: TreeNode): Array<NodeVal> {
    if (!root) return []
    const stack = [root]
    const res = []
    while (stack.length) {
      const cur = stack.shift() as TreeNode
      res.push(cur.val)
      if (cur.right) {
        stack.unshift(cur.right)
      }
      if (cur.left) {
        stack.unshift(cur.left)
      }
    }
    return res
  }
  const res1: Array<NodeVal> = []
  recursion(root, res1)
  const res2 = iterate(root)
  return res2
}

const inOrder = function (root: TreeNode): Array<NodeVal> {
  // 中序遍历，顺序是 左节点，根节点，右节点
  const recursion = function (root: TreeNode, res: Array<NodeVal>) {
    if (!root) return []
    if (root.left) {
      recursion(root.left, res)
    }
    res.push(root.val)
    if (root.right) {
      recursion(root.right, res)
    }
  }
  const iterate = function (root: TreeNode): Array<NodeVal> {
    if (!root) return []
    const stack = []
    let p = root
    const res = []
    while (p || stack.length) {
      if (p) {
        stack.push(p)
        p = p.left as TreeNode
      } else {
        const node = stack.pop() as TreeNode
        res.push(node.val)
        p = node.right as TreeNode
      }
    }
    return res
  }
  const res1: Array<NodeVal> = []
  recursion(root, res1)
  const res2: Array<NodeVal> = iterate(root)
  return res2
}

const postOrder = function (root: TreeNode): Array<NodeVal> {
  // 后序遍历，顺序是：左节点，右节点，根节点
  const recursion = function (root: TreeNode, res: Array<NodeVal>) {
    if (!root) return
    if (root.left) {
      recursion(root.left, res)
    }
    if (root.right) {
      recursion(root.right, res)
    }
    res.push(root.val)
  }
  const iterate = function (root: TreeNode): Array<NodeVal> {
    // 先逆后续访问：根节点，右节点，左节点
    // 然后再反转结果即为后续遍历的结果
    if (!root) return []
    const stack = [root]
    const res = []
    while (stack.length) {
      const cur = stack.pop() as TreeNode
      res.push(cur.val)
      if (cur.left) stack.push(cur.left)
      if (cur.right) stack.push(cur.right)
    }
    return res.reverse()
  }
  const res1: Array<NodeVal> = []
  recursion(root, res1)
  const res2: Array<NodeVal> = iterate(root)
  return res2
}

const levelOrder = function (root: TreeNode): Array<NodeVal> {
  // 层序遍历
  if (!root) return []
  let stack = [root]
  const res: Array<NodeVal> = []
  while (stack.length) {
    const curLevel = []
    while (stack.length) {
      const curNode = stack.pop() as TreeNode
      res.push(curNode.val)
      if (curNode.right) {
        curLevel.push(curNode.right)
      }
      if (curNode.left) {
        curLevel.push(curNode.left)
      }
    }
    stack = curLevel
  }
  return res
}

const getHeight = function (root: TreeNode): number {
  if (!root) return 0
  const left = getHeight(root.left as TreeNode)
  const right = getHeight(root.right as TreeNode)
  return Math.max(left, right) + 1
}

const getWidth = function (root: TreeNode): number {
  if (!root) return 0
  const stack = [root]
  let width = 1
  let curLevelWidth = 1
  while (stack.length) {
    while (curLevelWidth) {
      const curNode = stack.pop() as TreeNode
      if (curNode.left) stack.push(curNode)
      if (curNode.right) stack.push(curNode)
      curLevelWidth--
    }
    curLevelWidth = stack.length
    width = Math.max(width, curLevelWidth)
  }
  return width
}

// const testI = [1, 2, null, 4, 5, null, null, 6, 7, 8, 9]
// const root = createTree(testI)
// console.log(levelOrder(root))
export {
  createTree,
  preOrder,
  inOrder,
  postOrder,
  levelOrder,
  TreeNode,
  getHeight,
  getWidth
}
