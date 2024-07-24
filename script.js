let i = document.querySelector(".i");
let list = document.querySelector(".list"); 
//let body = document.getElementsByTagName("body")
list.addEventListener("click", (e) => {
 i.src = e.target.src;
 if(e.target.src.includes("0.png")){ 
    document.body.style.backgroundColor ="black";
 }
 if(e.target.src.includes("1.png")){ 
    document.body.style.backgroundColor = "rgb(22, 31, 204)";
 }
 if(e.target.src.includes("2.png")){ 
    document.body.style.backgroundColor = "rgb(52, 52, 58)";
 }
 if(e.target.src.includes("3.png")){ 
    document.body.style.backgroundColor = "rgb(175, 125, 8)";
 }
 if(e.target.src.includes("4.png")){ 
    document.body.style.backgroundColor = "rgb(215, 71, 71)";
 }
});