document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navMenu.contains(event.target)
      const isClickOnToggle = menuToggle.contains(event.target)
  
      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
      }
    })
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("header nav a, .footer-links a, .hero-content a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
        }
  
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll("section")
    const navItems = document.querySelectorAll(".nav-menu a")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navItems.forEach((item) => {
        item.classList.remove("active")
        if (item.getAttribute("href") === `#${current}`) {
          item.classList.add("active")
        }
      })
    })
  
    // Form validation and submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const subject = document.getElementById("subject").value.trim()
        const message = document.getElementById("message").value.trim()
  
        // Basic validation
        if (name === "" || email === "" || subject === "" || message === "") {
          alert("Please fill in all fields")
          return
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address")
          return
        }
  
        // If validation passes, you would normally send the form data to a server
        // For this example, we'll just show a success message
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
      })
    }
  
    // Scroll reveal animation
    const revealElements = document.querySelectorAll(
      ".section-header, .about-content, .service-card, .location-content, .contact-content",
    )
  
    function checkScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementTop < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial styles for animation
    revealElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })
  
    // Check scroll position on load and scroll
    window.addEventListener("load", checkScroll)
    window.addEventListener("scroll", checkScroll)
  
    // Header scroll effect
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
        header.style.background = "#fff"
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
        header.style.background = "#fff"
      }
    })
  })
  
  