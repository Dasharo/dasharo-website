const cookiesInitialize = function () {
  const container = document.createElement("div");
  const link = document.createElement("strong");
  const hrefContent = window.location.origin + "/pages/policy";

  container.id = "cookies_info";
  container.innerHTML =
    "<h6>This website uses cookies</h6>" +
    '<p>The website uses information saved using cookies to ensure maximum convenience in using the website. If you agree to save the information stored in cookies, click on the "x" in the upper right corner of this information. If you do not agree, you can change the cookie settings in your browser: </p>' +
    '<a target="_blank" id="cookies-link" aria-label="Check Dasharo Policy">Check Dasharo Policy</a>';
  link.href = "#";
  link.title = "Close";
  link.innerHTML = "x";

  function clickHandler() {
    document.body.removeChild(container);
    localStorage.setItem("dasharo-cookies", "1");
  }

  link.addEventListener("click", clickHandler);

  container.appendChild(link);
  document.body.appendChild(container);

  let policyLink = document.getElementById("cookies-link");
  let att = document.createAttribute("href");
  att.value = hrefContent;
  policyLink.setAttributeNode(att);

  return true;
};

if (!localStorage.getItem("dasharo-cookies")) {
  cookiesInitialize();
}
