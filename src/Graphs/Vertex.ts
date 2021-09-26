import Edge from './Edge';

interface VertexShape {
  data: string;
  edges: Edge[];
  addEdge: (vertex: Vertex) => void;
  print: () => void;
}

class Vertex implements VertexShape {
  edges: Edge[];
  constructor(public data: string) {
    this.edges = [];
  }

  addEdge(vertex: Vertex) {
    if (vertex instanceof Vertex === true) {
      const edge = new Edge(this.data, vertex, null);
      this.edges.push(edge);
    } else {
      throw new Error('Not an instance of Vertex');
    }
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

// const v1 = new Vertex('first');
// const v2 = new Vertex('second');
// v1.addEdge(v2);
// v1.print();

export = Vertex;
