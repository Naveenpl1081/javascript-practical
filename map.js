// let mymap=new Map()
// mymap.set("name","naveen")
// mymap.set("age",23)
// mymap.set("place","kannur")
// console.log(mymap)

// mymap.forEach((value,key)=>{
//     console.log(key)
// })

// for(let [key,value] of mymap){
//     console.log(value)
// }


// function freq(str){
//     let mymap=new Map()
//     words=str.split("")
//     words.forEach(word => {
//         mymap.set(word, (mymap.get(word) || 0) + 1)
//     });
    
//   for(let [key, value] of mymap){
//     if(value>=2){
//         return key
//     }
//   }
//   return null

// }

// const str="naveen"
// console.log(freq(str))


// const a=[1,2,3,4,5,6,1,2,3]
// function duplicates(a){
//     let b=[]
//     let map=new Map()
//     a.forEach(val=>{
//         map.set(val,(map.get(val)||0)+1)
//     })
    
//     for(let [key,val] of map){
//         if(val>=2){
//             b.push(key)
//         }
//     }
//     return b
// }
// console.log(duplicates(a))


// function lengthOfLongestSubstring(s) {
//     let map = new Map();
//     let left = 0, maxLength = 0;

//     for (let right = 0; right < s.length; right++) {
//         // If the character is repeated, move left pointer to the right of previous occurrence
//         if (map.has(s[right])) {
//             left = Math.max(map.get(s[right]) + 1, left);
//         }

//         map.set(s[right], right); // Store the index of the current character
//         maxLength = Math.max(maxLength, right - left + 1); // Update max length
//     }
//     console.log(map)

//     return maxLength;
// }

// const str = "abbcdabcbb";
// console.log(lengthOfLongestSubstring(str)); // Output: 3 ("abc")



// function removeVowels(){
//     let vowels = new Map();
// vowels.set("a", true);
// vowels.set("e", true);
// vowels.set("i", true);
// vowels.set("o", true);
// vowels.set("u", true);
//     let str1=""

//     for(let char of str){
//         if(!vowels.has(char)){
//             str1+=char
//         }
//     }
//     return str1

// }
// const str="naveen"
// console.log(removeVowels(str))



// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;

//     let map = new Map();

//     for (let char of s) {
//         map.set(char, (map.get(char) || 0) + 1);
//     }
//     for (let char of t) {
//         if (!map.has(char)) {
//             return false;
//         }
       
//     }
//     return true;
// }

// console.log(isAnagram("anagram", "nagaram")); 
// console.log(isAnagram("rat", "car"));



