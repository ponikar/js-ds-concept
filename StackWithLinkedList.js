class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // holds the top element
        this.bottom = null;
        this.length = 0;
    }

    peak() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.top) {
            this.top = newNode;
            this.bottom = this.top;
        } else {
            const holderPointer = this.top;
            this.top = newNode;
            this.top.next = holderPointer;
        }
        this.length++;
        return this;
       
    }

    pop() {
        if(this.top === this.bottom) {
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return this;
        
    }
}

const stack = new Stack();
stack.push("Google");
stack.push("Facebook");
stack.push("ADDME");
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peak());

//console.log(stack);