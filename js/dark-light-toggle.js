document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark", savedTheme === "dark");
    themeToggle.value = savedTheme;

    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.value;
      document.body.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    });
    });

