/* ============================== NAV SCROLLED ============================ */

window.addEventListener("scroll", function() {
    var nav = document.querySelector('.navbar');
    if ( window.pageYOffset > 10 ) 
    {
        nav.classList.add("scrolled");
    } 
    else 
    {
        nav.classList.remove("scrolled");
    }
});

/* ============================== TO TOP BUTTON ============================ */

window.addEventListener("scroll", function() {
    var top = document.querySelector('.to-top');
    if ( window.pageYOffset > 70 ) 
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
});

let hamLinks = document.querySelectorAll(".hamburger-menu ul li a");

hamLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        hamBtn.classList.toggle("open");
    })
});

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

/* ============================== LOADER ANIMATION ============================ */

var loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 4000);
})

/* ============================== NAV ACTIVE ON SCROLL ============================ */

var navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let x = window.pageYOffset;

    navLinks.forEach(l => {
        l.classList.remove("active");
    });

    if(x < 400)
    {
        navLinks[0].classList.add("active");
    }
    else if(x < 1250)
    {
        navLinks[1].classList.add("active");
    }
    else if(x < 2000)
    {
        navLinks[2].classList.add("active");
    }
    else if(x < 3500)
    {
        navLinks[3].classList.add("active");
    }
    else if(x < 4250)
    {
        navLinks[4].classList.add("active");
    }
    else if(x < 4800)
    {
        navLinks[5].classList.add("active");
    }
})

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

/* ============================== REVEAL ON SCROLL ANIMATION ============================ */

setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
}, 4500);