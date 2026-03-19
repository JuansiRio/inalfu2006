const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const openMenu = () => {
  navMenu.classList.remove("hidden");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Cerrar menu principal");
};

const closeMenu = () => {
  navMenu.classList.add("hidden");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu principal");
};

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
      return;
    }
    openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const testimonialItems = Array.from(document.querySelectorAll("[data-testimonial]"));
const prevButton = document.getElementById("testimonial-prev");
const nextButton = document.getElementById("testimonial-next");
const dotsContainer = document.getElementById("testimonial-dots");
let currentTestimonial = 0;
let autoPlayId = null;

const renderTestimonial = (nextIndex) => {
  currentTestimonial = nextIndex;
  testimonialItems.forEach((item, index) => {
    const isActive = index === currentTestimonial;
    item.classList.toggle("hidden", !isActive);
  });

  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((dot, index) => {
      const isActive = index === currentTestimonial;
      dot.setAttribute("aria-current", isActive ? "true" : "false");
      dot.classList.toggle("bg-emerald-600", isActive);
      dot.classList.toggle("bg-slate-300", !isActive);
    });
  }
};

const startAutoplay = () => {
  if (testimonialItems.length < 2) {
    return;
  }
  autoPlayId = window.setInterval(() => {
    const next = (currentTestimonial + 1) % testimonialItems.length;
    renderTestimonial(next);
  }, 6000);
};

const resetAutoplay = () => {
  if (autoPlayId) {
    window.clearInterval(autoPlayId);
  }
  startAutoplay();
};

if (testimonialItems.length && dotsContainer) {
  testimonialItems.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "h-2.5 w-2.5 rounded-full bg-slate-300";
    dot.setAttribute("aria-label", `Ir al testimonio ${index + 1}`);
    dot.addEventListener("click", () => {
      renderTestimonial(index);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });
  renderTestimonial(0);
}

if (prevButton && testimonialItems.length) {
  prevButton.addEventListener("click", () => {
    const previous = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    renderTestimonial(previous);
    resetAutoplay();
  });
}

if (nextButton && testimonialItems.length) {
  nextButton.addEventListener("click", () => {
    const next = (currentTestimonial + 1) % testimonialItems.length;
    renderTestimonial(next);
    resetAutoplay();
  });
}

startAutoplay();

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const phoneRegex = /^[+()\d\s-]{8,20}$/;

    if (!name || !phone || !message) {
      formFeedback.textContent = "Completa todos los campos para continuar.";
      formFeedback.className = "text-sm font-medium text-red-600";
      return;
    }

    if (!phoneRegex.test(phone)) {
      formFeedback.textContent = "Ingresa un telefono valido, por ejemplo +52 55 1234 5678.";
      formFeedback.className = "text-sm font-medium text-red-600";
      return;
    }

    formFeedback.textContent = "Gracias. Recibimos tu solicitud y te contactaremos muy pronto.";
    formFeedback.className = "text-sm font-medium text-emerald-700";
    contactForm.reset();
  });
}
