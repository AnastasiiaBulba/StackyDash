// Створення мобільного меню
function createMobileMenu() {
  const header = document.querySelector(".site-header .container");
  if (!header) return;
  if (document.getElementById("burger-btn")) return;
  const burger = document.createElement("button");
  burger.className = "burger";
  burger.id = "burger-btn";
  burger.setAttribute("aria-label", "Open menu");
  burger.innerHTML = "<span></span><span></span><span></span>";
  header.appendChild(burger);

  // Додаємо модальне меню
  if (!document.getElementById("mobile-menu-modal")) {
    fetch("partials/mobile-menu.html")
      .then((res) => res.text())
      .then((html) => {
        document.body.insertAdjacentHTML("beforeend", html);
        attachMobileMenuEvents();
      });
  } else {
    attachMobileMenuEvents();
  }

  function attachMobileMenuEvents() {
    const modal = document.getElementById("mobile-menu-modal");
    const closeBtn = document.getElementById("close-mobile-menu");
    if (!modal || !closeBtn) return;
    burger.addEventListener("click", function () {
      modal.classList.add("active");
    });
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("active");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") modal.classList.remove("active");
    });
  }
}
