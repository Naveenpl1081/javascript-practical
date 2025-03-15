// class Person {
//     constructor(name, age) { 
//         this.name = name; // Initialize name
//         this.age = age;   // Initialize age
//     }

//     // Method to display details
//     describe() {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }

// // Creating objects
// const person1 = new Person("Naveen", 25);
// const person2 = new Person("Elon Musk", 52);

// console.log(person1.describe()); // Output: Naveen is 25 years old.
// console.log(person2.describe()); // Output: Elon Musk is 52 years old.




// class Student {
//     constructor(name, rollNumber, marks) {
//         this.name = name;
//         this.rollNumber = rollNumber;
//         this.marks = marks;
//     }

//     isPassed() {
//         return this.marks > 35 ? `${this.name} has passed.` : `${this.name} has failed.`;
//     }
// }

// const student1 = new Student("Naveen", 101, 45);
// const student2 = new Student("Rahul", 102, 30);

// console.log(student1.isPassed()); // Naveen has passed.
// console.log(student2.isPassed()); // Rahul has failed.


// class Employee {
//     constructor(name, salary, experience) {
//         this.name = name;
//         this.salary = salary;
//         this.experience = experience;
//     }

//     getBonus() {
//         if (this.experience > 5) {
//             return `Bonus: ₹${this.salary * 0.10}`;
//         }
//         return "No bonus for less than 5 years of experience.";
//     }
// }

// const emp1 = new Employee("Naveen", 50000, 6);
// const emp2 = new Employee("Rahul", 40000, 3);

// console.log(emp1.getBonus()); // Bonus: ₹5000
// console.log(emp2.getBonus()); // No bonus for less than 5 years of experience.
