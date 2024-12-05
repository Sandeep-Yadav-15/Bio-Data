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
  
