/**
 * 只要修改了对象，返回一个新的对象，旧的对象不会进行改变
 * 
 * Persistent Data Structure
 * 树结构，尽可能用原来的数据结构
 * 结构共享
 */
// const person = {
//   name: 'rzh',
//   age: 18
// }

// const obj = {...person}

// person.name = "whs"

// console.log(obj);

// const { Map, List, fromJS } = require('immutable')
// const info = {
//   name: 'kobe',
//   age: 30,
//   friend: {
//     name: 'james',
//     age: 30
//   }
// }

// const infoIm = Map(info)
// const obj = infoIm
// const newObj = infoIm.set("name", 'why')
// console.log(obj.get("name"));
// console.log(newObj.get("name"));

// const names = ["abc", "asad", "fgr"]
// const namesIm = List(names)
// const arrIm = namesIm.set(0, "why")
// console.log(arrIm.get(0));
// console.log(namesIm.get(0));

// const deep_infoIm = fromJS(info)

const Person = (name) => ({
  name
})

const name = Person("rzh")

console.log(name);
