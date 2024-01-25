var tabs = document.querySelectorAll(".w-tab-link");
var backBtn = document.querySelector(".back-icon");
var tabContent = document.querySelector(".w-tab-content");


tabContent.style.display = "none";

tabs.forEach(tab => {
   tab.addEventListener("click", ()=> {
      let current = tab;

      tabs.forEach(e => {
         e.style.display = "none";
      });

      current.style.display = "block";
      backBtn.style.display = "block";
      tabContent.style.display = "block";
   });
});


backBtn.addEventListener("click", ()=> {
   tabs.forEach(tab => {
      tab.style.display = "block";

   });
   backBtn.style.display = "none";
   tabContent.style.display = "none";
});