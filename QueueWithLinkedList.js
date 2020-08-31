class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        // when you have only one value
        if(!this.first) {
            console.log("1 NODE");
            this.first = this.last = newNode;

        } else {
                // inseerting value from last node
               this.last.next = newNode;
               this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.first)
            return null;
        if(this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }       
}

const queue = new Queue(); // gonna create two pointers

queue.enqueue(29);
console.log(queue.enqueue("Joey"));

//console.log(queue.dequeue());
//console.log(queue.enqueue(29));