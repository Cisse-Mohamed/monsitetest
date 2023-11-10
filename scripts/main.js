

let myImage = document.querySelector("img")

let myheading = document.querySelector("h1")
let myButton = document.querySelector("button")

myImage.addEventListener("click", function(){
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/asecna.png"){
        myImage.setAttribute("src", "images/image1.png")
    }else{
        myImage.setAttribute("src", "images/asecna.png")
    }
})

function setUserName(){
    myname = prompt("enter user name:  ")
    localStorage.setItem("nom", myname)
    myheading.textContent ="Mozilla is cool " + myname
}

if (!localStorage.getItem("nom")){
    setUserName()
}else {
    let userName = localStorage.getItem("nom")
    myheading.textContent = "Mozilla is cool "+ userName
}

myButton.addEventListener("click", function(){
    setUserName()
})