/**
 * Navigation Component
 * Handles desktop and mobile navigation
 */

export function renderNavigation() {
  return `
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-nav border-b border-brand-border overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center gap-2 group cursor-pointer">
                <div class="w-8 h-8 rounded-lg bg-linear-to-br from-brand-orange to-orange-700 flex items-center justify-center text-[#FF4D00] shadow-glow">
                    <i data-lucide="layers" class="w-5 h-5"></i>
                </div>
                <span class="text-white font-medium text-lg tracking-tight group-hover:text-white/90 transition-colors">Portfolio.</span>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
                <a href="#hero" class="nav-link text-sm font-normal">Home</a>
                <a href="#solutions" class="nav-link text-sm font-normal">Solutions</a>
                <a href="#about" class="nav-link text-sm font-normal">About</a>
                <a href="#process" class="nav-link text-sm font-normal">Process</a>
                <a href="#tech-stack" class="nav-link text-sm font-normal">Tech Stack</a>
                <a href="#testimonials" class="nav-link text-sm font-normal">Testimonials</a>
            </div>

            <!-- Desktop Contact Button -->
            <div class="hidden md:flex items-center gap-4">
                <a href="#contact" class="text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-brand-border px-4 py-2 rounded-lg transition-all flex items-center gap-2 group">
                    Contact
                </a>
            </div>

            <!-- Mobile Burger Button -->
            <button id="burgerBtn" class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer" aria-label="Toggle menu">
                <span class="burger-line w-6 h-0.5 bg-white rounded-full"></span>
                <span class="burger-line w-6 h-0.5 bg-white rounded-full"></span>
                <span class="burger-line w-6 h-0.5 bg-white rounded-full"></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobileMenuOverlay" class="mobile-menu-overlay fixed inset-0 bg-black/60 z-40 md:hidden"></div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="mobile-menu fixed top-0 left-0 w-72 h-full bg-brand-dark z-50 md:hidden border-r border-brand-border">
        <div class="p-6">
            <!-- Mobile Menu Header -->
            <div class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg bg-linear-to-br from-brand-orange to-orange-700 flex items-center justify-center text-[#FF4D00]">
                        <i data-lucide="layers" class="w-5 h-5"></i>
                    </div>
                    <span class="text-white font-medium text-lg">Portfolio.</span>
                </div>
                <button id="closeMobileMenu" class="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            
            <!-- Mobile Menu Links -->
            <nav class="flex flex-col gap-4">
                <a href="#hero" class="mobile-nav-link text-base font-normal text-zinc-400 hover:text-[#FF823C] transition-colors py-2 border-b border-brand-border">Home</a>
                <a href="#solutions" class="mobile-nav-link text-base font-normal text-zinc-400 hover:text-[#FF823C] transition-colors py-2 border-b border-brand-border">Solutions</a>
                <a href="#about" class="mobile-nav-link text-base font-normal text-zinc-400 hover:text-[#FF823C] transition-colors py-2 border-b border-brand-border">About</a>
                <a href="#process" class="mobile-nav-link text-base font-normal text-zinc-400 hover:text-[#FF823C] transition-colors py-2 border-b border-brand-border">Process</a>
                <a href="#tech-stack" class="mobile-nav-link text-base font-normal text-zinc-400 hover:text-[#FF823C] transition-colors py-2 border-b border-brand-border">Tech Stack</a>
                <a href="#testimonials" class="mobile-nav-link text-base font-normal text-zinc-400 hover:text-[#FF823C] transition-colors py-2 border-b border-brand-border">Testimonials</a>
                <a href="#contact" class="mobile-nav-link text-base font-medium text-white bg-brand-orange hover:bg-[#e65f00] transition-colors py-3 px-4 rounded-lg mt-4 text-center">Contact</a>
            </nav>
        </div>
    </div>
    `;
}

/**
 * Initialize navigation event handlers
 */
export function initNavigation() {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const closeMobileMenu = document.getElementById("closeMobileMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // If elements don't exist, exit early
  if (!burgerBtn || !mobileMenu) {
    return;
  }

  // Smooth scroll to section on nav link click
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Open mobile menu
  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.add("open");
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add("open");
    burgerBtn.classList.add("burger-open");
    document.body.style.overflow = "hidden";
  });

  // Close mobile menu function
  function closeMenu() {
    mobileMenu.classList.remove("open");
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("open");
    burgerBtn.classList.remove("burger-open");
    document.body.style.overflow = "";
  }

  // Close mobile menu button
  if (closeMobileMenu) {
    closeMobileMenu.addEventListener("click", closeMenu);
  }

  // Close on overlay click
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMenu);
  }

  // Close on nav link click
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });
}

export default { render: renderNavigation, init: initNavigation };
