//******funcction statement/function declaration******
function a(){
  console.log("printing a")
}
a()

//******funcction expression******
var b = function(){ //function used as a value for variable b
  console.log("printing b")
}
b()

//difference between sunc statement and func expression is hoisting
x()
//y() //y is being treated as a variable which in undefined at the time of memory allocation by js.therefore it is giving error and x is running flawlessly

function x(){
  console.log("getting x")
}

var y = function(){
  console.log("gettong y")
}

//******anonymous function******
var anonym = function (){
  //a function without a name is anonymous function
  //an anonymous func is used as a value always. we cannot use it alone
  console.log("anonymous")
}
anonym()


//******named function expression******
// nothing but an anonymous func with a name xD
var notSoAnonym = function xyz(){
  console.log("notSoAnonymous")
}

notSoAnonym()
xyz() //ReferenceError: xyz is not defined at <anonymous>:33:1 at mn (<anonymous>:16:5455). 
//WE CANNOT CALL XYZ IN THIS SCENARIO, xyz is a local variable, not declared in global scope
// we can call xyz inside the function itself but cannot outside like at line: 41


//******first class function******
/*ability to use function as a value, 
pass as an arguement, return out as a function is first class function. 
AKA first class citizen */