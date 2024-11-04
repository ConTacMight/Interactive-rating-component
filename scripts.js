// Select all rating buttons and the submit button
const ratingButtons = document.querySelectorAll(".rating-number");
let selectedRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove color from any previously selected button
    ratingButtons.forEach(
      (btn) => (btn.style.backgroundColor = "var(--light-grey)")
    );
    ratingButtons.forEach((btn) => (btn.style.opacity = "0.4"));
    // Save the selected rating
    selectedRating = this.getAttribute("data-rating");

    // Change the color of the selected button
    this.style.backgroundColor = "var(--orange)";
    this.style.opacity = "1";

    console.log(`Selected Rating: ${selectedRating}`);
  });
});

const submitButton = document.querySelector(".rating-submit");
submitButton.addEventListener("click", function () {
  if (selectedRating) {
    // Update the selected rating in the "Thank You" state
    document.getElementById("selected-rating").textContent = selectedRating;

    // Hide the rating state and show the "Thank You" state
    document.querySelector(".rating-container").style.display = "none";
    document.querySelector(".thanks-container").style.display = "flex";
  } else {
    alert("Please select a rating before submitting");
  }
});
