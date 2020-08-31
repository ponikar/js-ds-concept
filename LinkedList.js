class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // creating new Node
    // we are going to use Objects to make an linked list
    constructor(value) {
        // creating head
        this.head = {
            value,
            next:null
        };
        // copying the refrence of head to  tail, since we are creating the head
        this.tail = this.head;
        this.length = 1; // this will be run only at once when object would be created.
    }

    append(value) {
        const newNode = {
            value,
            next:null
        };
        this.tail.next = newNode; // appending node the last linked list  node
        this.tail = newNode; // refrencing newnode as tails
        this.length++;
        return this;
    }
    prepand(value) {
        const newNode = { value, next: null };
        newNode.next = this.head;
        this.head = newNode;
    }
    traverseTo(index) {
        let i = 0;
        index = index - 1;
        let track = this.head;
            while(i !== index) { 
                track = track.next;
                i++;
            }
        return track;
    }
    delFirst() {
        this.head = this.head.next;
    }
    insert(value, index) {
         if(index == 0) {
            return this.prepand(value);
         } 
         if(index >= this.length) {
             console.log("APPENDING");
            return this.append(value);
        } 
        
        const newNode = new Node(value);
            let leader = this.traverseTo(index);
            newNode.next = leader.next;
            leader.next = newNode;
            this.length++;
    }
    remove(index) {
        if(index > this.length) return "Out of range"
        if(index == 0) return this.delFirst();
        let track = this.traverseTo(index);
        let nodeToDelete = track.next; 
        const nextNode = nodeToDelete.next;
        track.next = nextNode;
        nodeToDelete = null; // free memory
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
    reverse() {
        if(!this.head.next) {
            return this.head;
        }

        let first = this.head; // 10
        let second = this.head.next; // 666

            while(second) {
                const third = second.next; //3
                second.next = first; // 52
                first = second; // 10 -> 666;
                second = third; // 666 -> 5
                // [5,666,10,,3,52,50]
            }
            this.head.next = null;
            console.log(first)
            this.head = first;
    }
   
}

const myLinkedList = new LinkedList(10); // 0
myLinkedList.insert(666, 1);
myLinkedList.insert(5, 2);
myLinkedList.insert(52, 3);
myLinkedList.insert(50, 4);
myLinkedList.insert(3,3);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();





