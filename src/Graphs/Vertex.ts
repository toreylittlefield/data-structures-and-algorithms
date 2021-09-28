// import Edge from './Edge';

export interface VertexShape {
  data: string;
  edges: Edge[];
  addEdge: (vertex: Vertex, weight: null | number) => void;
  removeEdge: (vertex: Vertex) => void;
  print: () => void;
}

export class Vertex implements VertexShape {
  edges: Edge[];
  constructor(public data: string) {
    this.edges = [];
  }

  addEdge(vertex: Vertex, weight: null | number = null) {
    if (vertex instanceof Vertex === true) {
      const edge = new Edge(this.data, vertex, weight);
      this.edges.push(edge);
    } else {
      throw new Error('Not an instance of Vertex');
    }
  }

  removeEdge(vertex: Vertex) {
    this.edges = this.edges.filter((edge: Edge) => edge.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

interface End extends VertexShape {
  data: string;
  edges: Edge[];
}

class Edge extends Vertex {
  constructor(public start: string, public end: End, public weight: number | null) {
    super(end.data);
  }
}

// const v1 = new Vertex('first');
// const v2 = new Vertex('second');
// v1.addEdge(v2);
// v1.print();
