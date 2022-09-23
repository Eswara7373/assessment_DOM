let h1 = "Hello"
let a= h1.innerText = "Hello World"
console.log(a) 


function execute()
{
    let button = document.getElementsByTagName("button")
    let div = document.getElementsByClassName("container")[0]
   
   
    div.style.flexDirection = "column"  

    
 }





 let y = document.getElementById("style")
 y.style.color = "red"
 y.style.fontStyle = "italic"





 function fun(){
    let button = document.getElementsByTagName("button")
    let p = document.getElementsByClassName("text")[0]

    p.innerText = "Welcome to Elevation academy"
     p.style.color = "green"
     
 }


 var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(time, 1000);



 function printSelectedItem(){
    let z = document.getElementById("Year");
    let str = z.options[z.selectedIndex].innerText;
    console.log(str);
   
 }
 



 function check(myfrm) {
   let printdata = document.getElementById("myfrm");
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   let birthYear = document.getElementById("birthYear").value;
   console.log(name);
   console.log(email);
   console.log(phone);
   console.log(birthYear);
   
}
  
