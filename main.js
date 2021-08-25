// SPINNIG WHEEL

function spinWheel() {
  const box = document.querySelector("#box");
  const mainbox = document.querySelector("#mainbox");
  const message = document.querySelector("#message");
  const fireworks = document.querySelector(".fireworks");
  const forma = document.querySelector(".forma");

  const x = 1024;
  const y = 5000;

  const deg = Math.floor(Math.random() * (x - y) + y);

  box.style.transform = "rotate(9270deg)";

  buyers.style.display = "none";

  mainbox.classList.add("animate");
  setTimeout(function () {
    message.classList.add("message-animation");
    fireworks.classList.add("display");
    buyers.style.display = "block";
    mainbox.classList.remove("animate");
    forma.style.display = "block";
  }, 8100);

  setTimeout(function () {
    fireworks.classList.remove("display");

    forma.style.transform = "translate(0) rotate(360deg)";
  }, 11200);
}

// BUYERS NOTIFICATION

const buyers = document.getElementById("buyer");
const names = [
  "Ešef",
  "Suada",
  "Senad",
  "Huso",
  "Kemo",
  "Nihad",
  "Jolda",
  "Neda",
  "Suljo",
  "Mujo",
  "Filka",
];

const komada = [1, 2, 1, 3, 3, 2, 1, 1, 2, 3, 1];
const gradovi = [
  "Srebrenik",
  "Tuzla",
  "Jelah",
  "Sarajevo",
  "Brčko",
  "Banja Luka",
  "Mostar",
  "Zenica",
  "Bihać",
  "Gradiška",
  "Visoko",
];

const kupiti = [
  "Kupio",
  "Kupila",
  "Kupio",
  "Kupio",
  "Kupio",
  "Kupio",
  "Kupio",
  "Kupila",
  "Kupio",
  "Kupio",
  "Kupila",
];

const timeAgo = [
  "Upravo sada",
  "Prije 1h",
  "Prije 30 minuta",
  "Prije 40 minuta",
  "Upravo sada",
  "Prije 2h",
  "Prije 1h",
  "Upravo sada",
  "Prije 1h",
  "Prije 30 minuta",
  "Prije 40 minuta",
];

let ind = 0;
const len = names.length;

setInterval(function () {
  buyers.style.transform = "translateX(0)";
  buyers.classList.remove("transparent");

  buyers.innerHTML = `<div class="cont">
                <div class="image">
                    <i class="far fa-thumbs-up"></i>
                </div>
                <div class="buyers-box">
                <div class="name">${names[ind]} <span>, ${
    gradovi[ind]
  }</span></div>
                <div class="desc">${kupiti[ind]} ${komada[ind]} ${
    komada[ind] == 1 ? "kutiju" : "kutije"
  } Natura Active</div>
                <small>${timeAgo[ind]}</small>
                </div>
            </div>`;

  if (ind < len) {
    ind++;
  } else {
    ind = 1;
  }
  console.log(ind);
}, 3000);

setInterval(function () {
  buyers.classList.add("transparent");
  buyers.style.transform = "translateX(-200%)";
  ind--;
}, 6000);
