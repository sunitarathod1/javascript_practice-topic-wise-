const fruits = ["apple" ,"banana" , "mango" , "strawberry"];

for( let i=0; i<=fruits.length;i++){
    console.log(fruits[i])
}
console.log("*********************************")

for(fruit of fruits){
    console.log(fruit)
}

console.log("**************************************")
const Person = {
    firstName :"Sunita",
    lastName:"Rathod",
    loc:"bangalore",
    food:"biryani",
}
for(const keys in Person){
    console.log(Person[keys]);
}

//if wants to use for of loop in objects
const Personkeys = Object.keys(Person)
for(const keys of Personkeys){
    console.log(Person[keys]);
}