// var a ="ab";
console.log(a);
var a="ab";

function userName(){
    console.log("hi,i am sunita");
    userName()//------------------this causes stackoverflow,javascript calls the username and executes infinite times.
}
userName();