// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
      
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        //0(1)
    }

    addToTail(val) {
       const nn = new DoublyLinkedNode(val);

       if (!this.length) {
        this.head = nn;
        this.tail = nn;
        
       } else {

           nn.prev = this.tail;
           this.tail.next = nn;
           this.tail = nn;
       }
       
       this.length++;
      // 0(1)
    }

    removeFromHead() {
        if(!this.length) return undefined;
        let curr = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.head = curr.next;
            this.head.prev = null;
        }

        this.length--;
        return curr.value;
        //0(1)
    }

    removeFromTail() {
        let current = this.tail;
       if (!this.length) return undefined;
       if (this.length === 1) {
        this.head = null;
        this.tail = this.head;
        
       }
       else {
           this.tail = current.prev;
           this.tail.next = null;

       }
       this.length-- 
       return current.value;

    }

    peekAtHead() {
        return !this.length ? undefined : this.head.value;
      //0(1)
    }

    peekAtTail() {
        return !this.length ? undefined : this.tail.value

        //0(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
