const pastel = document.getElementById("pastel");
const cake = document.getElementById("cake");

eventos();
function eventos() {
//   console.log(cake);
  pastel.addEventListener("click", apagarVelitas);
}
function apagarVelitas(e) {
  e.preventDefault();
  //   console.log("Push");
//   console.log(e.target);
  e.target.remove();
  let newImg = document.createElement("img");
  newImg.src = "./imgs/cake22.png";
  newImg.className = "pastel";
  cake.appendChild(newImg);
}
