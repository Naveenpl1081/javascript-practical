//const a=[1,2,3,4,5,6,7,8];
//console.log(a.reverse());



//const a=[2,3,4,6,7]
//const b=Math.max(...a);
//console.log(b)

// const a=[3,5,2,7,8,6];
// const b=a.map((n) => n*10);
// console.log(b)

// const a=[2,"hello",undefined,8];
// const b=["hello",2];
// const c=a.filter((n) => !b.includes(n));
// console.log(c);

/*const a=[2,4,3,7,9,5,2];
const b=a.filter((n) => n%2==0)
console.log(b)*/

/*const a=[2,4,3,7,9,5,2];
const b=a.reduce((n,b) => n+b)
console.log(b);*/
  
// function findunique(array){
//     return [...new Set(array)]
// }
// const a=[2,4,3,7,9,5,2];
// const b=findunique(a);
// console.log(b);

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };
// const { city, age } = person;
// console.log(city); 

// const a=[9,4,6,2,8];
// const [b,c,...rest]=a;
// console.log(c,b,rest);

// const a=[2,5,6,7,9];
// let max=-Infinity
// for(let i=0;i<a.length;i++){
//   if(a[i]>max){
//     max=a[i]
//   }
// }
// console.log(`the maximum value is ${max}`)

// const array = [5, 1, 8, 2, 6];
// const ass=array.sort((a,b)=>a-b)
// console.log(ass); // Output: [1, 2, 5, 6, 8]
// const descendingArray = array.sort((a, b) => b - a);
// console.log(descendingArray); // Output: [8, 6, 5, 2, 1]

//object

// const fruit = {
//   name: 'Apple',
//   color: 'Red',
//   weight: '200g'
// };

// for (let key in fruit) {
//   console.log(`${key}: ${fruit[key]}`);
// }

// function isprime(num){
//   if(num<=1) return false
// for(let i=2;i<num;i++){
//   if(num%i===0) return false
// }
// return true
// }

// function findprimearray(array){
//   return array.filter(isprime);
// }

// const a=[3,5,6,9,7,6];
// const c =findprimearray(a);

// console.log(c);


// const a=[4,4,5,6,7,1,9,6,4,3,4,6,12,2,16,17];
// const b=a.filter((n) => {
//   if(n<=2) return false
// for(let i=2;i<n;i++){
//   if(n%i===0) return false
// }
// return true
// });
// console.log(b)

// const a=[3,5,6,9,7,6];

// function find(value){
//   for(let i=0;i<a.length;i++){
//     let cmt=0
//     for(let j=2;j<a[i];j++){
//       if(a[i]%j==0){
//         cmt++

//       }
//     }if(cmt==0){
//       console.log(a[i])
//     }
//   }
// }
// find(a)



// const promise=new Promise((resolve,reject) => {
//   resolve("success");
  
// });

// promise.then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error)
// })

/*function sum(num1,num2){
  return new Promise((resolve,reject) => {
    resolve(num1+num2);
  })
}

 sum(5,9).then((value) => {
  console.log(value);
})*/

// let a=3;
// function hello(value){
//   for(let i=2;i<a;i++){
//     if(a%i==0){
//       return false
//     };
    
//   };
//   return true
// }
//  const b=hellol(a);
//  console.log(b)

//  const a=[2,3,5,[9,3,5],6,7];
//  let b=JSON.parse(JSON.stringify(a))
//  b[3][1]=10
 
//  console.log(a);
//  console.log(b);





 /*let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

 let countOccurrences = fruits.reduce((acc, fruit) => {
     acc[fruit] = (acc[fruit] || 0) + 1;
     return acc;
 }, {});
 
 console.log(countOccurrences);
 // Output: { apple: 3, banana: 2, orange: 1 }*/




//  const person={
//   name:"naveen",
//   age:23,
// }
// function a(value){
//   console.log(this.name)
// }
// const b=a.call(person,"hei")


/*let numbers = [5, 12, 8, 3, 7];

let sorted = numbers.sort((a,b) => a-b);

console.log(sorted); // Output: [3, 5, 7, 8, 12]*/


// const obj={
//   name:"Naveen",
//   age:22,
 
// }

// const obj1={
//   name:"Naveen",
//   age:23,
//   address:{
//    city:"kannur",
//    state:"kerala"


//   }
// }

// console.log(obj.name===obj.name)

// console.log(obj.address?.city);

//stop evaluation if the value is undefined or value before ?.


// let num = 123;
//  let str = String(num); // Explicit conversion
//  let str2 = num + "";   // Implicit conversion
// console.log(typeof str2);  // Output: string


// let today = new Date();
// console.log(today);


//currying
// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c;

//     }
//   }
// }
// const d=sum(3)(4)(5)
// console.log(d);

// const person={
//   name:"Naveen",
//   age:23
// }
//  for(let key in person){
//   console.log(`${key}:${person[key]}`);

//  }



//modulaization
// function runTasks() {
//   return new Promise((resolve) => {
//     doTask1(() => {
//       doTask2(() => {
//         doTask3(() => {
//           resolve();
//         });
//       });
//     });
//   });
// }

// runTasks().then(() => {
//   console.log("All tasks complete");
// });


// const array=[1,2,4,1,4,6,8,6];
// const array1=[];

// for(let i=0;i<array.length;i++){
//   let ctr=0;
//   for(let j=0;j<array.length;j++){
//     if(i!=j){
//       if(array[i]==array[j]){
//         ctr++;
//       }
//     }
//   }
//   if(ctr==0){
//     array1.push(array[i])

//   }
// }
// console.log(array1)

// const array=[1,2,4,1,4,6,8,6];
// let b=[...new Set(array)]
// console.log(b);
// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(2); // Duplicate, won't be added
// mySet.add("hello");
// mySet.add({ key: "value" });

// console.log(mySet); // Output: Set { 1, 2, 'hello', { key: 'value' } }

// const a=[4,2,3,4,5,2,6,7,8]
// let findunique=a.filter((item,index,array)=>{
//   return a.indexOf(item)===a.lastIndexOf(item)
// })
// let b=findunique
// console.log(b)


// const a = [1, 2, 3, 1, 2, 5, 5, 8, 9];
// const b=a.reduce((x,c) => {
//   if(c>3){
//     x.push(c);
//   }
//   return x;
// },[])
// console.log(b);

// const a=[1,2,2,3,5,3,7];
// const b=a.filter((n) => {
//   return a.indexOf(n)===a.lastIndexOf(n);
// })
// console.log(b)

// const a=[1,2,2,3,5,3,7];
// const b=a.filter((n) => n>3)
// console.log(b)



// const a=[1,3,5,6,7,2,9,3,4,13];
// const b=a.filter((n)=>{
//   if(n<=2) return false
//   for(let i=2;i<n;i++){
//     if(n%i==0){
//       return false
//     }
//   }
//   return true
// })
// console.log(b);


// const a=[2,4,5,7,8,9,2]
// const b=a.reduce((a,b) => {
//     if(b%2==0){
//         a=a+b
//     }
//     return a
// },0)
// console.log(b)

// const a=[2,3,6,4,8,7];
// const b=a.filter((n) => n%2==0)
// const c=b.reduce((accu,cur) => accu+cur)
// console.log(c)


// function countToTen() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// countToTen();



// function hello(){
//   for(var i=0;i<10;i++){
//     setTimeout(()=>{
//       console.log(i)
//     },i*1000)
    
//   }
  
// }
// hello()

// function a(a,b){
//   return new Promise((resolve,reject) => {
//      if(typeof a=="number" && typeof b=="number")
//      {
//       resolve(a+b)
//      }else
//      {
//          reject("not a number")
//      }
//   })
// }
// async function b(){
//   try{
//   const response=await a(3,"a");
//   console.log(response)
// }
// catch(error){
//   console.log(error)
// }
// }
// b()



// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Change this to `false` to trigger rejection
//   if (success) {
//       resolve("Hello Naveen");
//   } else {
//       reject("Error: Something went wrong");
//   }
// });

// async function handlePromise() {
//   try {
//       const response = await myPromise; // Wait for the promise to resolve
//       console.log(response); // Logs "Hello Naveen" if resolved
//   } catch (error) {
//       console.error(error); // Logs error message if rejected
//   }
// }

// handlePromise();

// const a=[2,4,5,6,7]
// const b=a.reduce((n,m) =>{
//   if(m%2==0){
//     n.push(m)
//   }
//   return n
// },[])


// console.log(b)
//  const promise=new Promise((resolve,reject) => {
//   // resolve(["js","c"]);
//   reject("wrong")
//  })

//  const promise1=new Promise((resolve,reject)=>{
//   resolve(["nn","hh"]);
//  })


//  const allpromise=Promise.race([promise,promise1])

//  allpromise.then((response) =>{
//   console.log(response);
//  })



// Constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Adding a method to the prototype
// Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// // Creating an instance of Person
// const person1 = new Person('Alice', 25);
// person1.sayHello();  // Output: Hello, my name is Alice and I am 25 years old.


// const person={
//   name:"naveen",
//   age:23
// }

// const person1={
//   name1:"naveen pl",
//   age2:26
// }

// const b=Object.assign({},person,person1)
// console.log(b)


// const person={
//     name:"naveen",
//      age:23
//    }
  
//    person.name="hello"
//    console.log(person)
   














// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("hello naveen")
// function hello(cb){
//     setTimeout(()=>{
//     cb (5)
// },1000);
// }
// function hello1(cb){
//     setTimeout(()=>{
//     cb (7)
// },1000);
// }
// function hello2(cb){
//     setTimeout(()=>{
//     cb (8)
// },1000);
// }
// hello((value)=>{
//     hello1((value1)=>{
//         hello2((value2)=>{
//             console.log(value+value1+value2)
//         })
//     })
// });
// console.log("bum")


// console.log("hello")
// function hello(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve ("heloo")
//     },1000)
//     })
    
// }

// hello().then((response)=>{
//     console.log(response)
// })

// function*generate(){
//     for(let i=0;i<=10;i++){
//         yield i;
//     }
// }
// const gen=generate();

// for(let num of gen){
//     console.log(num);
// }

// const a=[1,4,6,8,9,4,3,6,7,5,13,8,9];
// const b=a.filter((n)=>{
//     if(n<=2) return false;
//     for(let i=2; i<n; i++){
//         if(n%i==0){
//             return false;
//         }
//     }return true;
// })
// console.log(b)



// function sum(num,num1){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//         resolve (num+num1);
//     },1000)
//     })
   
// }
// sum(3,5).then((respose)=>{
//     console.log(respose);
// })

// const a=14;
// const vote=(a>=18)?"yes":"no";

// console.log(vote)

// const user={
//     name:"naveen",
//     age:23,
//     address:{
//         place:"kannur",
//         state:"kerala"
//     }
// }
// const details=user?.address?.state;
// console.log(details)


// const person={
//     name:"naveen",
//     age:25
// }
// const secperson={
//     name:"ramu"
// }

// function find(age){
//     console.log(`my name is ${this.name} and my age is ${this.age}`)
// }


// find.call(secperson)

// const obj={
//     name:"naveen",
//     address:{
//         place:"knnur"
//     }
// }

// console.log(obj.age?.address.state)

// const a=10
// const b=a.toString();
// console.log(typeof b)


// function*generate(limit){
// for(let i=0;i<=limit;i++){
//   count=0;
//  if(i>2) {
//    for(let j=2;j<i;j++){
//     if(i%j==0){
//       count++;
//     }
//   }if(count==0){
//     yield i;
//   }
// }
//  }
  
// }
// const gen=generate(19
//   );

// for(let num of gen){
//   console.log(num);
// }


// const array=[2,4,5,6,7,8];
// const b=array.reduce((accu,cur)=>{
//   if(cur>3){
// accu.push(cur)
//   }return accu
// },[]);
// console.log(b)



// function sum(a,b){
//   return new Promise((res,rej)=>{
//     res(a+b);
//   })
// }
// async function b(){
//   try {
//     const response=await sum(2,3);
//   console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
  

// }b()



// class employee{
//   constructor(name,position,salary){
//     this.name=name,
//     this.position=position,
//     this.salary=salary
//   }
//   print(){
//   console.log("salary of "+this.name+"is"+this.salary)
// }

// }
// var e1=new employee("naveen","hr",39999);
// e1.print();



// var text=document.getElementById("txt");
// var btn=document.getElementById("btn");
// var text1=document.getElementsByTagName("h1")[0];

// btn.addEventListener("click",colorchange);


// function colorchange(){
//   text.innerHTML=" naveen";
// }






// const array=[6,4,7,6,8,9,3,13,7,6,4];
// const sum=array.filter((n)=>{
//   if(n<2) return false
 
//   for(let i=2;i<n;i++){
//     if(n%i==0){
//       return false
//     }
    
//   }
//   return true;
  
// })
// console.log(sum)
// const b=sum.reduce((x,n)=>x+n)
// console.log(b)


// setTimeout(()=>{
//   console.log("hhhh")
// },1000)




// try {
//   console.log(rahul)
// } catch (error) {
//   console.log("error")
// }


// setTimeout(()=>{
//   console.log("gggggg")
// })



// const array = [6, 4, 7, 6, 8, 9, 3, 13, 7, 6, 4];

// const primeSum = array.reduce((sum, n) => {
//   if (n < 2) return sum;  // Numbers less than 2 are not prime
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;  // Not prime, stop checking further
//     }
//   }
//   return isPrime ?  n + sum: sum;  // Add to sum if prime
// }, 0);  // Initial sum is 0

// console.log(primeSum);

// let name="naveen"

// let str=""

// for(let i=0;i<name.length;i++){
//     if(i%2==0){
//         str+=name[i].toUpperCase()
//     }else{
//         str+=name[i];
//     }
// }
// console.log(str);


// let arr=[5,9,1,89,32,78];
 
//  let max=-Infinity;
//  let secmax=-Infinity;
//  for(let i=0;i<arr.length;i++){
     
//          if(arr[i]>max){
//             secmax = max;
//             max = arr[i];
//          }else if(arr[i]<max && arr[i]>secmax){
//              secmax=arr[i];
//      }
//  }
// console.log(secmax);




// let arr = [23,76,90,12];



// function digitreversal(num){
    
//     function reversed(num){
//     let reversed = 0;
//     while(num>0){
//         reversed = reversed*10+num%10;
//         num = Math.floor(num/10);
//     }
//     return reversed
//     }
//     for(let i=0;i<num.length;i++){
//         num[i] = reversed(num[i]);
//     }
    
//     let start = 0;
//     let end = num.length-1;
//     while(start<end){
//         [num[start],num[end]] = [num[end],num[start]];
//         start++;
//         end--
//     }
//     return num
// }

// console.log(digitreversal(arr));



// const arr=[2,4,6,7,8,9];

// let start=0;
// let end=arr.length-1

// while(start<end){
//   [arr[start],arr[end]]=[arr[end],arr[start]]
//   start++;
//   end--;
// }
// console.log(arr)

// const arr = [23, 45, 62, 71, 85, 97];

// let start = 0;
// let end = arr.length - 1; // Correct length calculation

// while (start < end) {
//   [arr[start], arr[end]] = [arr[end], arr[start]]; // Corrected swapping syntax
//   start++;
//   end--;
  
// }
// for(let i=0;i<c.length;i++){
// const b=arr.toString();
// const c= parseInt(b.split("").reverse().join(""))
// const n=c[i];
// }
// console.log



// const arr = [23, 45, 62, 71, 85, 97];

// let start=0;
// let end=arr.length-1

// while(start<end){
//   [arr[start],arr[end]]=[arr[end],arr[start]]
//   start++;
//   end--;
// }
// console.log(arr.map((n)=>{
//   const b=parseInt(n.toString().split("").reverse().join(""));
//    return b
// }))



// function sum(a,b){
//   return new Promise((res,rej)=>{
//     res(a+b);
//   })
// }

// async function find(){
//   try {
//     const response=await sum(3,9);
//   console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
  
// }


// find();


// let 






// function printUserInfo({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// const user = {
//   name: 'Alice',
//   age: 30,
//   email: 'alice@example.com'
// };

// printUserInfo(user); // Output: Name: Alice, Age: 30


// const person={
//   name:"naven",
//   age:24
// }

// function use(){
//   console.log(`my name is ${this.name}`)
// }
// use.call(person)

// function a(b){
// if(b==0){
//   throw new Error("kjhguhgu");
// }
// return b
// }
// try {
//   console.log(a(0));
// } catch (error) {
//   console.log("error",error.message)
// }
//-------------------------------------------
// const email=document.getElementById("txt");
// const pass=document.getElementById("pass");
// const sub=document.getElementById("sub");
// const err=document.getElementById("err");
// const pa=document.getElementById("pa");

// sub.addEventListener("click",issubmit);
// let isvalid=true
// function issubmit(e){
//   if(email.value==""  || pass.value==""){
//     //e.preventDefault();
// err.innerHTML="fill email"
//   }else{
//     err.innerHTML="";
//   }
//   if(pass.value.length<=5){
//     //e.preventDefault();
//     pa.innerHTML="password must be 5 letters"
//   }else{
//     pa.innerHTML="";
//   }
//   return isvalid
// }





// function getapi1(cb){
//   setTimeout(()=>{
//     cb (2)
//   })
// }
// function getapi2(cb){
//   setTimeout(()=>{
//     cb (3)
//   })
// }
// getapi1((value)=>{
//   getapi2((value2)=>{
//     console.log(value+value2)
//   })
// })




// let num = [1,2,3,3,4,5];

// [3,4];

// const person1={
//   name:"naveen",
//   age:"23"
// }

// const person2={
//   name1:"nikhil",
//   age1:34
// }

// let ne=Object.assign({},person1,person2)
// console.log(ne)


// function des(name){
//   console.log(name)
// }
// const user={
//   name:"naveen",
//   age:"23"

// }

// des(user);


//......................

// const a="nikhil"
// const b=a.split('').reverse().join('')

// const c=()=>{
//   if(a==b){
//     return true
//   }
//   return false
// }


// console.log(c());




// setTimeout(()=>{
//   console.log("hello")
// },1000)
// const rahul=10
// try {
//   console.log(rahul)
// } catch (error) {
//   console.log("error")
// }









// let arr = [1, 333, 45, 9999, 34];
// const fil=arr.filter((num)=>{
//   const digits=num.toString().split("")
//   const unique=new Set(digits);
//     return digits.length!==unique.size
 
  
// })
// const sum1=fil.reduce((sum,num)=>{
//     return sum+num
//   },0)
// console.log(sum1)

// let set1=new Set()
// set1.add(1)
// .add(3);
// console.log(set1);


// let sentence = "hi naveen how are you";
// let capitalizedSentence = sentence
//   .split(" ")
//   .reduce((accu,word) =>{
//     if(accu<word.length){
//       accu=word.length; 
      
//     }
//     return accu

//   },0)


// console.log(capitalizedSentence); 




//.......................... string
// let text = "JavaScript";

// // Extract "Script" starting from index 4 to the end
// console.log(text.slice(4)); // Output: "Script"

// // Extract "Java" from index 0 to index 4
// console.log(text.slice(0, 4)); // Output: "Java"

// // Extract "Script" with negative indices
// console.log(text.slice(-6)); // Output: "Script"




//................................... array
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// // Get a new array with elements from index 1 to 3 (excludes index 3)
// console.log(fruits.slice(1, 3)); // Output: ["Banana", "Cherry"]

// // Get elements from index 2 to the end
// console.log(fruits.slice(2)); // Output: ["Cherry", "Date", "Elderberry"]

// // Get last two elements with negative index
// console.log(fruits.slice(-2)); // Output: ["Date", "Elderberry"]



//...........................................

// array=[2,5,3,7,7,8]

// function *sum(nums) {
  
//   for(let i=0;i<nums.length;i++){
//     yield nums[i]
//   }
// }

// const generate = sum(array);

// let result = 0;

// for (const val of generate) {
//   result+=val
// }

// console.log("result:",result);


// for(let value of eng){
//   console.log(value)
// }



// const b=[3,4,5,7,8,5,3,]

// function*even(){
//   for(let i=0;i<b.length;i++){
//     if(b[i]%2==0){
//       yield b[i];
//     }
//   }
// }let gen=even();
// for(let value of gen){
//   console.log(value);
// }

// const promise=new Promise((res,rej)=>{
// // res(["js","c"])
// rej("api failed")
// })

// const promise1=new Promise((res,rej)=>{
// res(["phython","web"])
// // rej("api failed")
// })

// const allpromise=Promise.race([promise,promise1])
// allpromise.then((response)=>{
//   console.log(response)
// }).catch((error)=>{
//   console.log(error)
// })

// const str="hi naveen";
// const b=str
// .split(" ")
// .map((val)=>val.charAt(0).toUpperCase()+val.slice(1))
// .join(" ")
// console.log(b);



// const str="naveen"
// const b =str.split("")
// for(let i=0;i<b.length;i++){
//   if(i%2==0){
//    b[i]=b[i].toUpperCase()
//   }
// }

// console.log(b.join(""))


// let person={
//   name:"naveen",
//   age:23
// }
// function hh([state,city]){
//   console.log(`my name is${this.name} and ${state} and ${city}`)
// }
// hh.call(person,['karnataka','shivamogha'])



// const a=[3,4,5,6,3,4,5];
// const b=a.filter((val)=>{
//   return a.indexOf(val)==a.lastIndexOf(val)
// })
// console.log(b)
//******************************************
// let nam="naveen"
// let str=""

// for(let i=0;i<nam.length;i++){
//   if(i%2==0){
//     str+=nam[i].toUpperCase();
//   }else{
//     str+=nam[i]
//   }
// }

// console.log(str)









// function ispalindrome(str){

//   let start=0;
//   let end=str.length-1



// while(start<end){
// if(str[start]!==str[end]){
// return false
// }
// start++;
// end--
// }return true


// }
// console.log(ispalindrome("malayalam"));



// const a=[1,2,3,4,5,6]
// function split(b){
//       const o= b.slice(0,3)
//  const r=  b.slice(3)
//    return [o,r]
// }
// const [o,r]=split(a)
// console.log(o);
// console.log(r);




// const b=[2,4,5,8,7,6,4,1,29,45,2,12]

// let first=-Infinity
// let sec=-Infinity
// let third=-Infinity

// for(let i=0;i<b.length;i++){
//     if(b[i]>first){
//         third=sec
//         sec=first
//         first=b[i]
//     }else if(b[i]>sec && b[i]!==first ){
//         third=sec
//         sec=b[i]
//     }else if(b[i]>third && b[i]!==sec && b[i]!==first){
//         third=b[i]
//     }
// }

// console.log(third)


// function hello(){
//   const b=setInterval(()=>{
//     console.log("hello")
//   },2000)


// setTimeout(()=>{
//   clearInterval(b)
//   console.log("cleared")
// },10000)



// }
// hello();




// let sum = 0;
// let i = 1;

// // Start the summing process after a delay of 2 seconds
// setTimeout(() => {
//     const intervalId = setInterval(() => {
//          sum+=i;
//         console.log(`Sum after adding ${i}: ${sum}`);
//         i++;

//         // Stop the interval when i exceeds 10
//         if (i > 10) {
//             clearInterval(intervalId);
//             console.log("Final Sum:", sum);
//         }
//     }, 1000); // Executes every 1 second
// })





//******************************************
// const a=[2,4,3,6,7,8]
// function find(a,start=0,end = a.length-1){
   
//     if (start >= end) {
//       return a
//     }
//     // console.log(a)
//     [a[start],a[end]]=[a[end],a[start]]
   
//     return find(a, start + 1, end - 1);

// }
// console.log(find(a))

// function longestWord(str, longest = "") {
//   const words = str.split(" ");
//   if (words.length === 0) return longest; // Base case: No more words
//   const currentWord = words[0];
//   if (currentWord.length > longest.length) {
//     longest = currentWord; // Update longest word
//   }
//   return longestWord(words.slice(1).join(" "), longest); // Recursive step
// }

// // Example
// const str = "I love programming in JavaScript";
// console.log(longestWord(str)); // Output: "programming"



//******************************************
// const a=[2,4,3,6,8,9,6]

// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//             [a[i],a[j]]=[a[j],a[i]]
//         }
//     }
// }
// console.log(a)


// const a=[2,3,5,3,6,8]

// function sort(a,index){
//     if(a.length==index) return a
//     let min=index
    
//     for(let i=index+1;i<a.length;i++){
//         if(a[index]>a[i]){
//             [a[index],a[i]]=[a[i],a[index]]
//         }
//     }
    
//     return sort(a,index+1)
// }
// console.log(sort(a,0))
//******************************************
//  const a=[2,3,5,4,9,3,2]

// function find(a){
//   const b=[]
//   const seen=new  Set()
//   for(let num of a){
//     if(seen.has(num)){
//       b.push(num)
//     }
//   seen.add(num)
//   }
//  return b
// }



// console.log(find(a))


//DSA array questions..............................................



// function findMaxMin(arr) {
//   let max = -Infinity, min = Infinity;
//   for (let num of arr) {
//       if (num > max) max = num;
//       if (num < min) min = num;
//   }
//   return { max, min };
// }

// const arr = [3, 5, 1, 8, 2];
// console.log(findMaxMin(arr)); // Output: { max: 8, min: 1 }


// function reverseArray(arr) {
//   let left = 0, right = arr.length - 1;
//   while (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//   }
//   return arr;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]


// function findKthLargestAndSmallest(arr, k) {
//   arr.sort((a, b) => a - b); // Sort in ascending order
//   return { kthSmallest: arr[k - 1], kthLargest: arr[arr.length - k] };
// }

// const arr = [7, 10, 4, 3, 20, 15];
// console.log(findKthLargestAndSmallest(arr, 3)); // Output: { kthSmallest: 7, kthLargest: 10 }



// function sort012(arr) {
//   let low = 0, mid = 0, high = arr.length - 1;
//   while (mid <= high) {
//       if (arr[mid] === 0) {
//           [arr[low], arr[mid]] = [arr[mid], arr[low]];
//           low++;
//           mid++;
//       } else if (arr[mid] === 1) {
//           mid++;
//       } else {
//           [arr[mid], arr[high]] = [arr[high], arr[mid]];
//           high--;
//       }
//   }
//   return arr;
// }

// const arr = [0, 1, 2, 0, 1, 2, 0];
// console.log(sort012(arr)); // Output: [0, 0, 0, 1, 1, 2, 2]



// function moveNegatives(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//           j++;
//       }
//   }
//   return arr;
// }

// const arr = [1, -1, 3, -2, 2];
// console.log(moveNegatives(arr)); // Output: [-1, -2, 3, 1, 2]



// function findMissingNumber(arr, n) {
//   const totalSum = (n * (n + 1)) / 2;
//   const arraySum = arr.reduce((sum, num) => sum + num, 0);
//   return totalSum - arraySum;
// }

// const arr = [1, 2, 4, 5, 6];
// console.log(findMissingNumber(arr, 6)); // Output: 3



// function findDuplicate(arr) {
//   const seen = new Set();
//   for (let num of arr) {
//       if (seen.has(num)) return num;
//       seen.add(num);
//   }
//   return -1; // No duplicate found
// }

// const arr = [1, 3, 4, 2, 2];
// console.log(findDuplicate(arr)); // Output: 2


// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1]) return false;
//   }
//   return true;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(isSorted(arr)); // Output: true



// const a = [2, 4, 3, 7, 6, 4]

// function reverse(a, index = 0,  end = a.length-1){
//     if (index >= end) return a
//     [a[index], a[end]] = [a[end], a[index]]
//     return reverse(a, index + 1, end - 1)
// }

// console.log(reverse(a))
//********************************************* */
// const a = [2, 4, 3, 7, 6, 4];

// function reverse(a, index = 0, end = a.length - 1) {
//     if (index >= end) return a; 
//     [a[index], a[end]] = [a[end], a[index]]; 
//     return reverse(a, index + 1, end - 1); 
// }

// console.log(reverse(a)); 

//********************************************* */

// const a=[1,2,3,5,3,4,2,1]

// function pali(a,start=0,end=a.length-1){
//     if(start>=end) return true
//     if(a[start]!==a[end])return false
    
//     return pali(a,start+1,end-1)
// }

// console.log(pali(a))





//  const a=[1,2,3,[5,3],4,2,1]
 
//  function flat(a){
//      if(a.length==0)return []
//      let first = Array.isArray(a[0]) ? flat(a[0]) : [a[0]]; 
//      let sec=flat(a.slice(1))
//      return [...first,...sec]
//  }

// console.log(flat(a))


//******************************************
// const str="naveen"

// function rev(str,end,fresh){
//     if(end<0){
//         return fresh
//     }
//     fresh+=str[end]
//     return rev(str,end-1,fresh)
// }
// console.log(rev(str,str.length-1,""))


//******************************************
// const str="malayalam"

// function check(str,start,end){
//     if(str[start]!==str[end])return false
//     if(start>end) return true
//     return check(str,start+1,end-1)
// }

// console.log(check(str,0,str.length-1))



// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 45 },
//     { name: 'Mary', age: 30 },
//     { name: 'Tom', age: 50 }
//   ];

//   const smallest=Math.max(...people.map(people=>people.age))
// console.log(smallest);

// const a=[1,3,5,7,9]
// function binarySearch(a,target){
//     let left=0
//     let right=a.length-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(a[mid]==target) return mid
//         else if(a[mid]<target){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
// }
// console.log(binarySearch(a,5))




// function missingNumber(nums) {
//     let left = 0, right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === mid) left = mid + 1;
//         else right = mid - 1;
//     }
//     return left;
// }

// console.log(missingNumber([0,1,2,3,5])); // Output: 4
// console.log(missingNumber([0,1,3,4,5])); // Output: 2


// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//           return i;
//       }
//   }
//   return -1; 
// }

// let arr = [10, 25, 30, 45, 50];
// let target = 500;
// let result = linearSearch(arr, target);

// console.log(result !== -1 ? `Element found at index ${result}` : "Element not found");



// function fac(n){
//   if(n==0 || n==1) return 1
//   return n*fac(n-1)
// }

// console.log(fac(5))


// function pali(a,start,end){
//   if(start>end){
//     return true
//   }
//   if(a[start]!==a[end]){
//     return false
//   }
//   return pali(a,start+1,end-1)
// }
// const a="malayalamm"
// console.log(pali(a,0,a.length-1))


// function rev(str,end,fre){
//   if(0>end)return fre
//   fre+=str[end]
  
//   return rev(str,end-1,fre)
// }
// const str="malayalammm"
// console.log(rev(str,str.length-1,""))


// function binarySearch(arr, left, right, target) {
//     if (left > right) {
//         return -1; // Base case: target not found
//     }

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//         return mid; // Target found
//     } else if (arr[mid] > target) {
//         return binarySearch(arr, left, mid - 1, target); // Search in the left half
//     } else {
//         return binarySearch(arr, mid + 1, right, target); // Search in the right half
//     }
// }

// // Example usage:
// const arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
// const target = 23;

// console.log(binarySearch(arr, 0, arr.length - 1, target))


// function binary(a,left,right,target){
//     if(left>right){
//         return -1
//     }
//     let mid=Math.floor((left+right)/2)

//     if(a[mid]===target){
//         return mid
//     }else if(a[mid]>target){
//         return binary(a,left,mid-1,target)
//     }else{
//         return binary(a,mid+1,right,target)
//     }

    
// }
// const a=[1,2,3,4,5,6,7,8,9]
// console.log(binary(a,0,a.length-1,10))

// function binary(a,target){
//     let left=0
//     let right=a.length-1

    
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//     if(a[mid]==target){
//         return mid
//     }
//     else if(a[mid]>target){
//         right=mid-1
//     }else{
//         left=mid+1
//     } 
     
// }
// }
// const a=[1,2,3,4,5,6,7]
// console.log(binary(a,5))

//*********************************************************** */
// const a=["a","b","c","d","b","c"]

// function dup(a,index,seen,b){
//     if(a.length<index){
//         return Array.from(b)
//     }
//     if(seen.has(a[index])){
//         b.push(a[index])
//     }else{
//         seen.add(a[index])
//     }
//     return dup(a,index+1,seen,b)
// }
// console.log (dup(a,0,new Set(),[]))


// const a=[1,3,5,7,5,4,7,9]
// const b=[1,4,7,5,9,8]

// function common(a,b,left,right,arr){
    
//     if(a.length<=left){
//         return arr
//     }
    
    
 
//     if(a[left]===b[right]){
//         arr.push(a[left])
       
//     }
//       if(b.length>=right){
//         return common(a,b,left,right+1,arr)
//     }
//      return common(a,b,left+1,0,arr)
    
  
// }
// const c=common(a,b,0,0,[])
// console.log(new Set(c))


// const str = "iam naveen";

// function removeVowels(s, index = 0, result = "") {
//     if (index >= s.length) {
//         console.log(s.length)
//         return result; // Base case: return the final result when the end of the string is reached
//     }

//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     console.log(vowels)
    
//     if (!vowels.has(s[index])) {
//         result += s[index]; // Add non-vowel characters to the result
//     }

//     return removeVowels(s, index + 1, result); // Recursive call to the next character
// }

// console.log(removeVowels(str)); // Output: "m nvn"


// const name="naveen"
// function dup(name,index,seen,str){
//     if(name.length<=index){
//         return str
//     }
    
    
//     if(seen.has(name[index])){
//         str+=name[index]
//     }else{
//         seen.add(name[index])
//     }
//     return dup(name,index+1,seen,str)
    
// }
// console.log(dup(name,0,new Set(),""))

// const a=[{name:"naveen",
//     age:23
// },{name:"alen",
//     age:24
// }]

// a.forEach((val)=>{
//     console.log(val.name)
// })

// const str="hello world"
// function rev(str,index,str2){
//     const a=str.split(" ")
//   if(0>index){
//       return str2
//   }
//     str2 += a[index]+" "
//     return rev(str,index-1,str2)
   
// }


// console.log(rev(str,a.length-1,""))



// const str="iam coming from keralaa"

// function longest(str,str2){
//     const a=str.split(" ")
//     for(let i=0;i<a.length;i++){
//         if(a[i].length>str2.length){
//             str2=a[i]
//         }
//     }return str2
// }


// console.log(longest(str,""))

// var isThree = function(n) {
// let count=0
//     for(let i=1;i<=n;i++){
//         
//         if(n%i===0){
//             count++
//         }
//     }
//     if(===3){
//         return true
//     }
//     return false
// };
// console.log(isThree(6))


// var commonFactors = function(a, b) {
    
//   let arr=[]
//   for(let i=1;i<a;i++){
//       if(a%i===0){
          
//           arr.push(i)
//       }
//   }
//   for(let j=1;j<a;j++){
//       if(b%j===0 && !arr.includes(j)){
//          console.log(j)
//           arr.push(j)
//       }
//   }
//    const count=arr.length
//   return count
// };

// const a=25,b=30
// console.log(commonFactors(a,b))





// function fibonacci(n,index, fib=[0,1]){

//   if(fib.length>=n){
//     const sum=fib.reduce((accu,curr)=>accu+curr)
//     return[fib,sum]
//   }
//   let neww=fib[index]+fib[index+1]
  
//  fib.push(neww)
//  return fibonacci(n,index+1,fib)

// }
// console.log(fibonacci(5,0))


// const a=[1,2,3,4,5,6]

// function sum(a,index){
//   if(a.length<=index){
//     return 0
//   }
//   return a[index]+sum(a,index+1)
// }
// console.log(sum(a,0))



// function flattenArray(arr, index = 0, result = []) {
//   if (index >= arr.length) {
//       return result; // Base case: return the flattened array
//   }

//   if (Array.isArray(arr[index])) {
//       // If element is an array, recursively flatten it
//       flattenArray(arr[index], 0, result);
//   } else {
//       // If element is not an array, push it to the result
//       result[result.length] = arr[index]; 
   
//       // Manual push
//   }

//   return flattenArray(arr, index + 1, result); // Move to the next element
// }

// const a = [1, 2, 3, [3, 5], [6, 7, 4]];
// console.log(flattenArray(a)); 
// // Output: [1, 2, 3, 3, 5, 6, 7, 4]


// const str="naveen"
// function cap(str,index,neww){
// if(str.length<=index){
//   return neww
// }

//   if(index%2===0){
//     neww+=str[index].toUpperCase()
//   }else{
//     neww+=str[index]
//   }
// return cap(str,index+1,neww)

// }
// console.log(cap(str,0,""))




// let a = ["a","b","c","d","a","b"];


// function findDuplicates(a,index){
//    if(index===a.length){
//        return;
//    }
   
//   for(let i=index+1;i<a.length;i++){
//       if(a[index]===a[i]){
//           console.log(a[index]);
//           break
//       }
//   }
   
//    return findDuplicates(a,index+1)
// }


// findDuplicates(a,0);


// const a=[1,2,3,4,6,7,8,3,4]

// function findDuplicates(a,index,seen,arr){
//   if(index===a.length){
//     return arr
//   }

//   if(seen.has(a[index])){
//     arr.push(a[index])

//   }else{
//     seen.add(a[index])
//   }
//   return findDuplicates(a,index+1,seen,arr)
// }
// console.log(findDuplicates(a,0,new Set(),[])


// const a=121
// let b=a.toString().split("")
// function pali(a,start,end){


// if(b[start]!==b[end]){
// return false
// }
// if(start>=end){
//   return true
// }
// return pali(a,start+1,end-1)

// }

// console.log(pali(a,0,b.length-1))



// let a = ["a","b","c","d","a","b"];


// const a=[1,2,3,4,6,5,8,9,13]




// function isPrime(num){
//   if(2>num) return false
//   for(let i=2;i<num;i++){
//     if(num%i===0){
//       return false
//     }
//   }return true
// }
// function findprime(a,index,result){

//   if(index===a.length){
//     return result
//   }
//   if(isPrime(a[index])){
//     result.push(a[index])
//   }
//   return findprime(a,index+1,result)
// }
// console.log(findprime(a,0,[]))


// const a=[1,2,3,4,5]

// function fac(a,n){
// if(n===0){
//   return 0
// }
//   return n+fac(a,n-1)
// }
// console.log(fac(a,5))


// function isPrime(num){
//   if(num<2)return false
//   for(let i=2;i<num;i++){
//     if(num%i===0){
//       return false
//     }
//   }return true
// }


// function findPrime(a,index,result){

//   if(a.length===index){
//     return result
//   }
//   if(isPrime(a[index])){
//     result.push(a[index])
//   }
//   return findPrime(a,index+1,result)
// }
// const a=[1,2,3,4,5,6,7,8,9]
// console.log(findPrime(a,0,[]))



// function fibonacci(n,left,right,fib){

//   if(right>=n){
//     return fib
//   }
//   fib.push(fib[left]+fib[right])
//   return fibonacci(n,left+1,right+1,fib)
// }
// console.log(fibonacci(5,0,1,[0,1]))


// const a=[1,2,3,4,5,6,7,8,9]
// const b=[1,2,3,43,56,34,23,56,89,34]

// function findCommon(a,b,top,bottom,common){
// if(top===a.length){
//   return !common? common:"no values";
// }

//   if(a[top]===b[bottom]){
//     common.push(a[top])
//   }
//   if(bottom<b.length){
//     return findCommon(a,b,top,bottom+1,common)
//   }else{
//     return findCommon(a,b,top+1,0,common)
//   }
// }

// console.log(findCommon(a,b,0,0,[]))



// function fibonacci(n){
//   if(n===1){
//   return 1
// }
// if(n<=0)return 0

//   return fibonacci(n-1)+fibonacci(n-2)
  

// }
// console.log(fibonacci(6))


// const a=[1,2,3,4,5,6,7,8]

// function secsmall(a,index,fsmall=Infinity,ssmall=Infinity){
//     if(a.length===index){
//         return ssmall
//     }
//     if(fsmall>a[index]){
//         ssmall=fsmall
//         fsmall=a[index]
//     }else if(ssmall>a[index] ){
//         ssmall=a[index]
//     }
//     return secsmall(a,index+1,fsmall,ssmall)
// }
// console.log(secsmall(a,0))

// const a=[12,46,46,89,47,36]

// function reverse(a,index,res){
// if(index<0){
//   return res
// }

//   res.push(+a[index].toString().split("").reverse().join(""))
//   return reverse(a,index-1,res)
// }

// console.log(reverse(a,a.length-1,[]))


// const a=1213

// function pali(a,left,right){


 
  
// if(left=>right){
//   return true
// }
//   if(a[left]!==a[right]){
//     return false

//   }
//   return pali(a,left+1,right-1)
// }
// const str=a.toString().split("").map(Number)

// console.log(pali(a,0,str.length-1))



// const a=[2,4,3,5,6,8,5,3]
// const b=[2,5,4,9,8,13,45,98,67]

// function smallest(a,b,top,bottom,result){
//   if(a.length<=top){
//     return new Set(result)
//   }

//   if(a[top]===b[bottom]){
//     result.push(a[top])
//   }
//   if(b.length>bottom){
//     return smallest(a,b,top,bottom+1,result)
//   }
//   return smallest(a,b,top+1,0,result)

// }
// console.log([...smallest(a,b,0,0,[])])


// const a=[6,23,5,4,2,7,9,7,4,3]


// function removeEven(a){
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2===0){
//             a.splice(i,1)
//             i--
//         }
//     }
//     return a
// }

// console.log(removeEven(a))