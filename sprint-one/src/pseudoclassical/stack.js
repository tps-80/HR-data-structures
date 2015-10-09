var Stack = function() {
  this.length = 0;
  this.storage = {};
};

Stack.prototype = {
  constructor : Stack,
  size : function(){
    return this.length;
  },
  push : function(value){
    this.length++;
    this.storage[this.length] = value;
  },
  pop : function() {
    var temp;
    if (this.length > 0) {
      temp = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
    }
    return temp;
  }
};