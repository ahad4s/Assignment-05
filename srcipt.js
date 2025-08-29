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

/*Coin Deduction and Call History*/
let coins = 100;
const coinElement = document.getElementById("coinCount");
const callHistory = document.getElementById("callHistory");
const clearBtn = document.getElementById("clearHistory");

document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    if (coins < 20) {
      alert("You don't have enough coin to call: minimum 20 coin required...");
      return; //
    }
    coins -= 20;
    coinElement.textContent = coins;

    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;

    alert("Calling " + serviceName + " " + serviceNumber);

    const now = new Date();
    const time = now.toLocaleTimeString();

    const entry = document.createElement("div");
    entry.className = "bg-neutral-50 p-5 rounded shadow flex justify-between border-b pb-2";
    entry.innerHTML = `
      <div>
        <p class="text-sm font-semibold">${serviceName}</p>
        <p class="text-xs text-gray-500">${serviceNumber}</p>
      </div>
      <span class="text-xs text-gray-400">${time}</span>
    `;
    callHistory.prepend(entry);
  });
});

clearBtn.addEventListener("click", () => {
  callHistory.innerHTML = "";
});