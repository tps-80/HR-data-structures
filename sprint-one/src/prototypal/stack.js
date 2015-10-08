var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.length = 0;
  return obj;
};

stackMethods = {
  size : function(){
    return this.length;
  },
  push : function(value){
    this.length++;

  }
};
