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
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
pop(){
    if(this.length ===0){
        return undefined;
    }
    else{
    this.temp = this.head;
    this.pre;
    if(this.temp.next){
    while (this.temp.next){
        this.pre = this.temp;
        this.temp = this.temp.next;
    }
    this.tail = this.pre;
    this.tail.next =null;
    this.length -=1;
      return this.temp;
    }
     this.head=null;
     this.tail = null;
      this.length -=1;
       return this.temp;
    }
}

}
 

