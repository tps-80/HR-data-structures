var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    length : 0,
    storage : {}
  };
  
  extend(obj, stackMethods);
  return obj
};

var stackMethods = {
  size : function() {
    return this.length;
  },
  push : function(value) {
    this.length++;
    this.storage[this.length] = value;
  },
  pop : function() {
    if (this.length >0) {
      var temp = this.storage[this.length];
      this.length--;
      delete this.storage[this.length];
    }
    return temp;
  }
};

var extend = function(original, extendobj) {
  for (var attrname in extendobj) 
    { original[attrname] = extendobj[attrname];}
}