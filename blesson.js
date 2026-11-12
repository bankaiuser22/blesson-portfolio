// Mobile navigation
      const menuBtn = document.getElementById("menuBtn");
      const navLinks = document.getElementById("navLinks");

      menuBtn.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", isOpen);
        menuBtn.textContent = isOpen ? "✕" : "☰";
      });

      // Close menu after clicking a navigation link
      document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("active");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.textContent = "☰";
        });
      });

      // Automatically update copyright year
      document.getElementById("year").textContent = new Date().getFullYear();