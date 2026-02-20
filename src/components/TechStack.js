/**
 * TechStack Component
 * Technical Ecosystem section with technology cards
 */

export function renderTechStack() {
  return `
    <!-- Tech Stack & Ecosystem Section -->
    <section id="tech-stack" class="relative z-10 py-16 md:py-24 bg-brand-black overflow-hidden">
        <!-- Ambient glow effect -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[250px] md:h-[400px] bg-brand-orange/5 blur-[100px] rounded-full"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-16">
                <h2 class="tech-title text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 md:mb-3 tracking-tight">
                    Technical Ecosystem
                </h2>
                <p class="tech-title text-brand-orange text-base md:text-lg font-light">
                    Advanced AI & Dev Tools
                </p>
            </div>
            
            <!-- Tech Stack Grid - Responsive auto-fit -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));">
                
                <!-- OpenAI - Inline SVG for reliability -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <svg class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073Z"/>
                            <path d="M13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494Z"/>
                            <path d="M13.26 17.306v2.268a.776.776 0 0 1-.405.677l-4.522 2.611a.771.771 0 0 1-.785-.012l.142-.14 4.783-2.758a.771.771 0 0 1 .78-.038l.067.041Z"/>
                            <path d="M10.872 9.52l4.526-2.614a.771.771 0 0 1 .785.012l.14.14-.14.142-4.779 2.758a.776.776 0 0 1-.405.681l.009 4.496-2.223-1.269a.077.077 0 0 1-.028-.054v-.072l.013-.053 2.044-1.178v-2.25l-.013-.057Z"/>
                        </svg>
                    </div>
                    <span class="text-white font-semibold mt-4">OpenAI</span>
                    <span class="text-zinc-500 text-sm">GPT-4</span>
                </div>

                <!-- Anthropic -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/anthropic/white" alt="Anthropic" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Anthropic</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">Claude</span>
                </div>

                <!-- LangChain -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/langchain/white" alt="LangChain" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">LangChain</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">AI Framework</span>
                </div>

                <!-- PyTorch -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/pytorch/white" alt="PyTorch" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">PyTorch</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">ML Library</span>
                </div>

                <!-- Next.js -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Next.js</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">React Framework</span>
                </div>

                <!-- React -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/react/white" alt="React" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">React</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">UI Library</span>
                </div>

                <!-- Tailwind CSS -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/tailwindcss/white" alt="Tailwind CSS" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Tailwind CSS</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">Styling</span>
                </div>

                <!-- TypeScript -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/typescript/white" alt="TypeScript" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">TypeScript</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">Language</span>
                </div>

                <!-- Supabase -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/supabase/white" alt="Supabase" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Supabase</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">Backend</span>
                </div>

                <!-- Docker -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/docker/white" alt="Docker" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Docker</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">Containerization</span>
                </div>

                <!-- GitHub -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">GitHub</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">CI/CD</span>
                </div>

                <!-- Vercel -->
                <div class="tech-icon group flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#111111] border border-zinc-800 transition-all duration-500 ease-in-out hover:scale-105 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <div class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/vercel/white" alt="Vercel" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12">
                    </div>
                    <span class="text-white font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Vercel</span>
                    <span class="text-zinc-500 text-xs sm:text-sm">Deployment</span>
                </div>

            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize Tech Stack section scroll animations
 */
export function initTechStackAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Animate title
          const titles = section.querySelectorAll(".tech-title");
          titles.forEach((title) => {
            title.classList.add("animate");
          });

          // Get all icons
          const icons = section.querySelectorAll(".tech-icon");

          // Calculate center position for gravity pull effect
          const centerX = window.innerWidth / 2;
          const centerY =
            section.getBoundingClientRect().top + section.offsetHeight / 2;

          // Animate icons with gravity pull effect
          icons.forEach((icon, index) => {
            const rect = icon.getBoundingClientRect();
            const iconCenterX = rect.left + rect.width / 2;
            const iconCenterY = rect.top + rect.height / 2;

            // Calculate direction to center
            const dx = (centerX - iconCenterX) * 0.5;
            const dy = (centerY - iconCenterY) * 0.3;

            // Set CSS variables for gravity pull direction
            icon.style.setProperty("--gx", `${dx}px`);
            icon.style.setProperty("--gy", `${dy}px`);

            // Animate with stagger
            setTimeout(
              () => {
                icon.classList.add("animate");

                // Add floating animation after entrance completes
                setTimeout(() => {
                  icon.classList.add("floating");
                }, 1000);
              },
              50 + index * 50,
            );
          });

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  const techStackSection = document.getElementById("tech-stack");
  if (techStackSection) observer.observe(techStackSection);
}

export default { render: renderTechStack, init: initTechStackAnimations };
