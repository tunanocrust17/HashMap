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

    findKey(key) {

        let current = this.head;
        let counter = 1;

        while (counter <= this.length) {
            if(current.key == key) {
                return true
            }
            current = current.next;
            counter++
        }

        return null
    }


    findValue(key){
        

        let current = this.head;
        let counter = 1

        while(counter <= this.length) {
            if(current.key == key){
                return current.value
            }
            current = current.next;
            counter++
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

    removeKey(key){

        let current = this.head;
        let prev = null;
        let counter = 1;

        while(counter <= this.length){
            if(current.key == key) {
                prev.next = current.next;
                this.length--;
                return
            }
            prev = current;
            current = current.next;
            counter++
        }

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