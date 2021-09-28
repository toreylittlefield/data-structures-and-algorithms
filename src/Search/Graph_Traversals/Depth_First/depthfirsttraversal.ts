import { Vertex } from '../../../Graphs/Vertex';
import testGraph from './simpleGraph';

type DepthFirstTraversal = (start: Vertex, visitedVertices?: Vertex[]) => void;

const depthFirstTraversal: DepthFirstTraversal = (start, visitedVertices = [start]) => {
  console.log(start.data);
  //   if (start.edges.length) {
  start.edges.forEach((edge) => {
    // const neighbor = start.edges[0].end;
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  });
  //   }
};

depthFirstTraversal(testGraph.vertices[0]);
