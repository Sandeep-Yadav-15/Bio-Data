// Display today's date dynamically in the footer
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  
    console.log("Bio Data Loaded Successfully");
  });
  
  // Add a hover effect to header elements for animation
  const headerElements = document.querySelectorAll("header h1, header p, .social-links a");
  
  headerElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.color = "#0077b5";
      element.style.transition = "color 0.3s ease";
    });
  
    element.addEventListener("mouseout", () => {
      element.style.color = "";
    });
  });
  