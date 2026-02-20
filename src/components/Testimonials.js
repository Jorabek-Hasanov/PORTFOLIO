/**
 * Testimonials Component
 * Feedback section with client testimonials
 */

export function renderTestimonials() {
  return `
    <!-- Testimonials Section -->
    <section id="testimonials" class="relative z-10 py-16 md:py-24 bg-brand-black overflow-hidden">
        <!-- Ambient glow effect -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[250px] md:h-[500px] bg-brand-orange/5 blur-[120px] rounded-full"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <!-- Section Header -->
            <div class="text-center mb-10 md:mb-16">
                <span class="testimonials-title text-brand-orange text-sm font-medium mb-2 block">Testimonials</span>
                <h2 class="testimonials-title text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                    What Our <span class="text-brand-orange">Clients Say</span>
                </h2>
                <p class="testimonials-title text-zinc-500 max-w-xl mx-auto text-base md:text-lg font-light px-4 sm:px-0">
                    Trusted by industry leaders worldwide
                </p>
            </div>
            
            <!-- Feedback Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                
                <!-- Card 1: Michael Miller -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">Portfolio has completely revolutionized how we approach data analytics. The real-time insights have helped us make decisions 10x faster, and the ROI has exceeded all expectations. This is exactly what modern businesses need.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Michael Miller</h4>
                            <p class="text-zinc-500 text-sm">CEO</p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Christopher Davis -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">The integration process was surprisingly smooth. Our team was up and running within days, not months. The API documentation is pristine and the support team actually responds. Finally, a tool that delivers on its promises.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Christopher Davis</h4>
                            <p class="text-zinc-500 text-sm">CTO</p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Matthew Wilson -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">We've tried countless analytics platforms, but nothing compares to Portfolio's intuitive interface. The predictive modeling features gave us insights we never thought possible, and the visual dashboards make reporting a breeze.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Matthew Wilson</h4>
                            <p class="text-zinc-500 text-sm">Product Manager</p>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Joshua Taylor -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">As a developer, I appreciate the clean API and comprehensive documentation. The SDKs work seamlessly across our entire tech stack. Portfolio didn't just meet our needs—they anticipated them.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Joshua Taylor</h4>
                            <p class="text-zinc-500 text-sm">Developer</p>
                        </div>
                    </div>
                </div>

                <!-- Card 5: Andrew Anderson -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">The attention to detail in this platform is remarkable. Every interaction feels polished, every visualization beautiful. It's rare to find software that's both powerful and aesthetically pleasing.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Andrew Anderson</h4>
                            <p class="text-zinc-500 text-sm">Designer</p>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Ryan Thompson -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">This platform gave us the competitive edge we needed. The automated workflows saved us hundreds of manual hours, and the insights helped us identify opportunities we would have otherwise missed. Essential for any startup.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Ryan Thompson</h4>
                            <p class="text-zinc-500 text-sm">Founder</p>
                        </div>
                    </div>
                </div>

                <!-- Card 7: Daniel Garcia -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">Data has never been clearer or more accessible. The customizable dashboards let me create exactly the views my stakeholders need, and the export options make presentations effortless. My productivity has doubled.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Daniel Garcia</h4>
                            <p class="text-zinc-500 text-sm">Analyst</p>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Nicholas White -->
                <div class="testimonial-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,130,60,0.15)]">
                    <!-- Quote Icon -->
                    <div class="absolute top-4 left-4">
                        <i data-lucide="quote" class="w-8 h-8 text-brand-orange/30"></i>
                    </div>
                    <!-- Content -->
                    <div class="p-6 pt-16 h-full flex flex-col justify-between">
                        <p class="text-white text-base leading-relaxed italic mb-8">Our team adoption was immediate—everyone from analysts to executives uses Portfolio daily. The learning curve is virtually nonexistent, and the results speak for themselves. This has become our single source of truth.</p>
                        <div class="border-t border-white/10 pt-4 mt-auto">
                            <h4 class="text-[#FF823C] font-medium text-base">Nicholas White</h4>
                            <p class="text-zinc-500 text-sm">Manager</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize Testimonials section scroll animations
 */
export function initTestimonialsAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Animate titles
          const titles = section.querySelectorAll(".testimonials-title");
          titles.forEach((title, index) => {
            setTimeout(() => {
              title.classList.add("animate");
            }, index * 100);
          });

          // Animate cards with stagger
          const cards = section.querySelectorAll(".testimonial-card");
          cards.forEach((card, index) => {
            setTimeout(
              () => {
                card.classList.add("animate");
              },
              300 + index * 150,
            );
          });

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  const testimonialsSection = document.getElementById("testimonials");
  if (testimonialsSection) observer.observe(testimonialsSection);
}

export default { render: renderTestimonials, init: initTestimonialsAnimations };
