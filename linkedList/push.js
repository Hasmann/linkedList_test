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
push(value){
        const newNode = new Node(value);
        if(!this.head || !this.tail){
        this.head = newNode;
        this.tail = this.head;
        this.length+=1;
        return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length +=1;
    }

}
 





