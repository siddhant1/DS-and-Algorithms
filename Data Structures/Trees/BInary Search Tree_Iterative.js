class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  findNode(value) {
    let current = this.root;
    while (true) {
      if (current.value === value) {
        return true;
      } else {
        if (value > current.value) {
          if (current.right === null) {
            return false;
          } else {
            current = current.right;
          }
        } else if (value < current.value) {
          if (current.left === null) {
            return false;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.findNode(161));
