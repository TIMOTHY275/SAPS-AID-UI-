// Handle tab switching
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove 'active' from all tabs and contents
      tabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(tc => tc.classList.remove("active"));

      // Add 'active' to the clicked tab and the corresponding content
      tab.classList.add("active");
      const tabName = tab.getAttribute("data-tab");
      document.getElementById(tabName).classList.add("active");
    });
  });
});
