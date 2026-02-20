/**
 * SocialProof Component
 * Company logos/trust indicators with infinite carousel
 */

export function renderSocialProof() {
  return `
    <!-- Social Proof -->
    <section class="relative z-20 border-t border-white/5 bg-brand-black/50 backdrop-blur-sm overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12 text-center">
            <p class="social-title text-sm text-zinc-600 mb-8 md:mb-10 font-medium">Partnering with top industry experts</p>
            
            <!-- Carousel Container with Fade Effect -->
            <div class="logo-carousel-container">
                <!-- Fade masks on edges -->
                <div class="logo-carousel-mask logo-carousel-mask-left absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"></div>
                <div class="logo-carousel-mask logo-carousel-mask-right absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"></div>
                
                <!-- Carousel Track with duplicated logos for seamless loop -->
                <div class="logo-carousel-track">
                    <!-- First set of logos -->
                    <div class="social-logo"><i data-lucide="command"></i> <span>Coinbase</span></div>
                    <div class="social-logo"><i data-lucide="music"></i> <span>Spotify</span></div>
                    <div class="social-logo"><i data-lucide="slack"></i> <span>slack</span></div>
                    <div class="social-logo"><i data-lucide="box"></i> <span>Dropbox</span></div>
                    <div class="social-logo"><i data-lucide="codepen"></i> <span>webflow</span></div>
                    <!-- Duplicated set for seamless loop -->
                    <div class="social-logo"><i data-lucide="command"></i> <span>Coinbase</span></div>
                    <div class="social-logo"><i data-lucide="music"></i> <span>Spotify</span></div>
                    <div class="social-logo"><i data-lucide="slack"></i> <span>slack</span></div>
                    <div class="social-logo"><i data-lucide="box"></i> <span>Dropbox</span></div>
                    <div class="social-logo"><i data-lucide="codepen"></i> <span>webflow</span></div>
                </div>
            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize Social Proof carousel animation
 */
export function initSocialProofAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Animate title first
          const title = section.querySelector(".social-title");
          if (title) {
            title.classList.add("animate");
          }

          // Start carousel animation
          const track = section.querySelector(".logo-carousel-track");
          if (track) {
            track.classList.add("carousel-animate");
          }

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  // Find the section inside the social-proof-container
  const socialProofContainer = document.getElementById(
    "social-proof-container",
  );
  if (socialProofContainer) {
    const section = socialProofContainer.querySelector("section");
    if (section) observer.observe(section);
  }
}

export default { render: renderSocialProof, init: initSocialProofAnimations };
