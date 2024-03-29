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
        if (!this.length) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.length--;
            return this.head;
        }

        let previus;
        let current = this.head;
        while(current.next) {
            previus = current;
            current = current.next;
            
        }
        previus.next = null;
        this.length--;
        return current;
    }
    // 0(n)

    peekAtHead() {
        if (!this.length) return undefined;
        return this.head.value;
        //0(1)
        
    }

    print() {
        if (this.length) {
            let curr = this.head;
            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
