if ( document.URL.includes("index.html") ) {
    /* ========================================= SELECTOR ========================================= */

let isDragging = false;

var tabBox = document.querySelector(".selector ul");
var Arrows = document.querySelectorAll(".selector .icon");
let selector = document.querySelector(".selector");
var btns = document.querySelectorAll(".selector ul li");

Arrows.forEach(icon => {
    icon.addEventListener("click", ()=> {
        tabBox.scrollLeft += icon.id === "left" ? -250 : 250;
    })
})

const dragging = (e)=> {
    if(!isDragging) return;
    tabBox.classList.add("dragging");
    tabBox.scrollLeft -= e.movementX;
}

const dragStop = () => {
    isDragging = false;
    tabBox.classList.remove("dragging");
}

tabBox.addEventListener("mousedown", ()=> isDragging = true);
tabBox.addEventListener("mousemove", dragging);
tabBox.addEventListener("mouseup", dragStop);

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        var current = document.querySelector(".selector ul li.active");
        current.classList.remove("active");
        btn.classList.add("active");
    })
});

selector.addEventListener("mouseleave", ()=> isDragging = false);

/* ========================================= SIDEBAR ========================================= */

var lis = document.querySelectorAll(".sidebar ul li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function () {
        var current = document.querySelectorAll(".active");
        current[0].classList.remove("active")
        this.classList.add("active");
    });
}

/* ======================================= FILTER TOGGLE ======================================= */

var filterBtns = document.querySelectorAll(".profile .filter .fil");
var marker = document.querySelector(".filter .marker")

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.classList.contains("right"))
        {
            marker.style.left="48%";
        }
        if(btn.classList.contains("left"))
        {
            marker.style.left="5px";
        }
    })
});

/* ================================= MOBILE FILTER TOGGLE ================================= */

var mobileFilterBtns = document.querySelectorAll(".mobile-profile .filter .fil");
var mobileMarker = document.querySelector(".mobile-profile .filter .marker")

mobileFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.classList.contains("right"))
        {
            mobileMarker.style.left="48%";
        }
        if(btn.classList.contains("left"))
        {
            mobileMarker.style.left="5px";
        }
    })
});

/* ============================== POST TITLES ============================ */

var titles = document.querySelectorAll(".box h3");

titles.forEach(e => {
    e.setAttribute("title", e.innerHTML)
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
    if(profile.classList.contains("show") && e.target != profile && e.target != profileBtn)
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
    e.addEventListener("click", ()=> {
        var text = e.previousSibling.previousSibling.innerText;

        searchInput.value = text;
        searchInput.focus();
        cancelSearchBtn.classList.add("open");
    })
});

searchInput.addEventListener("input", ()=> {
    if(searchInput.value.length >= 1)
        cancelSearchBtn.classList.add("open");
    else 
        cancelSearchBtn.classList.remove("open");
});

cancelSearchBtn.addEventListener("click", ()=> {
    searchInput.value = "";
    searchInput.focus();
    cancelSearchBtn.classList.remove("open");
});

/* ============================== MOBILE MENU ACTIVE ============================ */

var mobileMenuList = document.querySelectorAll(".mobile-nav .menu a");

mobileMenuList.forEach(e => {
    if(e.classList.contains("active"))
    {
        var t = e.querySelector("ion-icon").getAttribute("name");

        t = t.replace("-outline", "")
        e.querySelector("ion-icon").setAttribute("name", t);
    }
});



var createBtn = document.querySelector(".create-btn");

createBtn.addEventListener("click", ()=> {
    createBtn.classList.toggle("active");
})





var favs = document.querySelectorAll(".post .save ion-icon");

favs.forEach(fav => {
    fav.addEventListener("click", ()=> {
        fav.classList.toggle("add");

        if(fav.classList.contains("add"))
        {
            var t = fav.getAttribute("name");

            t = t.replace("-outline", "")
            fav.setAttribute("name", t);
        }

        if(!fav.classList.contains("add"))
        {
            var t = fav.getAttribute("name");

            t = t + "-outline";
            fav.setAttribute("name", t);
        }
    })
});





const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};







var ads = document.querySelector(".ads-box");
var dots = document.querySelectorAll(".dot");

ads.addEventListener("scroll", ()=> {

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    if(ads.scrollLeft < 252)
        dots[0].classList.add("active");
    else if(ads.scrollLeft < 504)
        dots[1].classList.add("active");
    else
        dots[2].classList.add("active");

});

/* window.addEventListener("scroll", ()=> {
    if(elementIsVisibleInViewport(ads, true))
    {
        var scrollAds = setInterval(() => {
        
            ads.scrollLeft += 250;
            if(ads.scrollLeft >= 656)
                ads.scrollLeft=0;
        
                console.log("ejo");
        
        }, 1000);
    }
    else
        clearInterval(scrollAds);
})
 */

var scrollAds = setInterval(() => {
        
    ads.scrollLeft += 250;
    if(ads.scrollLeft >= 656)
        ads.scrollLeft=0;

}, 6000);



}


/* ============================== AJAX PAGE LOADER ============================ */

/* function ajax(url, callback) {
    var xhr = new window.XMLHttpRequest();
    xhr.open("GET", url + "?rel=page", true);
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE && (xhr.status >= 200 && xhr.status < 300)) {
            if (this.response) {
                callback.call(this, this.response);
            }
        }
    }
    xhr.send();
}

var anchor = document.querySelectorAll("a[rel=page]");
[].slice.call(anchor).forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
        e.preventDefault();

        var pageUrl = this.getAttribute("href");

        ajax(pageUrl, function (data) {
            document.querySelector("#load").innerHTML = data;
        });

        if (pageUrl != window.location) {
            window.history.pushState({ url: pageUrl }, '', pageUrl);
        }
        return false;
    })
});

window.addEventListener("popstate", function () {
    ajax(this.window.location.pathname, function (data) {
        document.querySelector("#load").innerHTML = data;
    });
}); */









if ( document.URL.includes("messages.html") ) {


/* ======================================= FILTER TOGGLE ======================================= */

var filterBtns = document.querySelectorAll(".profile .filter .fil");
var marker = document.querySelector(".filter .marker")

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.classList.contains("right"))
        {
            marker.style.left="48%";
        }
        if(btn.classList.contains("left"))
        {
            marker.style.left="5px";
        }
    })
});

/* ================================= MOBILE FILTER TOGGLE ================================= */

var mobileFilterBtns = document.querySelectorAll(".mobile-profile .filter .fil");
var mobileMarker = document.querySelector(".mobile-profile .filter .marker")

mobileFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.classList.contains("right"))
        {
            mobileMarker.style.left="48%";
        }
        if(btn.classList.contains("left"))
        {
            mobileMarker.style.left="5px";
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
    if(profile.classList.contains("show") && e.target != profile && e.target != profileBtn)
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
    e.addEventListener("click", ()=> {
        var text = e.previousSibling.previousSibling.innerText;

        searchInput.value = text;
        searchInput.focus();
        cancelSearchBtn.classList.add("open");
    })
});

searchInput.addEventListener("input", ()=> {
    if(searchInput.value.length >= 1)
        cancelSearchBtn.classList.add("open");
    else 
        cancelSearchBtn.classList.remove("open");
});

cancelSearchBtn.addEventListener("click", ()=> {
    searchInput.value = "";
    searchInput.focus();
    cancelSearchBtn.classList.remove("open");
});

/* ============================== MOBILE MENU ACTIVE ============================ */

var mobileMenuList = document.querySelectorAll(".mobile-nav .menu a");

mobileMenuList.forEach(e => {
    if(e.classList.contains("active"))
    {
        var t = e.querySelector("ion-icon").getAttribute("name");

        t = t.replace("-outline", "")
        e.querySelector("ion-icon").setAttribute("name", t);
    }
});
}





if ( document.URL.includes("chat.html") ) {

    /* ======================================= SCROLL CHAT TO BOTTOM ======================================= */

    const chatArea = document.querySelector(".chat-area");
    window.scrollTo(0, chatArea.scrollHeight);

    /* ======================================= CHAT ======================================= */

    var chatInput = document.querySelector(".type input");
    var sendBtn = document.querySelector(".send-btn");
    var icons = document.querySelector(".bottom .icons")

    chatInput.addEventListener("input", ()=> {
        if(chatInput.value.length >= 1)
        {
            sendBtn.classList.add("open");
            icons.style.display = "none";
        }
        else 
        {
            sendBtn.classList.remove("open");
            icons.style.display = "flex";
        }
    });

    sendBtn.addEventListener("click", ()=> {
        var text = chatInput.value;

        var pattern = "<div class='chat outgoing'><div class='details'><p>"+text+"</p></div></div>";

        chatArea.innerHTML += pattern;

        chatInput.value = "";
        chatInput.focus();
        window.scrollTo(0, chatArea.scrollHeight);

        
        sendBtn.classList.remove("open");
        icons.style.display = "flex";
    })


}