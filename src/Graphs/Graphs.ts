import Vertex from './Vertex';
// import Edge from './Edge';

interface GraphShape {
  vertices: Vertex[];
  addVertex: (data: string) => Vertex;
  addEdge: (vertexOne: Vertex, vertexTwo: Vertex) => void;
  removeEdge: (vertexOne: Vertex, vertexTwo: Vertex) => void;
  removeVertex: (vertexToRemove: Vertex) => void;
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

  removeVertex(vertexToRemove: Vertex) {
    const filteredVertices = this.vertices.filter((vertex: Vertex) => vertex !== vertexToRemove);
    this.vertices = filteredVertices;
  }

  addEdge(vertexOne: Vertex, vertexTwo: Vertex) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo);
      vertexTwo.addEdge(vertexOne);
    } else {
      throw new Error('Both arguments need to be an instance of a Vertex');
    }
  }

  removeEdge(vertexOne: Vertex, vertexTwo: Vertex) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      vertexTwo.removeEdge(vertexOne);
    } else {
      throw new Error('Both arguments need to be an instance of a Vertex');
    }
  }

  print() {
    this.vertices.forEach((vertex: Vertex) => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

// trainNetwork.removeVertex(atlantaStation);
trainNetwork.addEdge(atlantaStation, newYorkStation);
trainNetwork.removeEdge(atlantaStation, newYorkStation);
trainNetwork.print();

module.exports = Graph;
