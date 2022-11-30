const mouseLogo = document.querySelector(".mouse-scroll");
let isHidden = false;

window.addEventListener("scroll", scrollHandler);
if (mouseLogo) {
  window.onload = function () {
    setInterval(() => {
      if (isHidden) {
        mouseLogo.classList.remove("mouse-icon-hide");
        mouseLogo.style.transform = "translateY(-25px)";
        isHidden = !isHidden;
      } else {
        mouseLogo.classList.add("mouse-icon-hide");
        mouseLogo.style.transform = "translateY(25px)";
        isHidden = !isHidden;
      }
    }, 3000);
  };
}
