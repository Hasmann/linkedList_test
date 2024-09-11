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

 shift(){
     
     this.temp = this.head;
     if(!this.head || !this.tail){
         return null;
     }
     if(!this.head.next){
         this.head= null;
         this.tail = null;
     }
     else{
        this.head = this.temp.next;
     }
     
     this.length-=1;
     return this.temp;
 }

}
 
