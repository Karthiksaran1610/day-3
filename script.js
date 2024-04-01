/*// Day 2 TASK

1)

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2, Object.keys(obj2).sort());
if (str1===str2) {
  console.log("JSON IS EQUAL");
} else {
  console.log("JSON IS NOT EQUAL");
}

 2)

var request = new  XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function() {
    var data=request.response;
    var result=JSON.parse(data)
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
}

// 3) 

var request1 = new  XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function() {
    var data1=request.response;
    var result1=JSON.parse(data)
    for(var i=0;i<result1.length;i++){
        console.log("Countryname:"+" "+result1[i].name.commom,"Region:"+" "+result1[i].region,"Subregion:"+" "+result1[i].Subregion,,"population:"+" "+result1[i].population);
    }
}
*/
