/* */







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

myFunction(x);