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

    // class StackUsingQueue {
    //     constructor() {
    //         this.q1 = [];
    //         this.q2 = [];
    //     }
    
    //     push(data) {
    //         this.q1.push(data);
    //     }
    
    //     pop() {
    //         if (this.q1.length === 0) {
    //             return "Stack is empty";
    //         }
    
    //         // Move elements from q1 to q2 except the last one
    //         while (this.q1.length > 1) {
    //             this.q2.push(this.q1.shift());
    //         }
            
    //         const val = this.q1.shift(); // Pop last element (stack behavior)
    
    //         // Swap q1 and q2
    //         [this.q1, this.q2] = [this.q2, this.q1];
    
    //         return val;
    //     }
    //     top(){
    //         return this.q1.length > 0 ? this.q1[0] : null;
    //     }
    
    //     print() {
    //         if (this.q1.length === 0) {
    //             console.log("Stack is empty");
    //             return;
    //         }
    //         console.log("Stack elements:", ...this.q1);
    //     }
    // }
    
    // // Usage
    // const sq = new StackUsingQueue();
    

    // sq.push(1);
    // sq.push(2);
    // sq.push(3);
    // console.log("top element is",sq.top())
    // console.log("Popped:", sq.pop()); // Should return 3
    
    // sq.print(); // Should print 2 1
    


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
    

    // class Min{
    //     constructor(){
    //         this.stack=[]
    //         this.minn=[]
    //     }

    //     push(data){
    //         if(this.stack.length===0 || data<this.minn[this.minn.length-1]){
    //             this.minn.push(data)
    //         }
    //         this.stack.push(data)
    //     }
       
    //     getmin(){
    //         if (this.minn.length === 0) return null;
    //         return this.minn.pop()
    //     }
    // }
    
    // const stack=new Min()
    // stack.push(5)
    // stack.push(3)
    // console.log(stack.getmin())



// class Stack{
//     constructor(data){
//         this.stack=[]
//     }
//     push(data){
//         this.stack.push(data)
//     }
//     pop(){
//         if(this.stack.length===0){
//             return "empty stack"
//         }
//         return this.stack.pop()
//     }
//     size(){
//         return this.stack.length;
//     }
//     peek(){
//         return this.stack[this.stack.length-1]
//     }
//     print(){
//         for(let i=0;i<this.stack.length;i++){
//             console.log(this.stack[i])
//         }
//     }
// }

// function isvalid(str){
//     const stack=new Stack()
//     const map={")":"(","}":"{","]":"["}
//     for(let char of str){
//         if(char in map){
//             let top = stack.size() === 0 ? "#" : stack.pop();
//             if(top!==map[char]){
//                 return false
//             }
//         }else{
//             stack.push(char)
//         }
//     }
//     return stack.size()===0
// }


// console.log(isvalid("({})"))




// function validparam(a){
    //     const map={"}":"{",")":"(","]":"["}
    //     let stack=[]
    //     for(let i=0;i<a.length;i++){
    //         if(a[i] in map){
    //             total=stack.length===0?"#":stack.pop()
    //             if(total!==map[a[i]]){
    //                 return false
    //             }
    //         }else{
    //           stack.push(a[i])  
    //         }
    //     }
    //     return stack.length===0
    // }
    
    // const a="({{}}))"
    // console.log(validparam(a))

//linked queue
    // class Queue {
    //     constructor(size) {
    //         this.queue = [];
    //         this.size = size;
    //     }
    
    //     enqueue(value) {
    //         if (this.queue.length < this.size) {
    //             this.queue.push(value);
    //         } else {
    //             console.log("Queue is full!");
    //         }
    //     }
    
    //     dequeue() {
    //         if (this.queue.length > 0) {
    //             return this.queue.shift();
    //         } else {
    //             console.log("Queue is empty!");
    //         }
    //     }
    
    //     front() {
    //         return this.queue.length > 0 ? this.queue[0] : null;
    //     }
    
    //     isEmpty() {
    //         return this.queue.length === 0;
    //     }
    // }
    
    // const q = new Queue(5);
    // q.enqueue(10);
    // q.enqueue(20);
    // console.log(q.dequeue()); // 10
    // console.log(q.front());   // 20
    

    //linked stack

    //  class Node{
        //     constructor(data){
        //         this.data=data
        //         this.next=null
        //     }
        // }
        
        // class stack{
        //     constructor(){
        //         this.top=null
        //     }
            
        //     push(data){
        //         const newNode=new Node(data)
        //         newNode.next=this.top
        //         this.top=newNode
        //     }
        //     pop(){
        //         this.top=this.top.next
        //     }
        //     print(){
        //         let current=this.top
        //         while(current){
        //             process.stdout.write(current.data+"->")
        //             current=current.next
        //         }
        //         console.log(null)
        //     }
        // }
        
        // const node=new stack()
        // node.push(1)
        // node.push(2)
        // node.print()



        