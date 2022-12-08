const dataInputs = document.querySelectorAll(
  ".quote__input-first-question, .quote__input-second-question, .quote__input-third-question"
);
const dataLabels = document.querySelectorAll(".quote__label-third-question");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("send_email");
const allChoices = [];
const userChoices = [
  {
    id: 1,
    question: "Specify a quote",
    choice: "",
  },
  {
    id: 2,
    question: "What stage are you at?",
    choice: "",
  },
  {
    id: 3,
    question: "Approximate trading volume",
    choice: "",
  },
];
let clicked = false;

const sendData = () => {
  const data = {
    question1: "Specify a quote",
    question2: "What stage are you at?",
    question3: "Approximate trading volume",
    choice1: userChoices[0].choice,
    choice2: userChoices[1].choice,
    choice3: userChoices[2].choice,
  };
  fetch("https://dasharo.com/activity", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const checkIfSubmitIsClicked = () => {
  if (userChoices.every((item) => item.choice)) {
    const check = () => {
      if (!clicked) {
        sendData();
      } else return;
    };
    setTimeout(check, 60000);
  } else return;
};

const setChoices = () => {
  const firstChoicesSet = [];
  const secondChoicesSet = [];
  const thirdChoicesSet = [];

  dataInputs.forEach((item) =>
    item.classList.contains("quote__input-first-question")
      ? firstChoicesSet.push(item)
      : item.classList.contains("quote__input-second-question")
      ? secondChoicesSet.push(item)
      : null
  );

  thirdChoicesSet.push(...dataLabels);

  allChoices.push(
    [...firstChoicesSet],
    [...secondChoicesSet],
    [...thirdChoicesSet]
  );
};

setChoices();

allChoices.forEach((item) => {
  item.forEach((el) =>
    el.addEventListener("click", () =>
      el.classList.contains("quote__input-first-question")
        ? (userChoices[0].choice = el.value)
        : el.classList.contains("quote__input-second-question")
        ? (userChoices[1].choice = el.value)
        : el.classList.contains("quote__label-third-question")
        ? (userChoices[2].choice = el.children[0].value)
        : null
    )
  );
});

nextBtn.addEventListener("click", checkIfSubmitIsClicked);
submitBtn.addEventListener("click", () => (clicked = true));

window.addEventListener("beforeunload", (e) => {
  if (userChoices.every((item) => item.choice) && !clicked) {
    e.returnValue = `Are you sure you want to leave?`;
    sendData();
  }
});
