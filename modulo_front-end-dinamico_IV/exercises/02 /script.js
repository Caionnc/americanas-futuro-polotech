const interruptorButton = document.getElementById("interruptorButton");
let interruptorImg = (document.getElementById("interruptorImg").src =
  "./interruptor_0.png");

let lightBulbImg = (document.getElementById("lightBulb").src =
  "./lightBulbOff.png");
let interruptor = 0;

interruptorButton.addEventListener("click", function () {
  if (interruptor === 0) {
    updateButtonImg(interruptor);
    interruptor = 1;
  } else if (interruptor === 1) {
    updateButtonImg(interruptor);
    interruptor = 0;
  }
});

function updateButtonImg(interruptor) {
  if (interruptor === 0) {
    interruptorImg = document.getElementById("interruptorImg").src =
      "./interruptor_1.png";
    lightBulbImg = document.getElementById("lightBulb").src =
      "./lightBulbOn.png";
  } else if (interruptor === 1) {
    interruptorImg = document.getElementById("interruptorImg").src =
      "./interruptor_0.png";
    lightBulbImg = document.getElementById("lightBulb").src =
      "./lightBulbOff.png";
  }
}
