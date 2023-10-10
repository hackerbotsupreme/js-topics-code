let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }
// adding +1 to every element 
// let numarray= [1,2,3,4,5]
// console.log(numarray)
// numarray.forEach((element,index,array)=>{array[index]=element+1})
// console.log(numarray)

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}