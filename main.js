// SPINNIG WHEEL

function spinWheel() {
  const box = document.querySelector("#box");
  const mainbox = document.querySelector("#mainbox");
  const message = document.querySelector("#message");
  const fireworks = document.querySelector(".fireworks");

  const x = 1024;
  const y = 5000;

  const deg = Math.floor(Math.random() * (x - y) + y);

  box.style.transform = "rotate(9270deg)";

  mainbox.classList.add("animate");
  setTimeout(function () {
    message.classList.add("message-animation");
    fireworks.classList.add("display");
  }, 8100);

  setTimeout(function () {
    fireworks.classList.remove("display");
  }, 11200);
}
