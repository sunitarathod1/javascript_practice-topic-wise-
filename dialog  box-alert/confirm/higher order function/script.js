// function a(message){
//     console.log("hiiii");
//     console.log("hello");
//     console.log(message);
// }
// a("hello this is sunita");


// function a(message){
//     console.log("abc");
//     // console.log(b)
//     console.log(message)
// }

// function b(){     //function which is in another function is callback function
//     console.log("welcome to the functions");

// }
// a(b);//------------function a is the higer order function bcz it contains function b,function b is called callback function
// a("abc")//-------------it is not higher order function


function a(b){
    // console.log()
    b()
}
a(function(){//-------function without name is anonymous function
    console.log("hifi");
})