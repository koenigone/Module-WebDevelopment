let redBtn = document.querySelector(".red");
let greenBtn = document.querySelector(".green");
let blueBtn = document.querySelector(".blue");
let resetBtn = document.querySelector(".reset");

redBtn.addEventListener("click", ()=> {
    document.body.setAttribute("class", "red");
});
greenBtn.addEventListener("click", ()=> {
    document.body.setAttribute("class", "green");
});
blueBtn.addEventListener("click", ()=> {
    document.body.setAttribute("class", "blue");
});
resetBtn.addEventListener("click", ()=> {
    document.body.removeAttribute("class", "reset");
});

// change the clours in order button
let mainBtn = document.getElementById("myTestBtn");
let red    = "red";
let green  = "green";
let blue   = "blue";
let normal = "white";
let coloursArr = [red, green, blue, normal];
let value  = 0;

mainBtn.addEventListener("click", ()=> {
    for (i = 0; i < coloursArr.length; i++) {
        value++;
        if (value === 3) {
            value = 0;
        }
        document.body.style.backgroundColor = coloursArr[value];
    }
});
