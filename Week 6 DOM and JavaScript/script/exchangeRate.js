// pounds to euro exchange rate
const myForm = document.getElementById("myForm");
const output = document.getElementById("output");

myForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    let pounds = document.getElementById("pounds").value;
    exchangeRate = pounds * 1.20;

    if (isNaN(pounds) || pounds === "") {
        output.setAttribute("class", "red");
        output.innerHTML = "input must be a number";
    } else {
        output.removeAttribute("class");
        output.innerHTML = "£" + Math.floor(exchangeRate * 100) / 100;;
    }
})