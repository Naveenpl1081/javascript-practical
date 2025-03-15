// function fre(str){
//     let map=new Map()
//     for(let i=0;i<str.length;i++){
//         map.set(str[i],(map.get(str[i]) ||0)+1)
//     }
//   for(let [key,value] of map){
//       if(value>=2){
//           return key
//       }
//   }
//   return null
    
// }

// const str="naveen"
// console.log(fre(str))

// function duplicates(a){
//     let map=new Map()
//     for(let value of a){
//         map.set(value,(map.get(value) || 0)+1)
//     }
//     for(let [key,value] of map){
//         if(value>=2){
//             console.log(key)
//         }
//     }
// }
// const a=[1,2,3,4,5,6,7,1,2,3,0]
// duplicates(a)

// function hel(str){
//     return str.replace(/[aeiou]/g,"")
// }
// const str="naveen"
// console.log(hel(str))



// class Stack{
//     constructor(){
//         this.stack=[]
//     }
    
//     push(data){
//         this.stack.push(data)
//     }
//     pop(){
//         if(this.size()===0){
//           console.log("stack is empty")
//         }
//       return this.stack.pop()
//     }
    
//     size(){
//         return this.stack.length;
//     }
//     display(){
//         for(let i=0;i<this.size();i++){
//             console.log(this.stack[i])
//         }
//     }
// }


// function validparam(str){
//     let stack=[]
//   const map={"}":"{",")":"(","}":"{"}
//   for(let char of str){
//       if(char in map){
//           let total=stack.length==0?"#":stack.pop()
//           if(total!==map[char]){
//               return false
//           }
//       }else{
//           stack.push(char)
//       }
//   }
//   return stack.length===0
// }

// const str="{())}"
// console.log(validparam(str))

// class Stack{
//     constructor(){
//         this.stack=[]
//         this.min=[]
//     }
//     push(data){
//         if(this.stack.length==0 || data<this.min[this.min.length-1]){
//             this.min.push(data)
//         }
//         this.stack.push(data)
//     }
    
//     getmin(){
//         if(this.min.length===0)return null
//         return this.min.pop()
//     }
    
// }

// const stack=new Stack()
// stack.push(17)
// stack.push(12)
// stack.push(7)
// console.log(stack.getmin())

// class stackUsingQueue{
//     constructor(){
//         this.q1=[]
//     this.q2=[]
//     }
    
//     push(data){
//         this.q1.push(data)
//     }
//     pop(){
        
//         for(let i=0;i<this.q1.length;i++){
//             this.q2.push(this.q1.shift())
//         }
       
    
//         return this.q1.shift()
//     }
    
// }
// const stack=new stackUsingQueue()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack.pop())



// const a=[5,4,1,8,0,5,3,7,6]
// function bubbleSort(a){
//     let swapped;
//     do{
//         swapped=false
//         for(let i=0;i<a.length-1;i++){
//             if(a[i]>a[i+1]){
//                 [a[i],a[i+1]]=[a[i+1],a[i]]
//                 swapped=true;
//             }
//         }
//     }while(swapped)
//     return a
// }

// console.log(bubbleSort(a))

//best case-o(n)
//average case-o(n2)
//worst case-o(n2)
//-----------------------------------------------


// const a=[5,4,1,8,0,5,3,7,6]
// function insertionSort(a){
//     for(let i=1;i<a.length;i++){
//         let value=a[i]
//         let j=i-1
//         while(a[j]>value){
//             a[j+1]=a[j]
//             j=j-1
//         }
//         a[j+1]=value
//     }
//     return a
// }
// console.log(insertionSort(a))

//best case-o(n)
//average case-o(n2)
//worst case-o(n2)

//----------------------------------------------------

// const a=[5,4,1,8,0,5,3,7,6]
// function quickSort(a){
    
//     if(a.length<1){
//         return a
//     }
//     let pivot=a[a.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<a.length-1;i++){
//         if(pivot<a[i]){
//             right.push(a[i])
//         }else{
//             left.push(a[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(a))

//best case-o(n logn)
//average case-o(n logn)
//worst case-o(n2)


//-------------------------------------------------------

// const a=[5,4,1,8,0,5,3,7,6]
// function mergeSort(a){
//     if(a.length<=1){
//         return a
//     }
    
//     let mid=Math.floor(a.length/2)
//     let left=mergeSort(a.slice(0,mid))
//     let right=mergeSort(a.slice(mid))
//     return merge(left,right)
// }

// function merge(left,right){
//     let sorted=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort(a))


//best case-o(n logn)
//average case-o(n logn)
//worst case-o(n logn)

//------------------------------------------------

// const a="naveen"
// function mergeSort(a){
//     if(a.length<=1){
//         return a
//     }
    
//     let mid=Math.floor(a.length/2)
//     let left=mergeSort(a.slice(0,mid)).split("")
//     let right=mergeSort(a.slice(mid)).split("")
//     return merge(left,right)
// }

// function merge(left,right){
//     let sorted=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return sorted.concat(left,right).join("")
// }

// console.log(mergeSort(a))


//best case-o(n logn)
//average case-o(n logn)
//worst case-o(n logn)