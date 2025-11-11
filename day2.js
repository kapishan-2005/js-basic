

// number
console.log(Number.MAX_VALUE*2);
// min_value
console.log(Number.MIN_VALUE);
// nun
console.log(Number.POSITIVE_INFINITY);
// (5e-4= 5*10index -4)
console.log(Number.EPSILON);

let num1=5 ;

let customerSpentAmount= [450,80,90,20];
let totalAmountSpent= customerSpentAmount.reduce((prevVal,currentVal) => {
    console.log(prevVal+currentVal)
    return prevVal+currentVal
},0);
console.log(totalAmountSpent);

let namee="saii";
console.log(namee.length);

x= namee.toUpperCase();
console.log(x);

let uname="jeru";
let lname="thuva";

let n =`hello, ${uname}${lname}! welcome to the uki`;
console.log(n);
// charector act
let g="kapishan";
console.log(g.charAt(5));

let foods=["noodels","chicken_rice","briyani","kottu"];
console.log(foods.slice(2));
console.log(foods.slice(2,3));
console.log(foods.slice(2,-1));

let nam="   kapi   ";
console.log(nam);
console.log(nam.trim());
// template literals($)
// string interpolation

let t= 20;
console.log(Boolean(t));

let c=5;
console.log(Boolean(c==8));

let cc=60;
let v=50;
console.log(cc<v);



let cusName= prompt("Enter Your Name");
let price = prompt("Enter the price");


let discount = 17.33; 

let Amount = (price*discount) / 100;
let Total = price - Amount;
console.log("Customer: " + cusName.toUpperCase());
console.log("Original Price: LKR " + price.toFixed(2));
console.log("Discount (" + discount + "%): LKR " + Amount.toFixed(2));
console.log("Total after discount: LKR " + Total.toFixed(2));

alert(
  "Hello " + cusName + "!\n" +
  "Your total after " + discount + "% discount is LKR " + Total.toFixed(2)
);






