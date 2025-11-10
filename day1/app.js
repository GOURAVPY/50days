document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".open-content").forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("active");
    });
  });
});
