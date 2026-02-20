/**
 * Footer Component
 * Site footer with navigation and social links
 */

export function renderFooter() {
  return `
    <!-- Footer -->
    <footer class="relative z-10 bg-linear-to-b from-brand-black to-[#121212] border-t border-white/5 overflow-hidden">
        
        <!-- Main Footer -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                
                <!-- Left: Brand & Slogan -->
                <div class="footer-animate flex flex-col gap-4">
                    <div class="flex items-center gap-2 group cursor-pointer">
                        <div class="w-8 h-8 rounded-lg bg-linear-to-br from-brand-orange to-orange-700 flex items-center justify-center text-white shadow-glow">
                            <i data-lucide="layers" class="w-5 h-5"></i>
                        </div>
                        <span class="text-white font-medium text-lg tracking-tight group-hover:text-white/90 transition-colors">Portfolio</span>
                    </div>
                    <p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        <span class="text-white font-medium">AI Vibe Engineer</span><br class="hidden sm:inline">
                        Engineering the future of AI interfaces
                    </p>
                </div>
                
                <!-- Center: Navigation -->
                <div class="footer-animate flex flex-col items-center md:items-start gap-4 order-3 md:order-2">
                    <nav class="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
                        <a href="#product" class="text-sm text-zinc-500 hover:text-[#FF823C] transition-colors duration-300">Product</a>
                        <a href="#solution" class="text-sm text-zinc-500 hover:text-[#FF823C] transition-colors duration-300">Solution</a>
                        <a href="#about" class="text-sm text-zinc-500 hover:text-[#FF823C] transition-colors duration-300">About</a>
                        <a href="#contact" class="text-sm text-zinc-500 hover:text-[#FF823C] transition-colors duration-300">Contact</a>
                    </nav>
                </div>
                
                <!-- Right: Social Icons -->
                <div class="footer-animate flex justify-center md:justify-end gap-3 sm:gap-4 order-2 md:order-3">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 hover:text-[#FF823C] hover:border-[#FF823C]/30 transition-all duration-300 group">
                        <i data-lucide="linkedin" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 hover:text-[#FF823C] hover:border-[#FF823C]/30 transition-all duration-300 group">
                        <i data-lucide="github" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-500 hover:text-[#FF823C] hover:border-[#FF823C]/30 transition-all duration-300 group">
                        <i data-lucide="twitter" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                    </a>
                </div>
                
            </div>
        </div>
        
        <!-- Sub-Footer -->
        <div class="footer-animate border-t border-white/5">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                <p class="text-zinc-600 text-sm">
                    © 2026 AI Vibe Engineer. All rights reserved.
                </p>
                <div class="flex items-center gap-6">
                    <a href="#" class="text-sm text-zinc-600 hover:text-[#FF823C] transition-colors duration-300">Privacy Policy</a>
                    <a href="#" class="text-sm text-zinc-600 hover:text-[#FF823C] transition-colors duration-300">Terms of Service</a>
                </div>
            </div>
        </div>
        
        <!-- Back to Top Button -->
        <a href="#hero" class="footer-animate absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#FF823C] flex items-center justify-center text-white shadow-lg hover:bg-[#e65f00] hover:scale-110 transition-all duration-300 group">
            <i data-lucide="arrow-up" class="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"></i>
        </a>
        
    </footer>
  `;
}

/**
 * Initialize Footer section scroll animations
 */
export function initFooterAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const footer = entry.target;

          // Animate all footer elements with stagger
          const elements = footer.querySelectorAll(".footer-animate");
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 100);
          });

          observer.unobserve(footer);
        }
      });
    },
    { threshold: 0.15 },
  );

  const footer = document.querySelector("footer");
  if (footer) observer.observe(footer);
}

export default { render: renderFooter, init: initFooterAnimations };
