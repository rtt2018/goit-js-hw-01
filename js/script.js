const firstResButton = document.getElementById("first-task-res-button");
const quantityField = document.getElementById("quantity");
const pricePerDroidField = document.getElementById("pricePerDroid");
const resField = document.getElementById("first-task-result-field");

firstResButton.addEventListener("click", () => {
  resField.value = makeTransaction(
    quantityField.value,
    pricePerDroidField.value
  );
});
