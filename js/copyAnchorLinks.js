function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

$(document).on("click", 'a[href^="#"]', function (event) {
  window.setTimeout(function () {
    offsetAnchor();
  }, 0);
});
window.setTimeout(offsetAnchor, 0);

// const numberOfQuestions = document.getElementsByClassName("faq__content-item-description").length;
// var linksArray = [];

// for (var i = 1; i <= numberOfQuestions; i++) {
//   linksArray[i] = document.getElementById("question" + i);
//   let targetLink = linksArray[i];
//   let att = document.createAttribute("data-clipboard-text");
//   if (location.href.includes("localhost")) {
//     att.value = "http://localhost:3000/pages/learn.html#q" + i;
//   } else {
//     att.value = "https://dasharo.com/pages/learn.html#q" + i;
//   }
//   targetLink.setAttributeNode(att);
// }

const copyToClipBoard = (e) => {
  let text = e.currentTarget.getAttribute("data-clipboard-text");
  let textarea = document.createElement("textarea");
  var tooltip = document.getElementsByClassName("tooltip");
  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();

  try {
    Array.from(tooltip).forEach((el) => {
      el.classList.add("active");
    });
    setTimeout(() => {
      Array.from(tooltip).forEach((el) => {
        el.classList.remove("active");
      });
    }, 300);
    return document.execCommand("copy");
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
};

let anchorLinks = document.querySelectorAll(".anchor-links");
anchorLinks.forEach((item) => {
  item.addEventListener("click", copyToClipBoard);
});
