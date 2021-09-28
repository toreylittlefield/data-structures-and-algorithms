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

// depthFirstTraversal(testGraph.vertices[0], (vertex) => {
//   console.log(vertex.data);
// });

type BreadthFirstTraversal = (start: Vertex) => void;

const breadthFirstTraversal: BreadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue: Vertex[] = [];
  visitQueue.push(start);

  while (visitQueue.length !== 0) {
    const current = visitQueue.shift();
    if (current === undefined) break;
    current.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!visitedVertices.includes(neighbor)) {
        visitQueue.push(neighbor);

        visitedVertices.push(neighbor);
      }
    });
  }
};

breadthFirstTraversal(testGraph.vertices[0]);
