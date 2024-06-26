const openModalBtn=document.querySelector("#open-modal");
const backdrop=document.querySelector(".backdrop");


openModalBtn.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);

function openModal(e) {
  backdrop.classList.remove("hidden");
}

function closeModal(e) {
  backdrop.classList.add("hidden");
}