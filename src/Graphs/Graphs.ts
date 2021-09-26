import Vertex from './Vertex';
// import Edge from './Edge';

interface GraphShape {
  vertices: Vertex[];
  addVertex: (data: string) => Vertex;
  print: () => void;
  removeVertex: (vertexToRemove: Vertex) => void;
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

  removeVertex(vertexToRemove: Vertex) {
    const filteredVertices = this.vertices.filter((vertex: Vertex) => vertex !== vertexToRemove);
    this.vertices = filteredVertices;
  }

  print() {
    this.vertices.forEach((vertex: Vertex) => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
console.log(atlantaStation, newYorkStation);
trainNetwork.removeVertex(atlantaStation);
trainNetwork.print();

module.exports = Graph;
