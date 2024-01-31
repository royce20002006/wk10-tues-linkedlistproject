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
        // Add node of val to tail of linked list

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
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
        // Remove node at tail

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
      if (!this.length) return undefined;
      return this.head.value;
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
