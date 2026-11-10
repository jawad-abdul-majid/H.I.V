const PASSWORD = "hiv671727";

const gate = document.getElementById("gate");
const site = document.getElementById("site");
const form = document.getElementById("gate-form");
const pw = document.getElementById("pw");
const error = document.getElementById("error");
const lockBtn = document.getElementById("lock");

function unlock() {
  gate.classList.add("hidden");
  site.classList.remove("hidden");
}

function lock() {
  try { sessionStorage.removeItem("hiv-unlocked"); } catch (e) {}
  site.classList.add("hidden");
  gate.classList.remove("hidden");
  pw.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pw.value === PASSWORD) {
    try { sessionStorage.setItem("hiv-unlocked", "1"); } catch (e) {}
    error.textContent = "";
    unlock();
  } else {
    error.textContent = "Wrong password.";
    form.classList.remove("shake");
    void form.offsetWidth; // restart animation
    form.classList.add("shake");
    pw.value = "";
  }
});

lockBtn.addEventListener("click", lock);

// Stay unlocked on refresh within the same tab
try {
  if (sessionStorage.getItem("hiv-unlocked") === "1") unlock();
} catch (e) {}
