import { Vertex } from '../../../Graphs/Vertex';
import testGraph from './simpleGraph';

type DepthFirstTraversal = (start: Vertex, callback?: (...arg: any) => void, visitedVertices?: Vertex[]) => void;

const depthFirstTraversal: DepthFirstTraversal = (start, callback = () => {}, visitedVertices = [start]) => {
  //   console.log(start.data);
  callback(start);
  //   if (start.edges.length) {
  start.edges.forEach((edge) => {
    // const neighbor = start.edges[0].end;
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
  //   }
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => {
  console.log(vertex.data);
});
