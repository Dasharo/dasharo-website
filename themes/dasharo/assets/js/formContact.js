var getAQuote = [],
  whatStage = [],
  approximateBudget = [];

function getValue(className, stepName) {
  let mapInputs = [...document.getElementsByClassName(className)];
  mapInputs.map((element) =>
    element.addEventListener("click", function () {
      stepName.splice(0, 1, this.value);

      if (stepName.includes("I need to get more information about")) {
        let newObj = [
          ...document.querySelectorAll(".quote__content-item-link"),
        ];
        newObj.map((link) => link.classList.add("white"));
      }
    })
  );
}

getValue("quote__input-first-question", this.getAQuote);
getValue("quote__input-second-question", this.whatStage);
getValue("quote__input-third-question", this.approximateBudget);

function handleSelectedCheckbox(className, stepName) {
  let mapLabels = [...document.getElementsByClassName(className)];
  mapLabels.map((element) =>
    element.addEventListener("click", function () {
      mapLabels.map((material) => material.classList.remove("chosen"));
      this.classList.add("chosen");
      if (stepName.includes("I want to buy existing Dasharo Product")) {
        document
          .querySelector("div.downloadDatasheets")
          .classList.remove("show");
      }
    })
  );
}

handleSelectedCheckbox("quote__label-first-question", this.getAQuote);
handleSelectedCheckbox("quote__label-second-question", this.whatStage);
handleSelectedCheckbox("quote__label-third-question", this.approximateBudget);

function cleanInputs(className) {
  let classToRemove = "chosen";
  if (className == "form-group") {
    classToRemove = "focused";
  }
  let mapInputs = [...document.getElementsByClassName(className)];
  mapInputs.map((element) => element.classList.remove(classToRemove));
}

// let mapFormEl = [...document.getElementsByClassName("form-group")];
// mapFormEl.map(element => element.classList.remove("focused"));

document.querySelector(".buyExisting").addEventListener("click", function () {
  document.querySelector("div.downloadDatasheets").classList.add("show");
});

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").style.pointerEvents = "none";
    document.getElementById("nextBtn").style.opacity = 0;
  } else {
    document.getElementById("nextBtn").style.opacity = 1;
    document.getElementById("nextBtn").style.pointerEvents = "visible";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

$("input").focus(function () {
  $(this).parents(".form-group").addClass("focused");
});

$("input").blur(function () {
  let inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".form-group").removeClass("focused");
  } else {
    $(this).addClass("filled");
  }
});

$("#textarea1").focus(function () {
  $(this).parents(".form-group").addClass("focused");
});

$("#textarea1").blur(function () {
  let textareaValue = $(this).val();
  if (textareaValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".form-group").removeClass("focused");
  } else {
    $(this).addClass("filled");
  }
});

$(document).ready(function () {
  let name_form = document.getElementById("name"),
    user_email = document.getElementById("user_email"),
    subject_form = document.getElementById("subject"),
    textarea1_form = document.getElementById("textarea1"),
    emailSent = document.getElementById("email-sent"),
    mobile = document.getElementById("mobile");

  const validateEmail = function (data) {
    let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (testData.test(data)) {
      return true;
    }
    return false;
  };

  const handleInvalidForm = function () {
    emailSent.classList.add("validation-err-msg");
    emailSent.innerHTML = "Do not leave the field empty!";
    setTimeout(function () {
      emailSent.innerHTML = "";
      emailSent.classList.remove("validation-err-msg");
    }, 1500);
  };

  const handleInvalidEmail = function () {
    user_email.classList.add("validation-err");
    user_email.value = "Invalid email address!";
    setTimeout(function () {
      user_email.value = "";
      user_email.classList.remove("validation-err");
    }, 1500);
  };

  const handleValidForm = function () {
    emailSent.innerHTML = "Email has been sent!";
    setTimeout(function () {
      emailSent.innerHTML = "";
      name_form.value = "";
      user_email.value = "";
      subject_form.value = "";
      mobile.innerHTML = "";
      mobile.value = "";
      textarea1_form.value = "";
      cleanInputs("label_checkbox");
      cleanInputs("quote__label-third-question");
      cleanInputs("form-group");
    }, 2500);
  };

  var user, to, name, subject, text;
  $("#send_email").click(function () {
    event.preventDefault();
    to = "contact@dasharo.com";
    name = $("#name").val();
    user = $("#user_email").val();
    subject = $("#subject").val();
    mobile = $("#mobile").val();
    text = $("#textarea1").val();
    getAQuote = getAQuote;
    whatStage = whatStage;
    approximateBudget = approximateBudget;

    if (
      name_form.value == "" ||
      user_email.value == "" ||
      subject_form.value == "" ||
      textarea1_form.value == ""
    ) {
      handleInvalidForm();
      return console.log("not sent");
    } else if (!validateEmail(user_email.value)) {
      handleInvalidEmail();
    } else {
      $.post(
        "http://localhost:8000/send",
        {
          to: to,
          name: name,
          user: user,
          subject: subject,
          mobile: mobile,
          text: text,
          getAQuote: getAQuote,
          whatStage: whatStage,
          approximateBudget: approximateBudget,
        },
        function (data) {
          if (data == "sent") {
            console.log("Email sent");
            handleValidForm();
          }
        },

        "text"
      );
    }

    var user, to, name, subject, text;
    $("#send_email").click(function () {
      event.preventDefault();
      to = "contact@3mdeb.com'";
      name = $("#name").val();
      user = $("#user_email").val();
      subject = $("#subject").val();
      mobile = $("#mobile").val();
      text = $("#textarea1").val();
      getAQuote = getAQuote;
      whatStage = whatStage;
      approximateBudget = approximateBudget;

      if (
        name_form.value == "" ||
        user_email.value == "" ||
        subject_form.value == "" ||
        textarea1_form.value == ""
      ) {
        handleInvalidForm();
        return console.log("not sent");
      } else if (!validateEmail(user_email.value)) {
        handleInvalidEmail();
      } else {
        $.post(
          "http://localhost:8000/send",
          {
            to: to,
            name: name,
            user: user,
            subject: subject,
            mobile: mobile,
            text: text,
            getAQuote: getAQuote,
            whatStage: whatStage,
            approximateBudget: approximateBudget,
          },
          function (data) {
            if (data == "sent") {
              console.log("Email sent");
              handleValidForm();
            }
          },

          "text"
        );
      }
    });
  });
});
