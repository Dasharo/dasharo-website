const addressCopyBtn = document.getElementById("copy-address-button");
const mailCopyBtn = document.getElementById("copy-mail-button");
// const copySection1 = document.getElementById("copySection1");

const copyToClipBoard = (e) => {
  let text = e.currentTarget.getAttribute("data-clipboard-text");
  let textarea = document.createElement("textarea");
  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
};

addressCopyBtn.addEventListener("click", copyToClipBoard);
mailCopyBtn.addEventListener("click", copyToClipBoard);
// copySection1.addEventListener("click", copyToClipBoard);
