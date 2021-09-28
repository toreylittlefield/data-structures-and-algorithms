import { Vertex } from '../../../Graphs/Vertex';
import testGraph from './simpleGraph';

type DepthFirstTraversal = (start: Vertex) => void;

const depthFirstTraversal: DepthFirstTraversal = (start) => {
  console.log(start.data);
  if (start.edges.length) {
    const neighbor = start.edges[0].end;
    console.log(neighbor);
    depthFirstTraversal(neighbor.edges[0]);
  }
};

depthFirstTraversal(testGraph.vertices[0]);
