var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.max = 0;
  this.dequeueCount = 0;
};

Queue.prototype = {
  constructor : Queue,
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
}