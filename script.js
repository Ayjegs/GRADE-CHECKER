var youFail = new Audio("fail.mp3");
var distinction = new Audio("distinction.mp3");
function checkScore() {
  if (score.value == "") {
    res.innerText = "Enter your score";
  } else if (score.value >= 0 && score.value < 40) {
    res.innerText = "F=FAIL";
    youFail.play();
  } else if (score.value >= 40 && score.value < 45) {
    res.innerText = "E=PASS";
  } else if (score.value >= 45 && score.value < 50) {
    res.innerText = "D=AVERAGE";
  } else if (score.value >= 50 && score.value < 60) {
    res.innerText = "C=GOOD";
  } else if (score.value >= 60 && score.value < 70) {
    res.innerText = "B=VERY GOOD";
  } else if (score.value >= 70 && score.value < 100) {
    res.innerText = "A=EXCELLENT";
    distinction.play();
  } else {
    res.innerText = "INVALID SCORE";
  }

  score.value = "";
}
function reset() {
  score.value = "";
  res.innerText = "YOUR GRADE";
  youFail.pause();
  distinction.pause();
}
