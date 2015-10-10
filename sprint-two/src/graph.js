

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {edges: []};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var node = this.nodes[fromNode];
  if (node.edges.indexOf(toNode) > -1) {
    return true;
  } 
  else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodeFrom = this.nodes[fromNode];
  var nodeTo = this.nodes[toNode];
  nodeFrom.edges.push(toNode); 
  nodeTo.edges.push(fromNode); 
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeFrom = this.nodes[fromNode];
  var nodeTo = this.nodes[toNode];
  delete nodeFrom.edges[nodeFrom.edges.indexOf(toNode)];
  delete nodeTo.edges[nodeTo.edges.indexOf(fromNode)];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
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


