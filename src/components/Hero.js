/**
 * Hero Component
 * Main hero section with tagline and CTA
 */

export function renderHero() {
  return `
    <!-- Main Hero Wrapper -->
    <main id="hero" class="relative min-h-dvh flex flex-col justify-center overflow-hidden">
        
        <!-- Background Ambient Effects -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] md:w-[800px] h-[500px] md:h-[800px] bg-brand-orange/5 blur-[120px] rounded-full mix-blend-screen"></div>
            <!-- Starfield specks -->
            <div class="absolute top-20 left-20 w-1 h-1 bg-white/20 rounded-full blur-[1px]"></div>
            <div class="absolute top-40 right-1/4 w-1 h-1 bg-white/10 rounded-full"></div>
            <div class="absolute bottom-1/3 left-10 w-1 h-1 bg-white/10 rounded-full"></div>
        </div>

        <!-- Content -->
        <div class="hero-content relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-16">
            
            <!-- Headline with animation -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.15] sm:leading-[1.1] mb-6">
                <span class="hero-title">Transform Your Data Into </span><br class="hidden md:block">
                <span class="text-brand-orange inline-block relative hero-title">
                    Actionable Solutions
                    <!-- Subtle glow behind text -->
                    <span class="absolute inset-0 blur-2xl bg-brand-orange/20 -z-10"></span>
                </span>
            </h1>

            <!-- Subtext with animation -->
            <p class="hero-subtext text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mb-16 leading-relaxed font-light px-4 sm:px-0">
                Unlock the full potential of your data with our suite of analytics tools designed for the modern enterprise ecosystem.
            </p>
            
        </div>

    </main>
  `;
}

/**
 * Initialize Hero section animations
 */
export function initHeroAnimations() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  // Trigger animations on page load for hero section
  setTimeout(() => {
    // Animate title
    const titleParts = heroSection.querySelectorAll(".hero-title");
    titleParts.forEach((part, index) => {
      setTimeout(() => {
        part.classList.add("animate");
      }, 150 * index);
    });

    // Animate subtext
    const subtext = heroSection.querySelector(".hero-subtext");
    if (subtext) {
      setTimeout(() => subtext.classList.add("animate"), 400);
    }
  }, 100);
}

export default { render: renderHero, init: initHeroAnimations };
