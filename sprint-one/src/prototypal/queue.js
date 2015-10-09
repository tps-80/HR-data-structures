var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.length = 0;
  obj.max = 0;
  obj.dequeueCount = 0;

  return obj; 
};

var queueMethods = {
  enqueue : function(value) {
    this.length++;
    this.max++;
    this.storage[this.max] = value;
  }, 
  dequeue : function() {
    if (this.length > 0) {
      var temp = this.storage[1 + this.dequeueCount];
      delete this.storage[1 + this.dequeueCount];
      this.dequeueCount++;
      this.length--;
      return temp;
    }
  },
  size : function() {
    return this.length;
  }
};


