import { HashMap } from "./HashMap";
import LinkedList from "./LinkedList";

const newHashMap = new HashMap(16);

newHashMap.set("1234", "dad")
newHashMap.set("12345", "buddy")
newHashMap.set("12334", "elf")
newHashMap.set("123456", "santa")
newHashMap.set("1234567", "mom")
newHashMap.get("1234")


newHashMap.set("123456901234", "rudolph")
newHashMap.get("123456")
newHashMap.has("1234")
newHashMap.has("12345")
newHashMap.display()
console.log(newHashMap.length())
newHashMap.set("093476264", "pip")
newHashMap.display()
console.log(newHashMap.keys())
console.log(newHashMap.values())
console.log(newHashMap.entries())
