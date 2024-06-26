//! Question 1

/*let obj1 = {name : "person 1" , age : 5}
let obj2 = {age : 5 , name : "person 1"}

if(obj1.name === obj2.name && obj1.age === obj2.age){
   console.log(true)
}else{
   console.log(false)
}*/

//! Question 2

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.png);
  }
};*/

//!Question 3

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
  }
};
