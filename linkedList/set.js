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
 
set(index, value){
   
   if(index <0 || index> this.length || !this.head){
       return false;
   } 
   
   this.temp = this.get(index);
   if(!this.temp){
       return false;
   }
   this.temp.value = value;
   return true;

}

}
 

