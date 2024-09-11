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

  get(index){
      if (index < 0 || index > this.length || !this.head){
          return undefined;
      }
     let indexPoint=0;
      this.temp = this.head;
     while(this.temp.next){
          if(indexPoint === index){
            return this.temp;
        }
        this.temp = this.temp.next;
        indexPoint++;
     }
     return this.temp;
  }

}
 

