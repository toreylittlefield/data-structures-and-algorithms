import { testGraph, dijkstras } from './Dijkstras_algorithm';

const shortestPathBetween = () => {};

// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue('A');
const g = testGraph.getVertexByValue('G');
const results = shortestPathBetween(testGraph, a, g);
