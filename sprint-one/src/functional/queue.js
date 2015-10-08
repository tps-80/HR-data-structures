var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var max = 0;
  var dequeueCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    length++;
    max++;
    storage[max] = value;
  };

  someInstance.dequeue = function() {
    if(length > 0) { 
      var temp = storage[1 + dequeueCount];
      delete storage[1 + dequeueCount];
      dequeueCount++;
      length--;
      return temp;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
