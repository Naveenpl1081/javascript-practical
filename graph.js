class Graph {
    constructor() {
        this.adjacency = {}; // Adjacency list
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacency[vertex]) {
            this.adjacency[vertex] = new Set();
        }
    }

    // Add an undirected edge between vertex1 and vertex2
    addEdge(vertex1, vertex2) {
        if (!this.adjacency[vertex1]) {
            this.adjacency[vertex1] = new Set();
        }
        if (!this.adjacency[vertex2]) {
            this.adjacency[vertex2] = new Set();
        }

        this.adjacency[vertex1].add(vertex2);
        this.adjacency[vertex2].add(vertex1);
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacency[vertex1]) {
            this.adjacency[vertex1].delete(vertex2);
        }
        if (this.adjacency[vertex2]) {
            this.adjacency[vertex2].delete(vertex1);
        }
    }

    // Remove a vertex and its edges
    removeVertex(vertex) {
        if (!this.adjacency[vertex]) return; // If vertex doesn't exist, return

        // Remove this vertex from all other vertices' adjacency lists
        for (let neighbor of this.adjacency[vertex]) {
            this.adjacency[neighbor].delete(vertex);
        }

        // Delete the vertex from adjacency list
        delete this.adjacency[vertex];
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        let visited = new Set();
        let queue = [start];

        while (queue.length) {
            let vertex = queue.shift(); // Dequeue from front
            if (!visited.has(vertex)) {
                console.log(vertex); // Process the node
                visited.add(vertex);

                // Add neighbors to queue
                for (let neighbor of this.adjacency[vertex]) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }

    // Display the adjacency list
    display() {
        for (let vertex in this.adjacency) {
            console.log(vertex, "->", [...this.adjacency[vertex]].join(", "));
        }
    }
}

// Create Graph instance
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "D");

console.log("Graph before removing an edge:");
graph.display();

// Remove edge between "A" and "B"
graph.removeEdge("A", "B");

console.log("\nAfter removing edge between 'A' and 'B':");
graph.display();

// Remove vertex "A"
graph.removeVertex("A");

console.log("\nAfter removing vertex 'A':");
graph.display();

// Perform BFS traversal
console.log("\nBFS traversal starting from 'B':");
graph.bfs("B");
