var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var isFound = false;
  var containsRecursion = function(tree) {
    if (tree.value === target) {
      isFound = true;
    } 
    else {
      for (var i =0; i < tree.children.length; i++) {
        containsRecursion(tree.children[i]);
      }
    }
  }
  containsRecursion(this);
  return isFound;
};


var extend = function(original, extendobj) {
  for (var attrname in extendobj) 
    { original[attrname] = extendobj[attrname];}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
