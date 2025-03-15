
// function quickSort(a){
//     let pivot=a[a.length-1]
//     let left =[]
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
// const a=[5,4,2,6,8,9]
// console.log(quickSort(a))

// class Node{
//     constructor(data){
//         this.data=data
//        this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//     }

//     push(data){
//         const newNode=new Node(data)
//         newNode.next=this.top
//         this.top=newNode
//     }
//     removeAt(index){
//         let current=this.top
//        for(let i=1;i<index;i++){
             
//        }
       
//     }
// }


class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
     
    hash(key){
        let total=0
        for(let i=0;i<key;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }


    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }

    get(key){
        const index=this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hash=new HashTable(5)

hash.set()