class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjancyList = new Map();
    }
    
    // initialze vertex into the adjacancyList without neighbors
    addVertex(vertex) {
        this._adjancyList.set(vertex, []);
    }
 
    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjancyList.has(startVertex) || 
            !this._adjancyList.has(endVertex)
        ) {
            console.log('Vertex Not Found!!!');
        } else {
            // get the neighbours of the start vertex and add to them 
            const adjacencies = this._adjancyList.get(startVertex);
            // add edge with vertex and weight
            adjacencies.push(new Edge(endVertex, weight));
        }
    }

    getNeighbors(vertex) {
        if (this._adjancyList.has(vertex)) {
            return this._adjancyList.get(vertex);
        } else {
            console.log('vertex does not exist!!');
        }
    }

    printAll() {
        // console.log(this._adjancyList.entries());
        for (const [vertex, edge] of this._adjancyList.entries()) {
            // console.log("V ====> ", vertex);
            // console.log("E ====>" , edge);
        }
    }
    size(){
        let size = 0
        for (const [vertex, edge] of this._adjancyList.entries()) {
         size++;
        }
        return size
    }


    bfs(startNode) {
        const queue = []; // Behaviour of the queue: first in first out 
        const vistedNodes = new Set(); // track the nodes that we visited

        queue.push(startNode);
        vistedNodes.add(startNode);

        while (queue.length) {
            const currentNode = queue.shift();

            const neighbors = this.getNeighbors(currentNode);
            
            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if(vistedNodes.has(neighborNode)) {
                    continue;
                } else {
                    vistedNodes.add(neighborNode);
                }
                queue.push(neighborNode);
            }

        }

        console.log({vistedNodes});
        
        return vistedNodes;

    }
    dfs(startNode) {
        const stack = []; // Behaviour of the queue: first in first out 
        const vistedNodes = new Set(); // track the nodes that we visited

        stack.push(startNode);
        

        while (stack.length) {
            const currentNode = stack.pop();

            const neighbors = this.getNeighbors(currentNode);
            
            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if(vistedNodes.has(neighborNode)) {
                    continue;
                } else {
                    vistedNodes.add(neighborNode);
                }
                stack.push(neighborNode);
            }

        }
        vistedNodes.add(startNode);
        console.log({vistedNodes});
        
        return vistedNodes;

    }
    getEdge(arr){
        const cost = 0
        for (let index = 0; index < arr.length-1; index++) {
            for (const [vertex, edge] of this._adjancyList.entries()) {
                if (vertex.value==arr[index]){
                     console.log("E ====>" , edge);
                     let nextCity = '';
                     edge.forEach(element => {
                        console.log("element ====>" , element.vertex.value,element.weight);
                        if (element.vertex.value==arr[index+1]){
                            cost = element.weight;
                        }
                     });
                     if (nextCity == ''){
                        return  ` false , 0 $` 
                     }
                }
         
            }
         
  
            
        }
           return `true , ${cost} $`
  

    }


}


const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(eight, seven);

// console.log(graph);

graph.printAll();
// console.log("==================================================")
// console.log('Neighbors: ', graph.getNeighbors(ten));



// console.log("***********************************************")
graph.bfs(ten);
graph.getEdge([3])