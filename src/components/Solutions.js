/**
 * Solutions Component
 * Solutions section with AI Products
 */

export function renderSolutions() {
  return `
    <!-- Solutions Section (AI Products) -->
    <section id="solutions" class="py-16 md:py-24 relative overflow-hidden">
        <!-- Soft glow behind cards -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[250px] md:h-[400px] bg-brand-orange/5 blur-[100px] rounded-full"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <!-- Title -->
            <div class="text-center mb-10 md:mb-16">
                <h2 class="solutions-title text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Powered <span class="text-brand-orange">Solutions</span>
                </h2>
            </div>
            
            <!-- Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                
                <!-- Card 1: AI Core Integration -->
                <div class="solutions-card group relative p-8 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow/20">
                    <div class="w-12 h-12 rounded-xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i data-lucide="cpu" class="w-6 h-6 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-medium text-white mb-3 tracking-tight">AI Core Integration</h3>
                    <p class="text-base text-zinc-500 leading-relaxed">
                        Seamlessly integrate advanced AI capabilities into your existing infrastructure with our plug-and-play core module.
                    </p>
                </div>

                <!-- Card 2: Real-time Data Analytics -->
                <div class="solutions-card group relative p-8 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow/20">
                    <div class="w-12 h-12 rounded-xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i data-lucide="activity" class="w-6 h-6 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Real-time Data Analytics</h3>
                    <p class="text-base text-zinc-500 leading-relaxed mb-6">
                        Monitor your data streams in real-time with advanced visualization and instant actionable insights.
                    </p>
                    <!-- Progress bar visualization -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-zinc-400">Processing Speed</span>
                            <span class="text-brand-orange font-medium">92%</span>
                        </div>
                        <div class="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div class="progress-flame h-full w-[92%] rounded-full"></div>
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-zinc-400">Data Points</span>
                            <span class="text-brand-orange font-medium">1.2M</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Automated Vibe Control -->
                <div class="solutions-card group relative p-8 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow/20">
                    <div class="w-12 h-12 rounded-xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i data-lucide="bot" class="w-6 h-6 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Automated Vibe Control</h3>
                    <p class="text-base text-zinc-500 leading-relaxed">
                        Let AI agents handle context-aware automation for your workflow with intelligent ambient control.
                    </p>
                </div>
            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize Solutions section scroll animations
 */
export function initSolutionsAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Animate title
          const title = section.querySelector(".solutions-title");
          if (title) {
            title.classList.add("animate");
          }

          // Animate cards with stagger from left
          const cards = section.querySelectorAll(".solutions-card");
          cards.forEach((card, index) => {
            setTimeout(
              () => {
                card.classList.add("animate");
              },
              200 + index * 200,
            );
          });

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  const solutionsSection = document.getElementById("solutions");
  if (solutionsSection) observer.observe(solutionsSection);
}

export default { render: renderSolutions, init: initSolutionsAnimations };
