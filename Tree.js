// New Node
class Node {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

// BINARY tree

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root)  { // if tree is empty
            this.root = newNode;
            return this;
        }
        // let's go further
        let currentNode = this.root;
        while(1) {
            if(newNode.value > currentNode.value) {
                if(!currentNode.right) { // if there is a space
                    currentNode.right = newNode;
                    return this;
                }
                // otherwise keep going
                currentNode = currentNode.right;
            } else {
                if(!currentNode.left) { // if there is no node or space
                    currentNode.left = newNode; 
                    return this;
                }
                // otherwise keep going
                currentNode = currentNode.left;
            }
        }
    }

    lookup(value) {
        if(!this.root) 
            return false;
        let currentNode = this.root;
            while(currentNode) {
                if(currentNode.value < value) {
                    // GO right
                    currentNode = currentNode.right;
                } else if(currentNode.value > value) {
                    // GO LEFT
                    currentNode = currentNode.left;
                } else if(currentNode.value == value) {
                    // return the NODE
                    return currentNode;
                }
            }

            // otherwise 
            return false;
    }

    BFS() {
        if(!this.root)  
            return "Nothing  in the tree";
        
        let list = [];  // this is going to store node's value
        let queue = []; // to maintain the node's refrence so we can use it  later
        let currentNode = this.root; // to keep track on current node starting from root

        queue.push(currentNode);
        while(queue.length > 0) {
            // getting  first element from queue
            currentNode = queue.shift();
            list.push(currentNode.value);
            // if the current node has a left child
            if(currentNode.left) {
                // push the left children
                queue.push(currentNode.left);
            }

            // does it has the right children
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        console.log(list);
        return list;
    }

    BFSwithRecursive(queue, list) {
        // setting up the base case or exit point
        if(queue.length === 0) {
            // there is nothing to visit
            console.log(list);
            return list;    
        }

        // detach the first node (Delete or remove)
        const currentNode = queue.shift();
        list.push(currentNode.value); // push or visit the first node 

        // same as ittrative logic
        if(currentNode.left) {
            // so if there is left child then stand it in queue
            queue.push(currentNode.left);
        }

        if(currentNode.right) {
            // so again if it is having right child queue on it!!!
            queue.push(currentNode.right);
        }

        // always remember to return in Recursive manner
        return this.BFSwithRecursive(queue, list);
    }

    // RLR -> Root, Left, Right
    DFSwithPreOrder(node) {
        console.log(node.value);
        if(node.left) {
            this.DFSwithPreOrder(node.left);
        }
        if(node.right) {
            this.DFSwithPreOrder(node.right);
        }

        return;
    }

    // LRR -> Left, Root, Right
    DFSWithInorder(node) {
        // does it cantain left child
        if(node.left) {
            this.DFSWithInorder(node.left);
        }
        // print the data
        console.log(node.value)
        // does it contain right chid
        if(node.right) {
            this.DFSWithInorder(node.right);
        }
        return;
    }

    // DFS order will be LRR -> Left, Right, Root
    DFSwithPostorder(node) {
        
        // does it contain left child then go to left
        if(node.left) {
            this.DFSWithInorder(node.left);
        }

        // does it contain right child, then go to right
        if(node.right) {
            this.DFSWithInorder(node.right);
        }

        // and finally print the VALUE
        console.log(node.value);

        // EXIT POINT
        return;
    }


    

    // Remove method was pretty complex to do.
    // watch the tutorial again and again
}

const tree = new Tree(); // declare root
tree.insert(1);
tree.insert(3);
tree.insert(2);
tree.insert(0);
tree.insert(5);
tree.insert(-1);
// tree.BFS();
//tree.BFSwithRecursive([tree.root], []);
//tree.DFSwithPreOrder(tree.root);
tree.DFSwithPostorder(tree.root);
//console.log(tree);