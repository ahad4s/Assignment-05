/*heart count*/
let heartCount = 0;
const heartCountElement = document.getElementById("heartCount");
const favButtons = document.querySelectorAll(".heart-btn");

favButtons.forEach(button => {
    button.addEventListener("click", () => {
      heartCount++;
      heartCountElement.textContent = heartCount;
    });
});
