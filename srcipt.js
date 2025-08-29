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
/*Number copy*/
document.querySelectorAll(".copy-number").forEach(btn => {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.number);
    alert("Copied: " + btn.dataset.number);
   });
});
/*Copy Count*/
let copyCount = 0;
  const copyCountElement = document.getElementById("copyCount");

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btn.dataset.number);
      copyCount++;
      copyCountElement.textContent = copyCount;
    });
  });
/*calling function*/
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const serviceName = btn.dataset.name;
    alert("Calling " + serviceName);
  });
});
