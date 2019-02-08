class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  findNode(value) {
    if (this.value === value) {
      return true
    } else {
      if (value < this.value) {
        if (this.left === null) {
          return false
        } else return this.left.findNode(value)
      } else if (value > this.value) {
        if (this.right === null) {
          return false
        } else return this.right.findNode(value)
      }
    }
  }
  addNode(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new Node(value)
        return
      } else {
        this.left.addNode(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new Node(value)
        return
      } else {
        this.right.addNode(value)
      }
    } else {
      return
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value)
    } else {
      this.root.addNode(value)
    }
  }

  find(value) {
    return this.root.findNode(value)
  }

  bfs() {
    // Use this method to traverse your tree using Breadth First Search Technique
    const queue = []
    const visited = []
    queue.push(this.root)
    while (queue.length) {
      let element = queue.shift()
      visited.push(element.value)
      if (element.left) {
        queue.push(element.left)
      }
      if (element.right) {
        queue.push(element.right)
      }
    }
    return visited
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.bfs())
// tree.insert(7);
console.log(tree.find(71))
