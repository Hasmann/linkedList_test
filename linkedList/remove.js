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
    
  remove (index){
  if (index < 0 || index >= this.length) return undefined;
   if(index ===0){
       return this.shift();
   }
   if(index === this.length-1){
       return this.pop();
   }
   const prev = this.get(index - 1);
   const temp = this.get(index);
   prev.next = temp.next;
   temp.next = null;
   this.length--;
   return temp;
  }
  

}
 
