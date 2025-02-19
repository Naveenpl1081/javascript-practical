class Stack{
    constructor(){
        this.stack=[]
    }

    push(data){
        return this.stack.push(data)
    }
    pop(){
       return  this.stack.pop()
    }
    size(){
       return this.stack.length
    }
}

function reverse(str){
    const stack=new Stack()
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    let str1=""
    while(stack.size()>0){
        str1+=stack.pop()

    }
    return str1
}
const str="naveen"
console.log(reverse(str))