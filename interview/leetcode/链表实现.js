function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode();
};

MyLinkedList.prototype.get = function (index) {
  let temp = this.head;
  if (index < 0 || index > this.size - 1) {
    return -1;
  }
  while (index !== 0) {
    temp = temp.next;
    index--;
  }
  return temp.next.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  this.size++;
  if (index < 0) {
    let newNode = new ListNode(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
  } else {
    let temp = this.head;
    while (index !== 0) {
      temp = temp.next;
      index--;
    }
    let newNode = new ListNode(val);
    newNode.next = temp.next;
    temp.next = newNode;
  }
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.size - 1) {
    return;
  }
  let temp = this.head;
  while (index !== 0) {
    temp = temp.next;
    index--;
  }
  temp.next = temp.next.next;
  this.size--;
};

MyLinkedList.prototype.print = function () {
  res = [];
  let temp = this.head.next;
  while (temp !== null) {
    res.push(temp.val);
    temp = temp.next;
  }
  console.log(res);
};

var obj = new MyLinkedList();
obj.addAtTail(1);
obj.addAtTail(2);
obj.addAtTail(4);
obj.addAtIndex(1, 5);
obj.deleteAtIndex(3);
console.log(obj.size);
obj.print();
