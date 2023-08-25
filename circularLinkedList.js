class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head; // Point back to itself for circularity
    } else {
      newNode.next = this.head.next;
      this.head.next = newNode;
      this.head = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }

    if (this.head.data === data) {
      if (this.head === this.head.next) {
        this.head = null;
      } else {
        this.head = this.head.next;
        current.next = this.head;
      }
    }
  }
}
