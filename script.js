// document.getElementById("new").innerHTML="sui";
// document.getElementById("new").style.color="red"
// let x=document.getElementById("news")
// x.style.color="blue";
// let y=0
// function myfunction()
// {
//     y=y+1;
//     document.getElementById("new").innerHTML=y;

// }
// function myfunc(){
//     y=y-1;
//     document.getElementById("new").innerHTML=y;

// }
let x = true;
function myfunction() {
  if (x == true) {
    document.getElementById("new").innerHTML = "hii";
  } else {
    document.getElementById("new").innerHTML = "hello";
  }
  x = !x;
}
