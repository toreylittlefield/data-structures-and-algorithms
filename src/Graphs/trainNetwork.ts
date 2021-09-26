import Graph from './Graphs';

const trainNetwork = new Graph(true, true);

/**
 * Los Angeles
 * San Francisco
 * New York
 * Atlanta
 * Denver
 * Calgary
 */

const laStation = trainNetwork.addVertex('Los Angeles');
const sanFranStation = trainNetwork.addVertex('San Francisco');
const newYorkStation = trainNetwork.addVertex('New York');
const atlantaStation = trainNetwork.addVertex('Atlanta');
const denverStation = trainNetwork.addVertex('Denver');
const calgaryStation = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(sanFranStation, laStation, 400);
trainNetwork.addEdge(laStation, sanFranStation, 400);
trainNetwork.addEdge(newYorkStation, denverStation, 1800);
trainNetwork.addEdge(denverStation, newYorkStation, 1800);
trainNetwork.addEdge(calgaryStation, denverStation, 1000);
trainNetwork.addEdge(denverStation, calgaryStation, 1000);
trainNetwork.addEdge(laStation, atlantaStation, 2100);
trainNetwork.addEdge(atlantaStation, laStation, 2100);

trainNetwork.removeEdge(newYorkStation, denverStation);
trainNetwork.removeEdge(calgaryStation, denverStation);
trainNetwork.removeEdge(denverStation, calgaryStation);
trainNetwork.removeVertex(calgaryStation);

trainNetwork.print();
