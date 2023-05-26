/* ======================================= FILTER TOGGLE ======================================= */

var filterBtns = document.querySelectorAll(".profile .filter .fil");
var marker = document.querySelector(".filter .marker")

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("right")) {
            marker.style.left = "48%";
        }
        if (btn.classList.contains("left")) {
            marker.style.left = "5px";
        }
    })
});

/* ================================= MOBILE FILTER TOGGLE ================================= */

var mobileFilterBtns = document.querySelectorAll(".mobile-profile .filter .fil");
var mobileMarker = document.querySelector(".mobile-profile .filter .marker")

mobileFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("right")) {
            mobileMarker.style.left = "48%";
        }
        if (btn.classList.contains("left")) {
            mobileMarker.style.left = "5px";
        }
    })
});

/* ============================== LOADER ANIMATION ============================ */

var loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.filter = "brightness(0)";
        loader.style.pointerEvents = "none";
    }, 1300);
})

/* ============================== PROFILE ============================ */

var profileBtn = document.querySelector(".profile-btn");
var profile = document.querySelector(".profile");

profileBtn.addEventListener("click", () => {
    profile.classList.toggle("show");
});

window.addEventListener("click", (e) => {
    if (profile.classList.contains("show") && e.target != profile && e.target != profileBtn)
        profile.classList.remove("show");
})

/* ============================== MOBILE PROFILE ============================ */

var mobileProfileBtn = document.querySelector(".profile-btn");
var mobileProfile = document.querySelector(".mobile-profile");
var closeMobileProfile = document.querySelector(".close-profile ion-icon");

mobileProfileBtn.addEventListener("click", () => {
    mobileProfile.classList.add("show");
    document.body.style.overflow = "hidden";
});

closeMobileProfile.addEventListener("click", () => {
    mobileProfile.classList.remove("show");
    document.body.style.overflow = "auto";
});

/* ============================== SCROLL NAVBAR ============================ */

/* const body = document.body;
let lastScroll = 0;
 
var nav = document.querySelector(".navbar");
 
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
 
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }
 
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) 
    {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
        //console.log("dole");
    } 
    else if ( currentScroll < lastScroll && body.classList.contains("scroll-down")) 
    {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
        //console.log("gore");
    }
    lastScroll = currentScroll;
});
let g=112;
window.addEventListener("scroll", (e)=> {
    
    var scrollTop = window.scrollY;
    let x = scrollTop;
    
    if(body.classList.contains("scroll-down"))
    {
 
 
        if(x>112)
            x=112;
 
        console.log("dole", x);
           nav.style.transform = "translateY(-" + x + "px)";
           selector.style.transform = "translateY(-" + x + "px)";
        if(g<112)
            g+=0.2;
    }
    if(body.classList.contains("scroll-up"))
    {
        
        if(g<0)
            g=0;
 
        console.log("gore", g);
           nav.style.transform = "translateY(-" + g + "px)";
           selector.style.transform = "translateY(-" + g + "px)";
           g-=5;
 
           if(x>0)
            x+=3;
    }
}) */

/* ============================== SEARCH ============================ */

var searchBtn = document.querySelector(".search-icon");
var backBtn = document.querySelector(".back-icon");
var search = document.querySelector(".search");
var searchResults = document.querySelector(".search-results");
var searchInput = search.querySelector("input");
var cancelSearchBtn = search.querySelector(".cancel-search");
var typeInBtn = document.querySelectorAll(".type-in");

searchBtn.addEventListener("click", () => {
    search.classList.add("open");
    searchResults.classList.add("open");
    searchInput.focus();
    document.body.style.overflow = "hidden";
});

backBtn.addEventListener("click", () => {
    search.classList.remove("open");
    searchResults.classList.remove("open");
    searchInput.value = "";
    document.body.style.overflow = "auto";
    cancelSearchBtn.classList.remove("open");
});

typeInBtn.forEach(e => {
    e.addEventListener("click", () => {
        var text = e.previousSibling.previousSibling.innerText;

        searchInput.value = text;
        searchInput.focus();
        cancelSearchBtn.classList.add("open");
    })
});

searchInput.addEventListener("input", () => {
    if (searchInput.value.length >= 1)
        cancelSearchBtn.classList.add("open");
    else
        cancelSearchBtn.classList.remove("open");
});

cancelSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    cancelSearchBtn.classList.remove("open");
});

/* ============================== MOBILE MENU ACTIVE ============================ */

var mobileMenuList = document.querySelectorAll(".mobile-nav .menu a");

mobileMenuList.forEach(e => {
    if (e.classList.contains("active")) {
        var t = e.querySelector("ion-icon").getAttribute("name");

        t = t.replace("-outline", "")
        e.querySelector("ion-icon").setAttribute("name", t);
    }
});