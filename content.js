// Create a container for the button with fixed positioning
const container = document.createElement("div");
container.id = "sold-listings-container";
container.style.position = "fixed";
container.style.top = "180px";      // 180 pixels from the top (60px + 120px)
container.style.right = "0";
container.style.zIndex = "10000";
container.style.padding = "10px";

// Create the button element
const button = document.createElement("button");
button.id = "sold-listings-button";
button.textContent = "Sold Listings";

// Style the button to make it big and noticeable
button.style.fontSize = "18px";
button.style.padding = "20px 30px";
button.style.backgroundColor = "#298034"; // Updated background color
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";

// Add the click event handler
button.addEventListener("click", () => {
  // Modify the URL to add a query parameter for sold listings.
  const url = new URL(window.location.href);
  url.searchParams.set("LH_Sold", "1");
  window.location.href = url.toString();
});

// Append the button to the container, and the container to the body
container.appendChild(button);
document.body.appendChild(container);
