class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  findNode(value) {
    if (this.value === value) {
      return true;
    } else {
      if (value < this.value) {
        if (this.left === null) {
          return false;
        } else return this.left.findNode(value);
      } else if (value > this.value) {
        if (this.right === null) {
          return false;
        } else return this.right.findNode(value);
      }
    }
  }
  addNode(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new Node(value);
        return;
      } else {
        this.left.addNode(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new Node(value);
        return;
      } else {
        this.right.addNode(value);
      }
    } else {
      return;
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.addNode(value);
    }
  }

  find(value) {
    return this.root.findNode(value);
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
console.log(tree.find(71));
