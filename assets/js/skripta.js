/* */


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


if (a == true) {
   var tabs = document.querySelectorAll(".w-tab-link");
      var backBtn = document.querySelector(".back-icon");
      var tabContent = document.querySelector(".w-tab-content");


      tabContent.style.display = "none";

      tabs.forEach(tab => {
         tab.addEventListener("click", () => {
            let current = tab;

            tabs.forEach(e => {
               e.style.display = "none";
            });

            current.style.display = "block";
            backBtn.style.display = "block";
            tabContent.style.display = "block";
         });
      });


      backBtn.addEventListener("click", () => {
         tabs.forEach(tab => {
            tab.style.display = "inline-block";

         });
         backBtn.style.display = "none";
         tabContent.style.display = "none";
      });
}
else {
   tabs.forEach(tab => {
      tab.style.display = "inline-block";

   });
   backBtn.style.display = "none";
   tabContent.style.display = "block";
}
/* 
function myFunction(x) {
   if (x.matches) {
      var tabs = document.querySelectorAll(".w-tab-link");
      var backBtn = document.querySelector(".back-icon");
      var tabContent = document.querySelector(".w-tab-content");


      tabContent.style.display = "none";

      tabs.forEach(tab => {
         tab.addEventListener("click", () => {
            let current = tab;

            tabs.forEach(e => {
               e.style.display = "none";
            });

            current.style.display = "block";
            backBtn.style.display = "block";
            tabContent.style.display = "block";
         });
      });


      backBtn.addEventListener("click", () => {
         tabs.forEach(tab => {
            tab.style.display = "inline-block";

         });
         backBtn.style.display = "none";
         tabContent.style.display = "none";
      });
   }
   else {
      tabs.forEach(tab => {
         tab.style.display = "inline-block";

      });
      backBtn.style.display = "none";
      tabContent.style.display = "block";
   }
}
var x = window.matchMedia("(max-width: 991px)");

window.addEventListener("resize", () => {
   myFunction(x);
});

myFunction(x); */