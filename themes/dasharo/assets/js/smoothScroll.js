const links = document.querySelectorAll(".smooth-scroll");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop =
    document.querySelector(href).getBoundingClientRect().top + window.scrollY;
  if (href === "#home") {
    scroll({
      top: document.body.offsetTop,
      behavior: "smooth",
    });
  } else if (href.match(/#faq/)) {
    scroll({
      top: offsetTop - 80,
      behavior: "smooth",
    });
  } else {
    scroll({
      top: offsetTop - 50,
      behavior: "smooth",
    });
  }
}
