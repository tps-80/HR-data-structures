var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(target) {
  if(this._storage.indexOf(target) > -1) {
    return true;
  }
  else {
    return false;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[this._storage.indexOf(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
