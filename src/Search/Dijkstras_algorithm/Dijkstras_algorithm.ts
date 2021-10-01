import { Vertex } from '../../Graphs/Vertex';
import Graph from '../../Graphs/Graphs';

const testGraph = new Graph(true, true);
const a = testGraph.addVertex('A');
const b = testGraph.addVertex('B');
const c = testGraph.addVertex('C');
const d = testGraph.addVertex('D');
const e = testGraph.addVertex('E');
const f = testGraph.addVertex('F');
const g = testGraph.addVertex('G');

testGraph.addEdge(a, c, 100);
testGraph.addEdge(a, b, 3);
testGraph.addEdge(a, d, 4);
testGraph.addEdge(d, c, 3);
testGraph.addEdge(d, e, 8);
testGraph.addEdge(e, b, -2);
testGraph.addEdge(e, f, 10);
testGraph.addEdge(b, g, 9);
testGraph.addEdge(e, g, -50);

type Add = { vertex: Vertex; priority: number };

class PriorityQueue {
  heap: Add[];
  size: number;
  constructor() {
    this.heap = [{ vertex: new Vertex('null'), priority: -1 }];
    this.size = 0;
  }

  add({ vertex, priority }: Add) {
    if (vertex instanceof Vertex) {
      this.heap.push({ vertex, priority });
      this.size++;
      this.bubbleUp();
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  popMin() {
    if (this.size === 0) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.size--;
    this.heap.pop();
    this.heapify();
    return min;
  }

  bubbleUp() {
    let current = this.size;
    while (current > 1 && this.heap[getParent(current)].priority > this.heap[current].priority) {
      this.swap(current, getParent(current));
      current = getParent(current);
    }
  }

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    // Check that there is something to swap (only need to check the left if both exist)
    while (this.canSwap(current, leftChild, rightChild)) {
      // Only compare left & right if they both exist
      if (this.exists(leftChild) && this.exists(rightChild)) {
        // Make sure to swap with the smaller of the two children
        if (this.heap[leftChild].priority < this.heap[rightChild].priority) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        // If only one child exist, always swap with the left
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  exists(index: number) {
    return index <= this.size;
  }

  canSwap(current: number, leftChild: number, rightChild: number) {
    // Check that one of the possible swap conditions exists
    return (
      (this.exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority) ||
      (this.exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority)
    );
  }
}

const getParent = (current: number) => Math.floor(current / 2);
const getLeft = (current: number) => current * 2;
const getRight = (current: number) => current * 2 + 1;

type Distance = {
  [key: string]: number;
};

type Previous = {
  [key: string]: Vertex | null;
};

const dijkstras = (graph: Graph, startingVertex: Vertex) => {
  const distances: Distance = {};
  const previous: Previous = {};
  const queue = new PriorityQueue();
  queue.add({ vertex: startingVertex, priority: 0 });
  console.log(queue);
  graph.vertices.forEach((vertex) => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });
  distances[startingVertex.data] = 0;

  while (queue.isEmpty() === false) {
    let queueMin = queue.popMin();
    if (queueMin === null) return { distances, previous };
    const { vertex } = queueMin;

    vertex.edges.forEach((edge) => {
      let alternate = distances[vertex.data];
      if (edge.weight !== null) alternate += edge.weight;
      const neighborValue = edge.end.data;
      if (alternate < distances[neighborValue]) {
        distances[neighborValue] = alternate;
        previous[neighborValue] = vertex;
        queue.add({ vertex: edge.end, priority: distances[neighborValue] });
      }
    });
  }
  return { distances, previous };
};

const results = dijkstras(testGraph, testGraph.vertices[0]);
console.log(results);
