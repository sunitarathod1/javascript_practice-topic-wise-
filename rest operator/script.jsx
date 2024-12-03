//rest parameters are improved ways to handle function parameters
//allowing us to handle more inputs as parameters in function.

// const food1 = "rice";
// const food2 = "dal";
// const food3 = "sabji";
// const food4 = ['a','b','c']

// const openFridge=(...food)=>{
//     console.log(food);
// }
// openFridge(food1,food2,food3,food4);

const sum=(...num)=>{
    console.log(num)
    // console.log(...num);
    let total=0;
    for(let i of num){
      total+= i;
    }
  console.log(total)
}
sum(1,2,3,4,5,6,7,8,9);