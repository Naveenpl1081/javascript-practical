//  class Stack{
//         constructor(){
//             this.stack=[]
//         }
        
//         push(data){
//             this.stack.push(data)
//         }
//         pop(){
//             if(this.isEmpty()){
//                 return "stack is empty"
//             }
            
//             this.stack.pop()
//         }
//         peek(){
//              if(this.isEmpty()){
//                 return "stack is empty"
//             }
//             return this.stack[this.stack.length-1]
//         }
//          isEmpty(){
//               return  this.stack.length===0
//             }
//         printStack(){
//             for(let i=0;i<this.stack.length-1;i++){
//                 console.log(this.stack[i])
//             }
//         }
        
//     }
//     const stack= new Stack()
//     stack.push(100)
//     stack.push(1)
//     stack.push(2)
    
//     stack.printStack()
//     // stack.pop()
//     // stack.pop()
    
//     console.log(stack.peek())
    
    
    // function reverse(s){
    //     let stack=[]
    //     let splitedwords=s.split(" ")
        
    //     for(let i of splitedwords){
    //         stack.push(i)
    //     }
    //     let newstr=""
    //     while(stack.length){
    //         newstr+=stack.pop()+" "
    //     }
    //     return newstr
    // }
    // const s="iam naveen"
    // console.log(reverse(s))
    
    
    
    
    // class Queue{
    //     constructor(){
    //         this.queue=[]
    //     }
    //     Enqueue(data){
    //         this.queue.push(data)
    //     }
        
    //     Dequeue(){
    //         if(this.isEmpty()){
    //             return "overflow"
    //         }
    //         return this.queue.shift()
    //     }
    //     isEmpty(){
    //         return this.queue.length===0
    //     }
        
        
    //     print(){
    //         for(let i=0;i<this.queue.length;i++){
    //            console.log(this.queue[i])
    //         }
    //     }
    // }
    // const myQueue=new Queue()
    // myQueue.Enqueue(1)
    // myQueue.Enqueue(2)
    // myQueue.Enqueue(3)
    
    // myQueue.Dequeue()
    // myQueue.print()

    // class stackusingqueue{
    //     constructor(){
    //         this.q1=[]
    //         this.q2=[]
    //     }
        
    //     push(data){
    //         this.q1.push(data)
    //     }
    //     pop(){
    //          if (this.q1.length === 0) {
    //       return "Stack is empty";
    //     }
    //         while(this.q1.length>1){
    //             this.q2.push(this.q1.shift())
    //         }
    //         const val=this.q1.shift()
       
    //         [this.q1, this.q2] = [this.q2, this.q1]; // Swap the 
    //         return val
    //     }
    //     print(){
    //         for(let i=0;i<this.q1.length;i++){
    //             console.log(this.q1[i])
    //         }
    //     }
    // }
    
    // const sq=new stackusingqueue()
    
    // sq.push(1)
    // sq.push(2)
    // sq.push(3)
    // console.log(sq.pop())
    
    // sq.print()


    // class Stack{
    //     constructor(){
    //         this.stack=[]
    //     }

    //     push(data){
    //         this.stack.push(data)
    //     }
    //     pop(){
    //         if(this.isEmpty()){
    //             return "stack is empty"
    //         }
    //         return this.stack.pop()
    //     }
    //     peek(){
    //         return this.stack[this.stack.length-1]
    //     }
    //     isEmpty(){
    //         return this.stack.length===0
    //     }
    //     size(){
    //         return this.stack.length
    //     }

    //     display(){
    //         for(let i=0;i<this.stack.length;i++){
    //             console.log(this.stack[i])
    //         }
    //     }

    // }
    
    // function reverse(str){
    //     const stack=new Stack()
    //     for(let i=0;i<str.length;i++){
    //         stack.push(str[i])
    //     }
    //     let str1=""
    //     while(stack.size()>0){
    //         str1+=stack.pop()
    //     }
    //     return str1

    // }

    // const str="naveen"
    // console.log(reverse(str))



    // function isValid(s) {
    //     let stack = [];
    //     let map = { ')': '(', '}': '{', ']': '[' };
        
    //     for (let char of s) {
    //         if (char in map) { 
    //             let topElement = stack.length === 0 ? '#' : stack.pop();
    //             if (topElement !== map[char]) {
    //                 return false;
    //             }
    //         } else {
    //             stack.push(char);
    //         }
    //     }
        
    //     return stack.length === 0;
    // }
    
    // console.log(isValid("(){}[]")); // Output: true
    // console.log(isValid("({[)]}")); // Output: false
    // console.log(isValid("{[]}"));   // Output: true
    

    function min(n){
        let stack=[]
        let minn=[]
        stack.push(n)
        if(stack.length===0 || n<minn[minn.length-1]){
            minn.push(n)
        }
        return min.pop()
    }
    const a=[2,4,6]
    console.log(min(a))