const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counter = document.getElementById("counter");
let count = 1;

incrementButton.addEventListener("click", function () {
  if (count < 100) {
    count++;
    counter.textContent = count;
  }
  updateButtonStyles(count);
});

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
  updateButtonStyles(count);
});

function updateButtonStyles(count) {
  if (count % 2 == 0) {
    counter.classList.remove("odd");
    counter.classList.add("even");
  } else {
    counter.classList.remove("even");
    counter.classList.add("odd");
  }
}
