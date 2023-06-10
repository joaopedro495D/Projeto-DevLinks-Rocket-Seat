const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnOpenModal = document.querySelector(".show-modal")
console.log(btnOpenModal)

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
} 

function openModal() {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

function closeModal() {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}
btnOpenModal.addEventListener("click", openModal)
btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

