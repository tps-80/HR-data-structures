

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.indexOf(node) > -1) {
    return true;
  }
  else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[this.nodes.indexOf(node)];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode].indexOf(toNode) > -1) {
    return true;
  }
  else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [];
  }
  this.edges[fromNode].push(toNode);
  
  if (!this.edges[toNode]) {
    this.edges[toNode] = [];
  }
  this.edges[toNode].push(fromNode);

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeArray = this.edges[fromNode];
  var toNodeArray = this.edges[toNode];
  delete fromNodeArray[fromNodeArray.indexOf(toNode)];
  delete toNodeArray[toNodeArray.indexOf(fromNode)];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i =0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(c)
 contains = O(c)
 removeNode = O(c)
 addEdge = O(c)
 hasEdge = O(c)
 removeEdge = O(c)
 forEachNode = O(n)
 */


