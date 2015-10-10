var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    if (this.tail) { //this is first time through, no tail
      //this.tail = newNode;
      //this.head = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    else { //first tail add is also a head add (this is case where tail already exists)
      this.head = newNode; //head will have no .next value
      this.tail = newNode;
      //this.tail.next = newNode;
      //this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var temp = this.head;
    this.head = temp.next;
    return temp.value; 
  };

  list.contains = function(target) {
    var containsRecursion = function(node) {
      if (node.value === target) {
        return true;
      } else {
        if (!node.next) {
          return false;
        } else {
          return containsRecursion(node.next);
        }
      }
    }
    return containsRecursion(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */