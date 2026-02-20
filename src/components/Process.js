/**
 * Process Component
 * Engineering Workflow section with animated process cards
 */

export function renderProcess() {
  return `
    <!-- Engineering Workflow Section -->
    <section class="relative z-10 py-16 md:py-24 bg-brand-black overflow-hidden" id="process">
        <!-- Ambient glow effect -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[250px] md:h-[500px] bg-brand-orange/5 blur-[100px] rounded-full"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-16">
                <h2 class="process-title text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 md:mb-3 tracking-tight">
                    Engineering <span class="text-[#FF823C]">Workflow</span>
                </h2>
                <p class="process-title text-zinc-500 text-base md:text-lg font-light">
                    Four steps to transform your vision into reality
                </p>
            </div>
            
            <!-- Process Steps Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 relative">
                
                <!-- Connecting Line (Desktop Only) with path drawing -->
                <div class="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-px -translate-y-1/2 z-0">
                    <svg class="w-full h-full" viewBox="0 0 100 1" preserveAspectRatio="none">
                        <line class="process-line" x1="0" y1="0" x2="100" y2="0" stroke="#FF823C" stroke-width="2" stroke-dasharray="1000" stroke-dashoffset="1000"/>
                    </svg>
                </div>
                
                <!-- Step 1: Discovery -->
                <div class="process-card-anim relative z-10 group" style="transition-delay: 0ms;">
                    <!-- Large transparent number -->
                    <div class="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FF823C] process-number opacity-20 select-none">01</div>
                    
                    <!-- Card -->
                    <div class="relative bg-[#121212] border border-brand-border rounded-lg p-6 h-full transition-all duration-300 hover:border-[#FF823C]/50">
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-lg border border-[#FF823C]/20 bg-[#FF823C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i data-lucide="search" class="w-6 h-6 text-[#FF823C]"></i>
                        </div>
                        
                        <!-- Content -->
                        <h3 class="text-xl font-medium text-white mb-2 tracking-tight">Discovery</h3>
                        <p class="text-sm text-zinc-500 leading-relaxed">
                            Define AI strategy and analyze requirements to build the right foundation.
                        </p>
                    </div>
                </div>
                
                <!-- Step 2: Architecture -->
                <div class="process-card-anim relative z-10 group" style="transition-delay: 150ms;">
                    <!-- Large transparent number -->
                    <div class="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FF823C] process-number opacity-20 select-none">02</div>
                    
                    <!-- Card -->
                    <div class="relative bg-[#121212] border border-brand-border rounded-lg p-6 h-full transition-all duration-300 hover:border-[#FF823C]/50">
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-lg border border-[#FF823C]/20 bg-[#FF823C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i data-lucide="layout" class="w-6 h-6 text-[#FF823C]"></i>
                        </div>
                        
                        <!-- Content -->
                        <h3 class="text-xl font-medium text-white mb-2 tracking-tight">Architecture</h3>
                        <p class="text-sm text-zinc-500 leading-relaxed">
                            Plan the system structure and integration of AI models for optimal performance.
                        </p>
                    </div>
                </div>
                
                <!-- Step 3: Engineering -->
                <div class="process-card-anim relative z-10 group" style="transition-delay: 300ms;">
                    <!-- Large transparent number -->
                    <div class="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FF823C] process-number opacity-20 select-none">03</div>
                    
                    <!-- Card -->
                    <div class="relative bg-[#121212] border border-brand-border rounded-lg p-6 h-full transition-all duration-300 hover:border-[#FF823C]/50">
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-lg border border-[#FF823C]/20 bg-[#FF823C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i data-lucide="code" class="w-6 h-6 text-[#FF823C]"></i>
                        </div>
                        
                        <!-- Content -->
                        <h3 class="text-xl font-medium text-white mb-2 tracking-tight">Engineering</h3>
                        <p class="text-sm text-zinc-500 leading-relaxed">
                            Clean code, high speed and perfect UI/UX for exceptional experiences.
                        </p>
                    </div>
                </div>
                
                <!-- Step 4: Optimization -->
                <div class="process-card-anim relative z-10 group" style="transition-delay: 450ms;">
                    <!-- Large transparent number -->
                    <div class="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FF823C] process-number opacity-20 select-none">04</div>
                    
                    <!-- Card -->
                    <div class="relative bg-[#121212] border border-brand-border rounded-lg p-6 h-full transition-all duration-300 hover:border-[#FF823C]/50">
                        <!-- Icon -->
                        <div class="w-12 h-12 rounded-lg border border-[#FF823C]/20 bg-[#FF823C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i data-lucide="settings-2" class="w-6 h-6 text-[#FF823C]"></i>
                        </div>
                        
                        <!-- Content -->
                        <h3 class="text-xl font-medium text-white mb-2 tracking-tight">Optimization</h3>
                        <p class="text-sm text-zinc-500 leading-relaxed">
                            Adapt AI instructions and settings to real life for continuous improvement.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize Process section scroll animations
 */
export function initProcessAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Animate title
          const titles = section.querySelectorAll(".process-title");
          titles.forEach((title, index) => {
            setTimeout(() => {
              title.classList.add("animate");
            }, index * 100);
          });

          // Start path drawing animation
          const line = section.querySelector(".process-line");
          if (line) {
            setTimeout(() => {
              line.classList.add("animate");
            }, 300);
          }

          // Animate cards sequentially
          const cards = section.querySelectorAll(".process-card-anim");
          cards.forEach((card, index) => {
            // Each card appears after the line has drawn to its position
            // Line takes 2s total, divided by 4 cards = 500ms per card position
            setTimeout(
              () => {
                card.classList.add("animate");
              },
              500 + index * 500,
            );
          });

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  const processSection = document.getElementById("process");
  if (processSection) observer.observe(processSection);
}

export default { render: renderProcess, init: initProcessAnimations };
