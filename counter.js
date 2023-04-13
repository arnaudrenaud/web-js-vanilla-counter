let count = 0;

const renderCount = () => {
  const countElement = document.getElementById("count");
  countElement.innerText = count;
  // if (count > 5) {
  //   countElement.classList.add("count-too-high");
  // } else {
  //   countElement.classList.remove("count-too-high");
  // }

  countElement.className = count > 5 ? "count-too-high" : "";

  const warningMessage = document.getElementById("warning-count-too-high");
  warningMessage.style.display = count > 5 ? "" : "none";
};

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", () => {
  count = count + 1;
  renderCount();
});

const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", () => {
  count = count - 1;
  renderCount();
});
