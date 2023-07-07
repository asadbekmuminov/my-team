// overlay
const overlayEl = document.querySelector(".overlay");
const toggleBtn = document.querySelectorAll(".navbar-toggle");
const sitenavLinkWrapper = document.querySelector(".sitenav-link-wrapper");

toggleBtn[0].addEventListener("click", () => {
  sitenavLinkWrapper.classList.remove("show-navbar");
  overlayEl.classList.add("hidden");
});

toggleBtn[1].addEventListener("click", () => {
  sitenavLinkWrapper.classList.add("show-navbar");
  overlayEl.classList.remove("hidden");
});
