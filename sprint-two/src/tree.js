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

  var containsRecursion = function(tree) {
    if (tree.value === target) {
      return true;
    } 
    else {
      for (var i =0; i < tree.children.length; i++) {
        return containsRecursion(tree.children[i]);
      }
    }
    return false;
  }
  return containsRecursion(this);
};


var extend = function(original, extendobj) {
  for (var attrname in extendobj) 
    { original[attrname] = extendobj[attrname];}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
