interface BinaryTreeShape {
  value: number;
  depth: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  insert: (value: number) => void;
  getNodeByValue: (value: number) => BinaryTree | null;
  depthFirstTraversal: () => void;
}

class BinaryTree implements BinaryTreeShape {
  left: BinaryTree | null;
  right: BinaryTree | null;
  constructor(public value: number, public depth: number = 1) {
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    // insert left
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        const bt = new BinaryTree(value, this.depth + 1);
        this.left = bt;
      }
    } else {
      // insert right
      if (this.right) {
        this.right.insert(value);
      } else {
        const bt = new BinaryTree(value, this.depth + 1);
        this.right = bt;
      }
    }
  }

  getNodeByValue(value: number): BinaryTree | null {
    if (this.value === value) {
      return this;
    } else if (this.left && value < this.value) {
      return this.left.getNodeByValue(value);
    } else if (this.right) {
      return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal(): void {
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }
}

const bt = new BinaryTree(100);
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);
bt.insert(10);
bt.insert(60);
bt.insert(150);
bt.insert(130);
bt.insert(250);
// console.log(bt);
// const node = bt.getNodeByValue(10);
// console.log(node);
bt.depthFirstTraversal();
