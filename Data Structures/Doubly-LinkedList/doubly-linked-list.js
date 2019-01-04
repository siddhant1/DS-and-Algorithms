class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      let tail = this.tail;
      tail.next = node;
      node.prev = tail;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  pop() {
    let tail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = tail.prev;
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
    return tail;
  }

  shift() {
    let head = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.length--;
    return head;
  }

  unshift(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = null;
    } else {
      let prevHead = this.head;
      prevHead.prev = node;
      node.next = prevHead;
      this.head = node;
    }

    this.length++;
    return node;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index > this.length / 2) {
      //start from tail
      let findNode = this.tail;
      index = this.length - index - 1;
      let counter = 0;
      while (counter < index) {
        findNode = findNode.prev;
        counter++;
      }
      return findNode;
    } else {
      let findNode = this.head;
      let counter = 0;
      while (counter < index) {
        findNode = findNode.next;
        counter++;
      }
      return findNode;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === this.length) {
      return this.push(value);
    }
    if (index === 0) {
      return this.unshift(value);
    }
    const position = this.get(index);
    if (position) {
      const node = new Node(value);
      const prev = position.prev;
      prev.next = node;
      node.prev = prev;
      node.next = position;
      position.prev = node;
      this.length++;
      return node;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const node = this.get(index);
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    this.length--;
    return node;
  }

  reverse() {
    let head = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    while (head !== null) {
      let prev = head.prev;
      head.prev = head.next;
      head.next = prev;
      head = head.next;
    }
  }

  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(" <-> ");
  }
}

let l = new LinkedList();
l.push(30);
l.push(40);
l.push(50);
l.push(60);
l.push(70);
l.push(80);
l.push(90);
// l.pop();
// l.pop();
// l.shift();
// l.unshift(4);
console.log(l.length);
l.insert(8, 80);
l.remove(6);
// l.reverse();
console.log(l.print());
console.log(l.set(-1, 99));
console.log(l.print());
