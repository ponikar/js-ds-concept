class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    // creating new Node
    // we are going to use Objects to make an linked list
    constructor(value) {
        // creating head
        this.head = {
            prev:null,
            value,
            next:null
        };
        // copying the refrence of head to  tail, since we are creating the head
        this.tail = this.head;
        this.length = 1; // this will be run only at once when object would be created.
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode; // appending node the last linked list  node
        newNode.prev = this.tail; // setting connection both side
        this.tail = newNode; // refrencing newnode as tails
        this.length++;
        return this;
    }
    prepand(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    traverseTo(index) {
        let i = 0;
        let track = this.head;
            while(i < index - 1) {
                track = track.next;
                i++;
            }
        return track;
    }
    insert(value, index) {
        // if(index === 0)
        //     return this.insertAtfirst(value);
        if(index >= this.length) {
            return this.append(value);
        } 
        
        const newNode = new Node(value);
            let leader = this.traverseTo(index);
            let follower = leader.next;
            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = follower;
            follower.prev = newNode;
            console.log(this);
            this.length++;
    }
    insertAtfirst(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

    }
    remove(index) {
        if(index > this.length) return "Out of range"
        let track = this.traverseTo(index);
        let nodeToDelete = track.next; 
        const nextNode = nodeToDelete.next;
        nextNode.prev = track;
        track.next = nextNode;
        nodeToDelete = null; // free memory
        this.length--;
    }
    removeAtfirst() {
        this.head = this.head.next;
        this.head.prev = null;
    }
    printList() {
        let currentNode = this.head;
        let list = [];
            while(currentNode) {
                list.push(currentNode.value);
                currentNode = currentNode.next;
            }
        console.log(list);
    }
    pop() {
        const track = this.traverseTo(this.length);
        track.next = null;
        this.tail = track;
        this.length--;
    }
    
   
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.insert(25, 0);
myLinkedList.remove(0);
console.log(myLinkedList);

console.log(myLinkedList);
myLinkedList.printList();