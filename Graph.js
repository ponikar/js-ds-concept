class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  { 
    if(!this.adjacentList[node]) {
        this.numberOfNodes++;
        return this.adjacentList[node] = [];
    }
  } 
  addEdge(node1, node2) { 
    //undirected Graph 
    const { adjacentList } = this;
    let node1Edges = adjacentList[node1];
    let node2Edges = adjacentList[node2];
    if(node1Edges && node2Edges) {
      if(node1Edges.indexOf(node2) == -1)
           node1Edges.push(node2);
      if(node2Edges.indexOf(node1) == -1)
           node2Edges.push(node1);
    }
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('1','2');
myGraph.addEdge('3','6')
myGraph.addEdge('6', '5')
myGraph.addEdge('6', '1')

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5