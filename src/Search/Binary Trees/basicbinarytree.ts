interface BinaryTreeShape {
  value: number;
  depth: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
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
}

const bt = new BinaryTree(100);
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);
console.log(bt);
