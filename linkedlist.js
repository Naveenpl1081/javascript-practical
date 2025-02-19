// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//     }

//     addFirst(data){
//         const newNode=new Node(data)
//         newNode.next=this.head
//         this.head=newNode
//     }
//     addLast(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             newNode.next=this.head
//             this.head=newNode
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//         newNode.next=null
//     }
//     size(){
//         let count=0
//         let current=this.head
//         while(current.next){
//             count++
//             current=current.next
//         }
//         return count
//     }
   

//     addAt(data,index){
//         if(index<0 || index>this.size()){
//             console.log("wrong index")
//             return
//         }
//         const newNode=new Node(data)
//         if(index===0){
//             newNode.next=this.head
//             this.head=newNode
//             return
//         }
//         let current=this.head
//         for(let i=0;i<index-1;i++){
//             currnt=current.next
//         }
//         newNode.next=current.next
//         current.next=newNode
//     }

//     removeTop(){
//         this.head=this.head.next
//     }
//     removeLast(){
//         let current=this.head
//         while(current.next.next){
//             current=current.next
//         }
//         current.next=null

//     }
//     removeAt(index){
//         let current=this.head
//         for(let i=0;i<index-1;i++){
//             current=current.next
//         }
//         current.next=current.next.next

//     }

// reverse() {
//     let prev = null;
//     let current = this.head;
//     while (current) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     this.head = prev;
// }

// sum(){ 
//             let current=this.head 
//             while(current.next.next.next){ 
//                 current=current.next 
//             }
//             let sum=current.data+current.next.data+current.next.next.data
//             console.log("Sum of last three nodes:", sum);
//             return sum
//         }

//     odd(){
//         let current=this.head
//         while(current.next){
//             current=current.next
//             if(current.data%2==0){
//                 current.data=1

//             }
            
//         }

//     }

//     printList(){
//         let current=this.head
//         while(current){
//             process.stdout.write(current.data +"->")
//             current=current.next
//         }
//         console.log("null")
//     }
// }
// const list=new linkedList()


// list.addFirst(10)
// list.addFirst(20)
// list.addLast(30)
// list.addAt(15,1)
// // list.removeTop()
// // list.removeLast()
// list.removeAt(1)
// list.printList()

// // Test the LinkedList


//.........................................
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null

//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//     }

//     addFirst(data){
//         const newNode= new Node(data)
      
//         newNode.next=this.head
//         this.head=newNode
//     }

//     sum(){ 
//         let current=this.head 
//         while(current.next.next.next){ 
//             current=current.next 
//         }
//         let sum=current.data+current.next.data+current.next.next.data
//         console.log("Sum of last three nodes:", sum);
//         return sum
//     }
//     removeLast(){
//         let current=this.head 
//         while(current.next.next){
//             current = current.next 
        
//         }
//         current.next = null
//     }

//     removeAt(index){
//         let current=this.head
//         for(let i=0;i<index-1;i++){
//             current=current.next
//         }
//         current.next=current.next.next

//     }
//     odd(){
//         let current=this.head
//         while(current.next){
//             current=current.next
//             if(current.data%2==0){
//                 current.data=1

//             }
            
//         }

//     }


//     printList() {
//                 let current = this.head;
//                 while (current) {
//                     process.stdout.write(current.data + " -> ");
//                     current = current.next;
//                 }
//                 console.log("null");
//             }
// }
// const list = new linkedList();
// list.addFirst(60);
// list.addFirst(23);
// list.addFirst(3);
// // list.addFirst(40);
// list.addFirst(5);
// list.removeLast();
// list.removeAt(2);
// list.odd()



// list.printList();


//...........................
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//         this.prev=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//     }

//     addFirst(data){
//         const newNode=new Node(data)
//         newNode.next=this.head
//           if (this.head !== null) {
//             console.log("hello")
//             this.head.prev = newNode;
//         }
//         this.head=newNode
//     }
//     addLast(data){
//         const newNode=new Node(data)
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//         newNode.prev=current
//         newNode.next=null

//     }
//     addAt(data,index){
//         const newNode=new Node(data)
//         let current =this.head
//         for(let i=1;i<index-1;i++){
//             current=current.next
//         }
//         newNode.next=current.next
//         current.next=newNode
//         newNode.prev=current
//         current.next.prev=newNode
//     }
//     removeTop(){
//         this.head=this.head.next
//         if(this.head){
//             this.head.prev=null
//         }
//     }
//     removeLast(){
//         let current=this.head
//         while(current.next.next){
//             current=current.next
//         }
//         current.next=null
//     }
//     removeAt(index){
//         let current =this.head
//         for(let i=0;i<index-1;i++){
//             current=current.next
//         }
//         current.next.next.prev=current
//         current.next=current.next.next
       

//     }
//     reverse(){
//         let current = this.head;
//     let temp = null;

//     while (current) {
        
//         temp = current.prev;
//         current.prev = current.next;
//         current.next = temp;
//         current = current.prev;
//     }
//     if (temp !== null) {
//         this.head = temp.prev;
//     }
//     }


//      printList() {
//                 let current = this.head;
//                 while (current) {
//                     process.stdout.write(current.data + " -> ");
//                     current = current.next;
//                 }
//                 console.log("null");
//             }
// }
// const list = new linkedList();
// list.addFirst(60);
// // list.addFirst(23);
// // list.addFirst(3);
// // list.addLast(89)
// // list.addLast(100)
// // list.addAt(14,3)
// // list.removeTop()
// // list.removeLast()
// // list.removeAt(3)
// // list.reverse()
// list.printList();




