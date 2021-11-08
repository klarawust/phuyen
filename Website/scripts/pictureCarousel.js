var slideIndex = 0;
var timeoutID;
const slides = document.getElementsByClassName("slides");

function showImage(index) {
  slides[index].style.display = "block";
}

function hideImage(index) {
  slides[index].style.display = "none";
}

function incrementIndex() {
  hideImage(slideIndex);
  if (slideIndex != slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showImage(slideIndex);
  timeoutID = startTimer();
}

function decrementIndex() {
  hideImage(slideIndex);
  if (slideIndex != 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showImage(slideIndex);
  timeoutID = startTimer();
}

function startTimer() {
  clearTimeout(timeoutID);
  return setTimeout(incrementIndex, 5000);
}

showImage(slideIndex);
timeoutID = startTimer();


