alert("Сайтқа қош келдің!");
// бұрынғы welcome
alert("Сайтқа қош келдің!");

// Галерея/модал логикасы
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".wonder");
  const modal = document.getElementById("wonders-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalClose = document.getElementById("modal-close");
  const backdrop = document.querySelector(".modal-backdrop");

  function openModal(imgSrc, title, desc, alt) {
    modalImg.src = imgSrc;
    modalImg.alt = alt || title;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
  }

  items.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const src = img.getAttribute("src");
      const title = item.dataset.title || item.querySelector("h3").textContent;
      const desc = item.dataset.desc || "";
      openModal(src, title, desc, img.alt);
    });
  });

  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  // Esc арқылы жабу
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
