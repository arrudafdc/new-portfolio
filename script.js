const sobre = document.querySelector(".sobre");
const btnSobre = document.querySelector(".btn-sobre");

btnSobre.addEventListener("click", () => {
  const isActive = sobre.classList.toggle("active");
  btnSobre.innerHTML = isActive ? "Home" : "Sobre";
  document.body.style.overflow = isActive ? "hidden" : "initial";
});
