var a;

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    a = true;
} else {
    a = false;
}

/* ============================== NAV SCROLLED ============================ */

window.addEventListener("scroll", function() {
    var nav = document.querySelector('header');
    if ( window.pageYOffset > 10 ) 
    {
        nav.classList.add("scrolled");
    } 
    else 
    {
        nav.classList.remove("scrolled");
    }
});

/* ============================== TO TOP SCROLLED ============================ */

window.addEventListener("scroll", function() {
    var top = document.querySelector('.to-top');
    if ( window.pageYOffset > 300 ) 
    {
        top.classList.add("scrolled");
    } 
    else 
    {
        top.classList.remove("scrolled");
    }
});

/* ============================== HAMBURGER ============================ */

let hamBtn = document.querySelector(".hamburger");
let hamburger = document.querySelector(".hamburger-menu");

hamBtn.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    hamBtn.classList.toggle("open");
    hamBtn.style.pointerEvents = "none";

    if(a==true)
        document.body.classList.toggle("overflow");

    if(hamburger.classList.contains("open"))
    {
        setTimeout(() => {
            hamBtn.style.pointerEvents = "all";
        }, 1200);
    }
    if(!hamburger.classList.contains("open"))
    {
        setTimeout(() => {
            hamBtn.style.pointerEvents = "all";
        }, 600);
    }

});

let hamLinks = document.querySelectorAll(".hamburger-menu ul li a");

hamLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        hamBtn.classList.toggle("open");

        if(a == true)
            document.body.classList.toggle("overflow");
    })
});

/* ============================== CODE FOLLOW ANIMATION ============================ */

const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {

    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}

/* ============================== FAQ ACCORDITION ============================ */

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}

/* ============================== EMAIL VALIDATION ============================ */

var emailInput = document.querySelector("#email");
var form = document.querySelector("form");

var refreshInput;

emailInput.addEventListener("focus", () => {
    refreshInput = setInterval(() => {
        
        var email = document.querySelector("#email").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
        if(email.match(pattern))
        {
            form.classList.add("success");
            form.classList.remove("error");
        }
        else
        {
            form.classList.remove("success");
            form.classList.add("error");
        }
        if(email == "")
        {
            form.classList.remove("success");
            form.classList.remove("error");
        }
    }, 50);
});

emailInput.addEventListener("blur", () => {
    clearInterval(refreshInput);
});

/* ============================== FORM SUBMIT ============================ */

/* form.addEventListener("submit", (e)=> {
    e.preventDefault();
}) */

/* ============================== ALERT NOTIFICATION ============================ */
/* 
var submitBtn = document.querySelector(".btn.submit");
var alert = document.querySelector(".alert");
var closeBtn = document.querySelector(".close-btn");

var nameInput = document.querySelector("#name");
var subjectInput = document.querySelector("#subject");
var messageInput = document.querySelector("#message");

submitBtn.addEventListener("click", function(){
    if(document.querySelector("form").classList.contains("success") && (nameInput.length > 3 || nameInput.length < 20 
        || !nameInput.value == "") && !subjectInput.value == "" && !messageInput.value == "")
    {
        alert.classList.add("show");
        alert.classList.remove("hide");
        alert.classList.add("showAlert");

        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";

        form.classList.remove("success");

        setTimeout(function(){
            alert.classList.remove("show");
            alert.classList.add("hide");
        },5000);
    }
});

closeBtn.addEventListener("click", function(){
    alert.classList.remove("show");
    alert.classList.add("hide");
}); */