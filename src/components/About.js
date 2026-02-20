/**
 * About Component
 * About Us section with AI Vibe Engineer content
 */

export function renderAbout() {
  return `
    <!-- About Us Section - AI Vibe Engineer -->
    <section id="about" class="relative z-10 py-16 md:py-24 bg-brand-black overflow-hidden">
        <!-- Ambient glow effect -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/5 blur-[100px] rounded-full"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                <!-- Left: Text Content with animation -->
                <div class="order-2 lg:order-1">
                    <span class="about-text text-[#FF823C] text-sm font-medium mb-2 block tracking-wide uppercase">Our Vision</span>
                    <h2 class="about-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 tracking-tight leading-tight">
                        Mastering the <span class="text-brand-orange inline-block relative">
                            AI Vibe
                            <span class="absolute inset-0 blur-2xl bg-brand-orange/20 -z-10"></span>
                        </span>
                    </h2>
                    <p class="about-text text-base md:text-lg text-zinc-400 mb-4 md:mb-6 leading-relaxed font-light">
                        The AI Vibe Engineer isn't just a coder—it's a digital artist who paints with algorithms and sculpts with data. We bridge the gap between cold, calculating machines and the warm, intuitive experiences humans crave.
                    </p>
                    <p class="about-text text-base md:text-lg text-zinc-400 mb-4 md:mb-6 leading-relaxed font-light">
                        Our philosophy is simple: technology should feel like a natural extension of human creativity, not a replacement. We craft intelligent systems that understand context, anticipate needs, and respond with nuance.
                    </p>
                    <p class="about-text text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                        Every line of code we write carries intention. Every model we train speaks the language of aesthetics. This is where engineering meets artistry—the sweet spot where AI becomes unforgettable.
                    </p>
                </div>
                
                <!-- Right: Abstract AI Visual with animation -->
                <div class="order-1 lg:order-2 relative">
                    <!-- Background glow -->
                    <div class="absolute -inset-4 bg-linear-to-br from-brand-orange/10 via-transparent to-transparent blur-2xl"></div>
                    
                    <!-- Main visual container -->
                    <div class="about-visual relative bg-[#0F0F0F] border border-brand-border rounded-2xl p-6 md:p-8 h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                        <!-- Animated grid background -->
                        <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(255,130,60,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,130,60,0.1) 1px, transparent 1px); background-size: 30px 30px;"></div>
                        
                        <!-- Central AI Core - Pulsing orb -->
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div class="relative w-32 h-32">
                                <!-- Outer glow ring -->
                                <div class="absolute inset-0 rounded-full bg-brand-orange/20 animate-ping"></div>
                                <div class="absolute inset-2 rounded-full bg-brand-orange/30 animate-pulse"></div>
                                <div class="absolute inset-4 rounded-full bg-brand-orange/40 shadow-[0_0_30px_rgba(255,130,60,0.5)]"></div>
                                <!-- Core -->
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i data-lucide="brain" class="w-12 h-12 text-white"></i>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Neon lines radiating from center -->
                        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                            <!-- Line 1 -->
                            <line x1="200" y1="200" x2="200" y2="80" stroke="#FF823C" stroke-width="1" opacity="0.6" class="animate-pulse">
                                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 2 -->
                            <line x1="200" y1="200" x2="320" y2="120" stroke="#FF823C" stroke-width="1" opacity="0.4" class="animate-pulse">
                                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 3 -->
                            <line x1="200" y1="200" x2="340" y2="200" stroke="#FF823C" stroke-width="1" opacity="0.5" class="animate-pulse">
                                <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.8s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 4 -->
                            <line x1="200" y1="200" x2="320" y2="280" stroke="#FF823C" stroke-width="1" opacity="0.3" class="animate-pulse">
                                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.2s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 5 -->
                            <line x1="200" y1="200" x2="200" y2="320" stroke="#FF823C" stroke-width="1" opacity="0.5" class="animate-pulse">
                                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.9s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 6 -->
                            <line x1="200" y1="200" x2="80" y2="280" stroke="#FF823C" stroke-width="1" opacity="0.4" class="animate-pulse">
                                <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2.3s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 7 -->
                            <line x1="200" y1="200" x2="60" y2="200" stroke="#FF823C" stroke-width="1" opacity="0.6" class="animate-pulse">
                                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.1s" repeatCount="indefinite"/>
                            </line>
                            <!-- Line 8 -->
                            <line x1="200" y1="200" x2="80" y2="120" stroke="#FF823C" stroke-width="1" opacity="0.3" class="animate-pulse">
                                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.4s" repeatCount="indefinite"/>
                            </line>
                        </svg>
                        
                        <!-- Floating code particles -->
                        <div class="absolute top-8 left-8 text-xs font-mono text-brand-orange/60">
                            <span class="animate-pulse">const</span> vibe = true;
                        </div>
                        <div class="absolute bottom-8 right-8 text-xs font-mono text-brand-orange/60">
                            AI.<span class="animate-pulse">dream</span>()
                        </div>
                        <div class="absolute top-8 right-16 text-xs font-mono text-brand-orange/40">
                            <neural />
                        </div>
                        <div class="absolute bottom-12 left-8 text-xs font-mono text-brand-orange/40">
                            0x4F1E...9A2B
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize About section scroll animations
 */
export function initAboutAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const aboutSection = entry.target;
          const textElements = aboutSection.querySelectorAll(".about-text");
          const visual = aboutSection.querySelector(".about-visual");

          // Animate text elements with stagger
          textElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 150);
          });

          // Animate visual
          setTimeout(() => {
            if (visual) visual.classList.add("animate");
          }, 500);

          observer.unobserve(aboutSection);
        }
      });
    },
    { threshold: 0.15 },
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) observer.observe(aboutSection);
}

export default { render: renderAbout, init: initAboutAnimations };
