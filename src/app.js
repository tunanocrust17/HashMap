import { HashMap } from "./HashMap";
import LinkedList from "./LinkedList";

const newHashMap = new HashMap(16);

newHashMap.set("1234", "dad")
newHashMap.set("12345", "ewan")
newHashMap.set("12334", "mum")
newHashMap.set("123456", "daisy")
newHashMap.set("1234567", "dexter")
newHashMap.get("1234")


newHashMap.set("123456901234", "colleen")
// newHashMap.display()
newHashMap.get("123456")
newHashMap.has("1234")
newHashMap.has("12345")
// newHashMap.delete("123456")
newHashMap.display()
console.log(newHashMap.length())
// newHashMap.clear();
// newHashMap.set("123456901234", "colleen")
// newHashMap.display()
newHashMap.set("093476264", "pip")
newHashMap.display()
console.log(newHashMap.keys())
console.log(newHashMap.values())
console.log(newHashMap.entries())





// const ll = new LinkedList();
// ll.append("test", 11)
// console.log(ll)
// console.log(ll.toString())