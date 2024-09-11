class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

  reverse(){
      this.temp = this.head;
      this.head = this.tail;
      this.tail = this.temp;
      this.prev = null;
      this.next;
      
      for(let i=0;i<this.length; i++){
          this.next= this.temp.next;
          this.temp.next = this.prev;
          this.prev = this.temp;
          this.temp = this.next;
      }
      return this;
  }

}
 

