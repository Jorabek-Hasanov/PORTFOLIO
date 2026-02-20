/**
 * App.js - Main JavaScript Entry Point
 * Contains all interactive features: Smooth scroll, Mobile menu, Form validation, Scroll animations
 * Renders all modular components
 */

// Import all components
import { renderNavigation, initNavigation } from "./components/Navigation.js";
import { renderHero, initHeroAnimations } from "./components/Hero.js";
import { renderAbout, initAboutAnimations } from "./components/About.js";
import {
  renderSocialProof,
  initSocialProofAnimations,
} from "./components/SocialProof.js";
import {
  renderFeatures,
  initFeaturesAnimations,
} from "./components/Features.js";
import {
  renderSolutions,
  initSolutionsAnimations,
} from "./components/Solutions.js";
import {
  renderTechStack,
  initTechStackAnimations,
} from "./components/TechStack.js";
import { renderProcess, initProcessAnimations } from "./components/Process.js";
import {
  renderTestimonials,
  initTestimonialsAnimations,
} from "./components/Testimonials.js";
import {
  renderContact,
  initContactForm,
  initContactAnimations,
} from "./components/Contact.js";
import { renderFooter, initFooterAnimations } from "./components/Footer.js";

/**
 * Render all components into the DOM
 */
function renderApp() {
  // Render navigation
  const navContainer = document.getElementById("navigation-container");
  if (navContainer) {
    navContainer.innerHTML = renderNavigation();
  }

  // Render hero
  const heroContainer = document.getElementById("hero-container");
  if (heroContainer) {
    heroContainer.innerHTML = renderHero();
  }

  // Render about
  const aboutContainer = document.getElementById("about-container");
  if (aboutContainer) {
    aboutContainer.innerHTML = renderAbout();
  }

  // Render social proof
  const socialProofContainer = document.getElementById(
    "social-proof-container",
  );
  if (socialProofContainer) {
    socialProofContainer.innerHTML = renderSocialProof();
  }

  // Render features
  const featuresContainer = document.getElementById("features-container");
  if (featuresContainer) {
    featuresContainer.innerHTML = renderFeatures();
  }

  // Render solutions
  const solutionsContainer = document.getElementById("solutions-container");
  if (solutionsContainer) {
    solutionsContainer.innerHTML = renderSolutions();
  }

  // Render tech stack
  const techStackContainer = document.getElementById("tech-stack-container");
  if (techStackContainer) {
    techStackContainer.innerHTML = renderTechStack();
  }

  // Render process
  const processContainer = document.getElementById("process-container");
  if (processContainer) {
    processContainer.innerHTML = renderProcess();
  }

  // Render testimonials
  const testimonialsContainer = document.getElementById(
    "testimonials-container",
  );
  if (testimonialsContainer) {
    testimonialsContainer.innerHTML = renderTestimonials();
  }

  // Render contact
  const contactContainer = document.getElementById("contact-container");
  if (contactContainer) {
    contactContainer.innerHTML = renderContact();
  }

  // Render footer
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }
}

/**
 * Initialize all application features
 */
function initApp() {
  // Render all components
  renderApp();

  // Initialize navigation (mobile menu, burger button)
  initNavigation();

  // Initialize Hero section animations (page load)
  initHeroAnimations();

  // Initialize scroll-based section animations
  initAboutAnimations();
  initSocialProofAnimations();
  initFeaturesAnimations();
  initSolutionsAnimations();
  initTechStackAnimations();
  initProcessAnimations();
  initTestimonialsAnimations();
  initContactAnimations();
  initFooterAnimations();

  // Initialize contact form validation
  initContactForm();

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      lucide.createIcons();
    }, 100);
  }

  console.log("Portfolio App initialized successfully");
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Export for potential module usage
export default {
  init: initApp,
  render: renderApp,
};
