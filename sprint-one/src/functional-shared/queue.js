var Queue = function() {

  var obj = {
    length : 0,
    max : 0,
    dequeueCount : 0,
    storage : {}
  };
  extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  size : function() {
    return this.length;
  },
  enqueue : function(value) {
    this.length++;
    this.max++;
    this.storage[this.max] = value;
  },
  dequeue : function() {
    if (this.length > 0){
      var temp = this.storage[1 + this.dequeueCount];
      delete this.storage[1 + this.dequeueCount];
      this.length--;
      this.dequeueCount++;
      return temp;
    }
  }
};

var extend = function(original, extendobj) {
  for (var attrname in extendobj) 
    { original[attrname] = extendobj[attrname];}
};