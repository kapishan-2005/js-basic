// const today= new Date();
// const formate=today.toLocaleString();
// console.log(formate);
const today= new Date();
const nextYear = today.getFullYear() + 1;
const newYear = new Date(nextYear, 0, 1); 
console.log(newYear);
const diffMs = newYear - today; 
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`Days until New Year: ${diffDays}`);

