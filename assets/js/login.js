/* ========================================= FORM ========================================= */

let buttonsDiv = document.querySelector(".buttons");
let buttons = document.querySelectorAll(".btn");
let switchSvg = document.querySelector(".switch");
let loginPage = document.querySelector(".login-container");
let signupPage = document.querySelector(".signup-container");
let backBtn = document.querySelectorAll(".back-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", ()=> {

        if(btn.classList.contains("login"))
        {
            switchSvg.classList.add("animate");

            setTimeout(() => {
                loginPage.classList.add("show");
            }, 500);
            setTimeout(() => {
                switchSvg.classList.remove("animate");
            }, 1400);
        }
        if(btn.classList.contains("signup"))
        {
            switchSvg.classList.add("animate");

            setTimeout(() => {
                signupPage.classList.add("show");
            }, 500);
            setTimeout(() => {
                switchSvg.classList.remove("animate");
            }, 1400);
        }
    })
});

backBtn.forEach(btn => {
    btn.addEventListener("click", ()=> {

        switchSvg.classList.add("animate");
        buttonsDiv.style.pointerEvents = "none";

        setTimeout(() => {
            signupPage.classList.remove("show");
            loginPage.classList.remove("show");
        }, 500);
        setTimeout(() => {
            switchSvg.classList.remove("animate");
            buttonsDiv.style.pointerEvents = "all";
        }, 1400);

        console.log("ejo");
    })
});

/* ======================================= EMAIL VALIDATION ======================================= */
 
var emailInput1 = document.querySelector(".email input");

var refreshInput;
var form1 = document.querySelector(".email");

emailInput1.addEventListener("focus", () => {

    refreshInput = setInterval(() => {
        
        var email = emailInput1.value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        if(email.match(pattern))
        {
            form1.classList.add("success");
            form1.classList.remove("error");
        }
        else
        {
            form1.classList.remove("success");
            form1.classList.add("error");
        }
        if(email == "")
        {
            form1.classList.remove("success");
            form1.classList.remove("error");
        }
    }, 100);
});

emailInput1.addEventListener("blur", () => {
    clearInterval(refreshInput);
});

/* ====================================== EMAIL VALIDATION 2 ====================================== 

var emailInput2 = document.querySelector("#email2");
var passInput2 = document.querySelector("#pass2").value;

var refreshInput2;
var form2 = document.querySelector(".email2");

emailInput2.addEventListener("focus", () => {
    refreshInput2 = setInterval(() => {
        
        var email = emailInput2.value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        
        if(email.match(pattern))
        {
            form2.classList.add("success");
            form2.classList.remove("error");
        }
        else
        {
            form2.classList.remove("success");
            form2.classList.add("error");
        }
        if(email == "")
        {
            form2.classList.remove("success");
            form2.classList.remove("error");
        }
    }, 100);
});

emailInput2.addEventListener("blur", () => {
    clearInterval(refreshInput2);
});

/* ===================================== PASSWORD TOGGLE ============================================ */

const passwordField = document.querySelector("#pass1");
const eyeIcon = document.querySelector(".fa-eye.one");

eyeIcon.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    passwordField.focus();
})


const passwordField2 = document.querySelector("#pass2");
const eyeIcon2 = document.querySelector(".fa-eye.two");

eyeIcon2.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField2.getAttribute("type") === "password" ? "text" : "password";
    passwordField2.setAttribute("type", type);
    passwordField2.focus();
})

/* ===================================== LOGIN ============================================ 

var loginBtn = document.querySelector("button.log-in");

loginBtn.addEventListener("click", () => {
    if(form1.classList.contains("success") && passwordField.value.length > 5)
    {
        window.location = "main.html";
    }
}); */