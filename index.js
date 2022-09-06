class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor () {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst (data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast (data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt (data, index) {

    // Index out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index 
  getAt (index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }

      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printSize() {
    console.log(this.size);
  }

  printHeadNode() {
    console.log(this.head);
  }

  printTailNode() {
    let current;

    if (!this.head) {
      console.log(null);
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      console.log(current);
    }
  }

  pop() {
    let current = this.head;
    let previous;

    if (!this.head) {
      console.log(null);
    } else if (this.head && this.size === 1) {
      console.log(current);
      this.head = current.next;
    } else {

      while (current.next) {
        previous = current;
        current = current.next;
      }

      console.log(current);
      previous.next = current.next;
    }

    this.size--;
  }

  contains(data) {
    let current = this.head;

    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) {
      console.log(false);
    } else {
      console.log(true);
    }
  }

  find(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        console.log(index);
      }

      index++;
      current = current.next;
    }

    console.log(null);
  }
}

const ll = new LinkedList();

// ll.insertLast(100);
// ll.insertLast(200);
// ll.insertLast(300);
// ll.insertLast(400);
// // ll.removeAt(10);


// ll.printListData();
// ll.printSize();
// ll.printHeadNode();
// ll.printTailNode();

const ll2 = new LinkedList();

ll2.insertLast(100);
ll2.insertLast(200);
ll2.insertLast(300);
ll2.insertLast(400);

ll2.find(400);
ll2.printListData();
// ll.getAt(10);
