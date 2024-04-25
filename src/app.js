import { HashMap } from "./HashMap";
import LinkedList from "./LinkedList";

const newHashMap = new HashMap(16);

newHashMap.set("1234", "dad")
newHashMap.set("12345", "ewan")
newHashMap.set("123456", "daisy")

newHashMap.set("123456901234", "colleen")
newHashMap.display()

const ll = new LinkedList();
ll.append("test", 11)
console.log(ll)
console.log(ll.toString())