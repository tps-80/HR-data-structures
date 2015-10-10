

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //insert the key at the index into the hashtable's storage
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;

  var bucket = bucket || [];
  bucket.push(tuple);

  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i= 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i= 0; i < bucket.length; i++) {
    var tuple =  bucket[i];
    if (tuple[0] === k) {
      tuple[1] = null;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


