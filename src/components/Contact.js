/**
 * Contact Component
 * Contact section with form and validation
 */

export function renderContact() {
  return `
    <!-- Contact Section -->
    <section id="contact" class="relative z-10 py-16 md:py-24 bg-brand-black overflow-hidden">
        <!-- Ambient glow effect -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[250px] md:h-[500px] bg-brand-orange/5 blur-[120px] rounded-full"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-16">
                <span class="contact-text text-brand-orange text-sm font-medium mb-2 block">Get in Touch</span>
                <h2 class="contact-text text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                    Let's <span class="text-brand-orange">Connect</span>
                </h2>
            </div>
            
            <!-- Split Layout: 50/50 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                
                <!-- Left Side: Contact Info -->
                <div class="contact-text flex flex-col justify-center">
                    <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 tracking-tight">
                        Let's build the <span class="text-brand-orange">future</span> together
                    </h3>
                    <p class="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed font-light">
                        Have a project in mind? Let's discuss how we can transform your vision into reality with AI-powered solutions.
                    </p>
                    
                    <!-- Contact Links -->
                    <div class="space-y-4">
                        <!-- Email -->
                        <a href="mailto:hello@aivibeengineer.com" class="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div class="w-10 h-10 rounded-lg border border-brand-border bg-brand-dark flex items-center justify-center group-hover:border-brand-orange/30 transition-colors">
                                <i data-lucide="mail" class="w-5 h-5 text-brand-orange"></i>
                            </div>
                            <span class="text-base">hello@aivibeengineer.com</span>
                        </a>
                        
                        <!-- LinkedIn -->
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div class="w-10 h-10 rounded-lg border border-brand-border bg-brand-dark flex items-center justify-center group-hover:border-brand-orange/30 transition-colors">
                                <i data-lucide="linkedin" class="w-5 h-5 text-brand-orange"></i>
                            </div>
                            <span class="text-base">LinkedIn</span>
                        </a>
                        
                        <!-- GitHub -->
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div class="w-10 h-10 rounded-lg border border-brand-border bg-brand-dark flex items-center justify-center group-hover:border-brand-orange/30 transition-colors">
                                <i data-lucide="github" class="w-5 h-5 text-brand-orange"></i>
                            </div>
                            <span class="text-base">GitHub</span>
                        </a>
                        
                        <!-- X (Twitter) -->
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                            <div class="w-10 h-10 rounded-lg border border-brand-border bg-brand-dark flex items-center justify-center group-hover:border-brand-orange/30 transition-colors">
                                <i data-lucide="twitter" class="w-5 h-5 text-brand-orange"></i>
                            </div>
                            <span class="text-base">X</span>
                        </a>
                    </div>
                </div>
                
                <!-- Right Side: Interactive Form -->
                <div class="contact-form relative">
                    <!-- Background Glow -->
                    <div class="absolute -inset-4 bg-linear-to-br from-brand-orange/10 via-transparent to-transparent blur-2xl opacity-50"></div>
                    
                    <!-- Form Container -->
                    <div class="relative bg-[#0F0F0F] border border-brand-border rounded-2xl p-6 md:p-8">
                        <form id="contactForm" class="space-y-6" novalidate>
                            <!-- Full Name -->
                            <div class="contact-input relative">
                                <label for="fullName" class="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    placeholder="John Doe"
                                    class="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF823C] focus:shadow-[0_0_15px_rgba(255,130,60,0.3)] transition-all duration-300"
                                >
                                <p class="error-message hidden mt-2 text-sm text-red-400 items-center gap-1">
                                    <i data-lucide="alert-circle" class="w-4 h-4"></i>
                                    <span>Please enter your full name</span>
                                </p>
                            </div>
                            
                            <!-- Email Address -->
                            <div class="contact-input relative">
                                <label for="email" class="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="john@example.com"
                                    class="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF823C] focus:shadow-[0_0_15px_rgba(255,130,60,0.3)] transition-all duration-300"
                                >
                                <p class="error-message hidden mt-2 text-sm text-red-400 items-center gap-1">
                                    <i data-lucide="alert-circle" class="w-4 h-4"></i>
                                    <span>Please enter a valid email address</span>
                                </p>
                            </div>
                            
                            <!-- Message -->
                            <div class="contact-input relative">
                                <label for="message" class="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    class="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF823C] focus:shadow-[0_0_15px_rgba(255,130,60,0.3)] transition-all duration-300 resize-none"
                                ></textarea>
                                <p class="error-message hidden mt-2 text-sm text-red-400 items-center gap-1">
                                    <i data-lucide="alert-circle" class="w-4 h-4"></i>
                                    <span>Please enter your message</span>
                                </p>
                            </div>
                            
                            <!-- Submit Button -->
                            <button 
                                type="submit" 
                                class="contact-button w-full bg-brand-orange hover:bg-[#e65f00] text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,130,60,0.4)] active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <i data-lucide="send" class="w-4 h-4"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  `;
}

/**
 * Show toast notification
 */
function showToast(message, type = "success") {
  // Remove existing toast if any
  const existingToast = document.getElementById("toast-notification");
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-y-0 opacity-100 ${
    type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
  }`;
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <i data-lucide="${type === "success" ? "check-circle" : "alert-circle"}" class="w-5 h-5"></i>
      <span class="font-medium">${message}</span>
    </div>
  `;

  document.body.appendChild(toast);

  // Re-initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate-y-2";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * Initialize contact form validation
 */
export function initContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll("input, textarea");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate single field
  function validateField(field) {
    const errorElement = field.parentElement.querySelector(".error-message");
    let isValid = true;

    // Remove error styling
    field.classList.remove("border-red-500");

    if (field.id === "fullName") {
      isValid = field.value.trim().length > 0;
    } else if (field.id === "email") {
      isValid = emailRegex.test(field.value.trim());
    } else if (field.id === "message") {
      isValid = field.value.trim().length > 0;
    }

    // Show/hide error message
    if (!isValid && field.value.trim() !== "") {
      errorElement.classList.remove("hidden");
      errorElement.style.display = "flex";
      field.classList.add("border-red-500");
    } else {
      errorElement.classList.add("hidden");
      errorElement.style.display = "";
    }

    return isValid;
  }

  // Real-time validation on blur
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    // Clear error on input
    input.addEventListener("input", function () {
      const errorElement = this.parentElement.querySelector(".error-message");
      if (errorElement && !errorElement.classList.contains("hidden")) {
        errorElement.classList.add("hidden");
        errorElement.style.display = "";
        this.classList.remove("border-red-500");
      }
    });
  });

  // Form submission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let isFormValid = true;

    // Validate all fields
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Get form data
      const formData = {
        fullname: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: "Contact Form Submission", // Default subject
        message: document.getElementById("message").value.trim(),
      };

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Show success toast notification
          showToast("Your message has been sent!", "success");

          // Reset form
          form.reset();
        } else {
          const errorData = await response.json();
          showToast(
            errorData.detail || "Failed to send message. Please try again.",
            "error",
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        showToast(
          "Network error. Please check if the server is running.",
          "error",
        );
      } finally {
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      }
    }
  });
}

/**
 * Initialize Contact section scroll animations
 */
export function initContactAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Animate text content
          const textElements = section.querySelectorAll(".contact-text");
          textElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 100);
          });

          // Animate form
          const form = section.querySelector(".contact-form");
          if (form) {
            setTimeout(() => {
              form.classList.add("animate");
            }, 300);
          }

          // Animate input fields with stagger
          const inputs = section.querySelectorAll(".contact-input");
          inputs.forEach((input, index) => {
            setTimeout(
              () => {
                input.classList.add("animate");
              },
              500 + index * 100,
            );
          });

          // Animate button
          const button = section.querySelector(".contact-button");
          if (button) {
            setTimeout(() => {
              button.classList.add("animate");
            }, 900);
          }

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  const contactSection = document.getElementById("contact");
  if (contactSection) observer.observe(contactSection);
}

export default {
  render: renderContact,
  init: initContactForm,
  initAnimations: initContactAnimations,
};
