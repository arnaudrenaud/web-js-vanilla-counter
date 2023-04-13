let count = 0;

const renderCount = () => {
  const countElement = document.getElementById("count");
  countElement.innerText = count;
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
