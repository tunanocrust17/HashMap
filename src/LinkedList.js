class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(key, value) {
        if(this.head == null) {
            const newNode = new Node( key, value, this.head);
            this.head = newNode;
            this.length++
        } else {
            let current = this.head;
            while (current.next){
                current = current.next
            }
            const newNode = new Node (key, value, null)
            current.next = newNode;
            this.length++
        }

    }

    toString() {
        let current = this.head;
        let counter = 1;
        let linkedListString = "Head -> ";

        while(counter <= this.length) {
            linkedListString = linkedListString.concat( `The key is ${current.key} and the value is (${current.value}) -> ` )
            current = current.next;
            counter++
        }

        linkedListString = linkedListString.concat(" null")
        return linkedListString;
    }
}

class Node {
    constructor(key, value, next) {
        this.key = key
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList;