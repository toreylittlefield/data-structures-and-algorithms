import { Vertex } from './Vertex';
// import Edge from './Edge';

interface GraphShape {
  vertices: Vertex[];
  addVertex: (data: string) => Vertex;
  addEdge: (vertexOne: Vertex, vertexTwo: Vertex, weight: number) => void;
  removeEdge: (vertexOne: Vertex, vertexTwo: Vertex) => void;
  removeVertex: (vertexToRemove: Vertex) => void;
  print: () => void;
}

class Graph implements GraphShape {
  vertices: Vertex[];
  constructor(public isWeighted: boolean = false, public isDirected: boolean = false) {
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

  addEdge(vertexOne: Vertex, vertexTwo: Vertex, weight: number | null = null) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      const edgeWeight = this.isWeighted ? weight : null;
      vertexOne.addEdge(vertexTwo, edgeWeight);
      if (!this.isDirected) vertexTwo.addEdge(vertexOne, edgeWeight);
    } else {
      throw new Error('Both arguments need to be an instance of a Vertex');
    }
  }

  removeEdge(vertexOne: Vertex, vertexTwo: Vertex) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      if (!this.isDirected) vertexTwo.removeEdge(vertexOne);
    } else {
      throw new Error('Both arguments need to be an instance of a Vertex');
    }
  }

  getVertexByValue(value: string) {
    return this.vertices.find((vertex) => vertex.data === value);
  }

  print() {
    this.vertices.forEach((vertex: Vertex) => vertex.print());
  }
}

// const trainNetwork = new Graph(false, true);
// const atlantaStation = trainNetwork.addVertex('Atlanta');
// const newYorkStation = trainNetwork.addVertex('New York');

// // trainNetwork.removeVertex(atlantaStation);
// trainNetwork.addEdge(atlantaStation, newYorkStation, 800);
// trainNetwork.removeEdge(atlantaStation, newYorkStation);
// trainNetwork.print();

export = Graph;
