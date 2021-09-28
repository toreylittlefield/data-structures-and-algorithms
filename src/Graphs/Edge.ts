interface End {
  data: string;
  edges: Edge[];
}

class Edge {
  constructor(public start: string, public end: End, public weight: number | null) {}
}

export = Edge;
