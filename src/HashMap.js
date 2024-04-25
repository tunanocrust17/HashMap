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
        this.table[index] = undefined
      }
      
      display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
      }
}

export {HashMap}