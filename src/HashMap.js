import LinkedList from "./LinkedList";

class HashMap {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
        }
     
        return hashCode;
      }

      set(key, value) {
        const index = this.hash(key);
        if(this.table[index]==null){
            const ll = new LinkedList()
            ll.append(key, value)
            this.table[index] = ll;
        } else {
            let ll = this.table[index]
            ll.append(key,value);
        }
        
      }

      get(key){
        const index = this.hash(key);
        let ll = this.table[index];
        console.log(ll.findValue(key))
        ll.findValue(key);
      }

      has(key) {
        const index = this.hash(key);
        let ll = this.table[index];
        console.log(ll.findKey(key))
        ll.findKey(key);
      }

      delete(key){
        const index = this.hash(key);
        let ll = this.table[index];
        if(ll.length === 1){
            this.table[index] = undefined;
            return
         }
        ll.removeKey(key);
      }

      length(){
        let arrayLength = this.size;
        let counter = 0;

        for( let i = 0; i < arrayLength ; i++) {
           if(this.table[i]){
                counter += this.table[i].length;
            }
        }
        return counter
      }
      
      display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
      }

      clear(){
        for(let i = 0; i < this.table.length ; i++ ){
            if(this.table[i]){
                this.table[i]=undefined;
            }
        }
      }

      keys(){
        let keyArray = [];

        for(let i = 0 ; i < this.table.length ; i++ ) {
            if(this.table[i]){
                let tableLL = this.table[i]
                let current = tableLL.head;
                let counter = 1;

                while(counter <= tableLL.length){
                    keyArray.push(current.key)
                    current = current.next;
                    counter++
                }
            }
        }
        return keyArray
      }

      values(){
        let valueArray = [];

        for(let i = 0 ; i < this.table.length ; i++ ) {
            if(this.table[i]){
                let tableLL = this.table[i]
                let current = tableLL.head;
                let counter = 1;

                while(counter <= tableLL.length){
                    valueArray.push(current.value)
                    current = current.next;
                    counter++
                }
            }
        }
        return valueArray
      }

      entries(){
        let entriesArray = [];

        for(let i = 0 ; i < this.table.length ; i++ ) {
            if(this.table[i]){
                let tableLL = this.table[i]
                let current = tableLL.head;
                let counter = 1;

                while(counter <= tableLL.length){
                    entriesArray.push(`[${current.key}, ${current.value}]`)
                    current = current.next;
                    counter++
                }
            }
        }
        return entriesArray
      }
}

export {HashMap}