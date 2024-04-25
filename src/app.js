import { HashMap } from "./HashMap";
import LinkedList from "./LinkedList";

const newHashMap = new HashMap(16);

newHashMap.set("1234", "dad")
newHashMap.set("12345", "ewan")
newHashMap.set("123456", "daisy")
newHashMap.set("1234567", "dexter")
newHashMap.get("1234")


newHashMap.set("123456901234", "colleen")
newHashMap.display()
newHashMap.get("123456")
newHashMap.has("1234")
newHashMap.has("1348670184")


// const ll = new LinkedList();
// ll.append("test", 11)
// console.log(ll)
// console.log(ll.toString())