let students=[
    {name: "thuva",scroe:85},
    {name: "sai",scroe:30},
    {name: "roni",scroe:36},
    {name: "abi",scroe:49}
];

const totalscore = students.reduce((sum,student)=>sum+student.scroe,0);
const avgscroe = totalscore / students.length;
console.log(avgscroe);
// some ad every method
console.log(students.some(student=> student.scroe >80));
console.log(students.every(student=> student.scroe >80));

const nested =[[1,2],[3,4],[4,5]];
console.log(nested.flat());