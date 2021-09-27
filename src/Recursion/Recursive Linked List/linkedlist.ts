interface NodeShape {
  data: string;
  next: NodeData | null;
}

class NodeData implements NodeShape {
  next: NodeData | null;
  constructor(public data: string) {
    this.next = null;
  }

  setNextNode(node: NodeData) {
    if (!(node instanceof NodeData)) {
      throw new Error('Next node must be a member of the NodeData class');
    }
    this.next = node;
  }

  setNext(data: NodeData) {
    this.next = data;
  }

  getNextNode() {
    if (this.next instanceof NodeData) {
      return this.next;
    }
    return null;
  }
}

interface LinkedListShape {
  head: NodeData | null;
}

class LinkedList implements LinkedListShape {
  head: NodeData | null;
  constructor() {
    this.head = null;
  }

  addToHead(data: string) {
    const nextNode = new NodeData(data);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data: string) {
    let lastNode = this.head;
    if (!lastNode) {
      this.head = new NodeData(data);
    } else {
      if (this.head === null) return;
      let temp = this.head;
      while (temp.getNextNode() !== null) {
        const next = temp.getNextNode();
        if (next instanceof NodeData) {
          temp = next;
        } else {
          break;
        }
      }
      temp.setNextNode(new NodeData(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    output = output.concat('<tail>');
    console.log(output);
  }

  findNodeIteratively(data: string) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  //   findNodeRecursively(data: string, currentNode = this.head) {}
}

const myList = new LinkedList();

// myList.addToHead('Node 1');
// myList.addToHead('Node 2');
// myList.addToHead('Node 3');
// myList.addToHead('Node 4');
myList.addToTail('Node 1');
myList.addToHead('Node 2');
console.log(myList);
