(() => {
  const galleryImages = [...document.querySelectorAll(".gallery img")];
  if (!galleryImages.length || typeof HTMLDialogElement === "undefined") return;

  const dialog = document.createElement("dialog");
  dialog.className = "image-lightbox";
  dialog.setAttribute("aria-label", "Expanded project image");
  dialog.innerHTML = `
    <div class="lightbox-panel">
      <button class="lightbox-close" type="button" aria-label="Close expanded image">×</button>
      <img alt="">
      <p></p>
    </div>`;
  document.body.append(dialog);

  const expandedImage = dialog.querySelector("img");
  const caption = dialog.querySelector("p");
  const closeButton = dialog.querySelector("button");

  const openImage = (image) => {
    expandedImage.src = image.currentSrc || image.src;
    expandedImage.alt = image.alt;
    caption.textContent = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt;
    dialog.showModal();
    closeButton.focus();
  };

  galleryImages.forEach((image) => {
    image.classList.add("gallery-zoom");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `Enlarge image: ${image.alt}`);
    image.addEventListener("click", () => openImage(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImage(image);
      }
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
