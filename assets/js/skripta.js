const tabs = document.querySelectorAll(".w-tab-link");
const backBtn = document.querySelector(".back-icon");
const tabContent = document.querySelector(".w-tab-content");

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