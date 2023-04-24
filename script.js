const button = document.querySelector(".btn");
button.addEventListener("click", result);

const showButton = document.querySelector(".show-button");
showButton.addEventListener("click", showAnswers);

function result(e) {
  e.preventDefault();
  let point = 0;
  if (document.querySelector("#answer1").checked) {
    point++;
  }
  if (document.querySelector("#answer2").checked) {
    point++;
  }
  if (document.querySelector("#answer3").checked) {
    point++;
  }
  if (document.querySelector("#answer4").checked) {
    point++;
  }
  if (document.querySelector("#answer5").checked) {
    point++;
  }
  if (document.querySelector("#answer6").checked) {
    point++;
  }
  if (document.querySelector("#answer7").checked) {
    point++;
  }
  document.querySelector("#show").textContent = "You score: " + point + " / 7";
  document.querySelector("#show").style.display = "block";
}

function showAnswers(e) {
  e.preventDefault();


  const rightAnswer = document.querySelectorAll(".right-answer");
  rightAnswer.forEach(item => {
    item.classList.remove("right-answer");
    item.classList.add("rightAnswerShow");
  });
}

const selectedOne = document.querySelectorAll(".question-one");
const selectedTwo = document.querySelectorAll(".question-two");
const selectedThree = document.querySelectorAll(".question-three");
const selectedFour = document.querySelectorAll(".question-four");
const selectedFive = document.querySelectorAll(".question-five");
const selectedSix = document.querySelectorAll(".question-six");
const selectedSeven = document.querySelectorAll(".question-seven");

selectedOne.forEach(item => {
  item.addEventListener("click", () => {
    removeFocusOne();
    item.classList.add("selected");
  });
  removeFocusOne = () => {
    selectedOne.forEach(item => {
      item.classList.remove("selected");
    });
  };
});
selectedTwo.forEach(itemTwo => {
  itemTwo.addEventListener("click", () => {
    removeFocusTwo();
    itemTwo.classList.add("selected");
  });
  removeFocusTwo = () => {
    selectedTwo.forEach(itemTwo => {
      itemTwo.classList.remove("selected");
    });
  };
});
selectedThree.forEach(itemThree => {
  itemThree.addEventListener("click", () => {
    removeFocusThree();
    itemThree.classList.add("selected");
  });
  removeFocusThree = () => {
    selectedThree.forEach(itemThree => {
      itemThree.classList.remove("selected");
    });
  };
});
selectedFour.forEach(itemFour => {
  itemFour.addEventListener("click", () => {
    removeFocusFour();
    itemFour.classList.add("selected");
  });
  removeFocusFour = () => {
    selectedFour.forEach(itemFour => {
      itemFour.classList.remove("selected");
    });
  };
});
selectedFive.forEach(itemFive => {
  itemFive.addEventListener("click", () => {
    removeFocusFive();
    itemFive.classList.add("selected");
  });
  removeFocusFive = () => {
    selectedFive.forEach(itemFive => {
      itemFive.classList.remove("selected");
    });
  };
});
selectedSix.forEach(itemSix => {
  itemSix.addEventListener("click", () => {
    removeFocusSix();
    itemSix.classList.add("selected");
  });
  removeFocusSix = () => {
    selectedSix.forEach(itemSix => {
      itemSix.classList.remove("selected");
    });
  };
});
selectedSeven.forEach(itemSeven => {
  itemSeven.addEventListener("click", () => {
    removeFocusSeven();
    itemSeven.classList.add("selected");
  });
  removeFocusSeven = () => {
    selectedSeven.forEach(itemSeven => {
      itemSeven.classList.remove("selected");
    });
  };
});
