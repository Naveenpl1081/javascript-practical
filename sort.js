//bubble sort
// const a=[25,4,7,9,6,4,2,7]

// function bubbleSort(a){
//     let swapped;
//     do{
//         swapped=false
//          for(let i=0;i<a.length-1;i++){
//         if(a[i]>a[i+1]){
//             [a[i],a[i+1]]=[a[i+1],a[i]]
//             swapped=true;
//         }
//     }
//     }while(swapped)
//     return a
   
// }
// console.log(bubbleSort(a))



//insertion sort

// const a=[2,5,4,7,9,5,4,8]

// function insertionSort(a){
//     for(let i=1;i<a.length;i++){
//         let value=a[i]
//         let j=i-1
//         while(j>=0 && a[j]>value){
//             a[j+1]=a[j]
//             j=j-1
//         }
//         a[j+1]=value
//     }return a
// }

// console.log(insertionSort(a))

//quick sort

// function quickSort(a){
//     if(a.length<2){
//         return a
//     }
    
//     let pivot=a[a.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const a=[2,5,4,6,8,5,-9]
// console.log(quickSort(a))

// mergesort
// const a="naveen"


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
//      let leftt=left.split("")
//         let rightt=right.split("")
    
//     while(leftt.length && rightt.length ){
       
       
//         if(leftt[0]<rightt[0]){
//             sorted.push(leftt.shift())
            
//         }else{
//             sorted.push(rightt.shift())
            
//         }
//     }
//     return sorted.concat(leftt,rightt).join("")
// }

// console.log(mergeSort(a))



// const a=[1,5,4,8,4,7,9,3,5,7,5]


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
    
//     while(left.length && right.length ){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
            
//         }else{
//             sorted.push(right.shift())
            
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort(a))



