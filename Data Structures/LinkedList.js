// We will define a node first
// Node has 2 things
//  -> Data and Next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    var pre = this.head;
    var temp = pre.next;
    while (temp.next) {
      temp = temp.next;
      pre = pre.next;
    }

    this.tail = pre;
    pre.next = null;
    this.length--;

    return temp;
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("!");
list.pop();
list.pop();
list.pop();

console.log(JSON.stringify(list, null, 2));
