// Navbar Movement
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
  document.querySelector(".sidebar").classList.toggle("change");
});
// End of Navbar Movement


// Team Member "About Me" Movement
document.querySelectorAll('.story-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      btn.classList.toggle('change')
      btn.nextElementSibling.classList.toggle('change')
  })
})
// End of Team Member "About Me" Movement