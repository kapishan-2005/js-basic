// let employee={
//     name:"thuvargan",
//     age: 22,
//     department: "it",
//     address:{
//         city:"jaffna",
//         zip: "40 000"
//     },
//     skills:[
//       "communication",
//       "coding",
//       "leadership"
//     ]
// }
// console.log(employee.address.city);
// console.log(employee["address"]["zip"]);
// //destructure oobject to extract name and department
// const{name,department}=employee;
// console.log(name);
// console.log(department);

// employee.intraduce=function(){
//     console.log(`Hi My Name is ${this.name}.I am working in ${this.department} department`);
// };
// employee.intraduce();

// employee.intraduced= () =>{
//     console.log(`Hi My Name is ${name}.I am working in ${department} department`);
// }
// //loop through skills array
// employee.intraduced();
// employee.skills.forEach(skill=> console.log(skill));

let student=[
    {name: "thuva",scroe:20},
    {name: "sai",scroe:30},
    {name: "roni",scroe:36},
    {name: "abi",scroe:49}
];

// student.forEach(n=> console.log(n.name));
//map method
// const scores= student.map(stu=> stu.scroe);
// console.log(scores);
//filter method

const tofil= student.filter(index=> index.scroe>20);
console.log(tofil);

