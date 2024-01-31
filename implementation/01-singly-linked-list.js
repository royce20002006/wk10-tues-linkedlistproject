// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        /
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;

        this.length ++;

        return this;

        //O(1)

    }

    addToTail(val) {

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length ++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length ++;

        return this;

        //O(n)
    }

    removeFromHead() {
        if (!this.head) {
            return undefined;
        }

        let curr = this.head;
        this.head = curr.next;
        this.length --;

        return curr;


        //O(1)
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
