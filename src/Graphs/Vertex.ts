import Edge from './Edge';

interface VertexShape {
  print: () => void;
  data: string;
  edges: Edge[];
}

class Vertex implements VertexShape {
  edges: Edge[];
  constructor(public data: string) {
    this.edges = [];
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

export = Vertex;
