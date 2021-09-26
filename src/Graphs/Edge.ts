interface End {
  data: string;
}

class Edge {
  constructor(public start: string, public end: End, public weight: number | null) {}
}

export = Edge;
