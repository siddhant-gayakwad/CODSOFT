function learnMore() {
  window.scrollTo({
    top: document.querySelector(".about").offsetTop,
    behavior: "smooth",
  });
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert(
      "Thank you, " +
        name +
        "! We will respond to your message at " +
        email +
        " soon."
    );
  });
function toggleEvents() {
  var eventsSection = document.getElementById("events");
  if (
    eventsSection.style.display === "none" ||
    eventsSection.style.display === ""
  ) {
    eventsSection.style.display = "block";
  } else {
    eventsSection.style.display = "none";
  }
}
