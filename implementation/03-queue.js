const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const nn = new SinglyLinkedNode(val);

        if (!this.length) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
            
        }
        this.length++;
        return this.length;

    }

    dequeue() {
        if (!this.length) return null;
        let removed = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = this.head;
            this.length--;
            
        }
        else {
            this.head = this.head.next;
            this.length--;
            
        }
        return removed.value;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
