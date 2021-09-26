import Vertex from './Vertex';
// import Edge from './Edge';

interface GraphShape {
  vertices: Vertex[];
  addVertex: (data: string) => Vertex;
  print: () => void;
}

class Graph implements GraphShape {
  vertices: Vertex[];
  constructor() {
    this.vertices = [];
  }

  addVertex(data: string) {
    const vertex = new Vertex(data);
    this.vertices.push(vertex);
    return vertex;
  }

  print() {
    this.vertices.forEach((vertex: Vertex) => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
console.log(atlantaStation, newYorkStation);
trainNetwork.print();

module.exports = Graph;
