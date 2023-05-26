/* ======================================= SCROLL CHAT TO BOTTOM ======================================= */

const chatArea = document.querySelector(".chat-area");
window.scrollTo(0, chatArea.scrollHeight);

/* ======================================= CHAT ======================================= */

var chatInput = document.querySelector(".type input");
var sendBtn = document.querySelector(".send-btn");
var icons = document.querySelector(".bottom .icons")

chatInput.addEventListener("input", () => {
    if (chatInput.value.length >= 1) {
        sendBtn.classList.add("open");
        icons.style.display = "none";
    }
    else {
        sendBtn.classList.remove("open");
        icons.style.display = "flex";
    }
});

sendBtn.addEventListener("click", () => {
    var text = chatInput.value;

    var pattern = "<div class='chat outgoing'><div class='details'><p>" + text + "</p></div></div>";

    chatArea.innerHTML += pattern;

    chatInput.value = "";
    chatInput.focus();
    window.scrollTo(0, chatArea.scrollHeight);


    sendBtn.classList.remove("open");
    icons.style.display = "flex";
})