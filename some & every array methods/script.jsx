// .some() -> it returns true if it finds any of array is true,it wont check the entire 
// array.even if it finds the starting element of the array true it will return true
//  and wont check for other remainnig elements.


// const evenNum = [2,6,4,6,8,7];

// // const result = evenNum.some((num,i,arr)=>{
// //     console.log(num,i,arr)

// // })
// const result = evenNum.some((num,i)=>{
//     if(num % 2 === 1){
//         console.log(i)
//     }
//     // return num % 2 ===1;

// })

//.Every() -> it checks the every elemnts of the  array and returns false.

const evenNum = [2,3,4,6,7,8]
const result = evenNum.every((num) => {
    if(num % 2 == 0){
        console.log(num)
    }
    // console.log(num)
 return num
})