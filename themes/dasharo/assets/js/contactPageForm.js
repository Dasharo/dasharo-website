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
        "https://dasharo.com/send",
        {
          to: to,
          name: name,
          user: user,
          subject: subject,
          mobile: mobile,
          text: text,
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
