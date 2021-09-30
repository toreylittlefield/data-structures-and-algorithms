class TreeList {
  left: TreeList | null;
  right: TreeList | null;
  constructor(public value: number, public depth: number = 0) {
    this.left = null;
    this.right = null;
  }

  insertNode(value: number): TreeList | null {
    let parentValue = this.value;
    // insert right
    if (value >= parentValue && this.left !== null) {
      if (this.right) {
        return this.right.insertNode(value);
      }
      const newNode = new TreeList(value, this.depth + 1);
      this.right = newNode;
      return this.right;
    }
    // insert left
    if (value <= parentValue) {
      if (this.left) {
        return this.left.insertNode(value);
      }
      const newNode = new TreeList(value, this.depth + 1);
      this.left = newNode;
      return this.left;
    }
    const newNode = new TreeList(value, this.depth + 1);
    this.left = newNode;
    return this.left;
  }
}

const rootOfTree = new TreeList(5);
rootOfTree.insertNode(1);
rootOfTree.insertNode(5);
rootOfTree.insertNode(5);
rootOfTree.insertNode(5);
rootOfTree.insertNode(5);

// answer should be 2

const findUniValues = (tree: TreeList) => {
  let total = 0;
  let stack = [tree];
  while (stack.length > 0) {
    let parentNode = stack.pop();
    if (parentNode === undefined) break;
    let leftNode: TreeList | null = parentNode.left;
    let rightNode: TreeList | null = parentNode.right;
    console.log(parentNode);
    if (leftNode !== null && rightNode !== null) {
      const isZero = leftNode.value - rightNode.value === 0 ? true : false;
      if (isZero) total += 1;
      if (parentNode.value === leftNode.value) total += 1;
    }
    if (!leftNode && !rightNode) total += 1;
    if (leftNode) stack.push(leftNode);
    if (rightNode) stack.push(rightNode);
  }
  return total;
};

console.log(findUniValues(rootOfTree));

console.log(JSON.stringify(rootOfTree, null, 2));
