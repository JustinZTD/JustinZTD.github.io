let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/an_lr.png") {
    myImage.setAttribute("src", "images/fuqi.png");
  } else {
    myImage.setAttribute("src", "images/an_lr.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  let mySrc = myImage.getAttribute("src");
  if (!myName) {
    setUserName();
  } else if (myName === "安陵容") {
    myImage.setAttribute("src", "images/an_lr.png");
  } else if (myName === "拽妃") {
    myImage.setAttribute("src", "images/fuqi.png");
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = "参见小主, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};
