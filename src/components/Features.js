/**
 * Features Component
 * Features section with Business Application cards and Data Insights
 */

export function renderFeatures() {
  return `
    <!-- Features Section -->
    <section id="product" class="relative z-10 py-16 md:py-24 bg-brand-black overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div class="text-center mb-12 md:20">
                <div class="features-title inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4 md:mb-6">
                    <span class="text-xs text-zinc-400">Take Full Control of Your Task</span>
                </div>
                <h2 class="features-title text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
                    Business <span class="text-brand-orange">Application</span>
                </h2>
                <p class="features-title text-zinc-500 max-w-xl mx-auto text-base md:text-lg font-light px-4 sm:px-0">
                    Our users love how Portfolio simplifies their processes and streamlines operations.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                
                <!-- Card 1 -->
                <div class="features-card group relative p-8 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-orange/30 transition-all duration-300 hover:shadow-glow/10">
                    <div class="w-10 h-10 rounded-lg border border-brand-orange/20 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="settings-2" class="w-5 h-5 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Customer Insights</h3>
                    <p class="text-base text-zinc-500 leading-relaxed">
                        Analyze customer interactions across touchpoints with the platform to gain deeper understanding.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="features-card group relative p-8 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-orange/30 transition-all duration-300 hover:shadow-glow/10">
                    <div class="w-10 h-10 rounded-lg border border-brand-orange/20 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="bar-chart-3" class="w-5 h-5 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Product Metrics</h3>
                    <p class="text-base text-zinc-500 leading-relaxed">
                        Track your products' performance in real-time with comprehensive dashboards.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="features-card group relative p-8 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-orange/30 transition-all duration-300 hover:shadow-glow/10">
                    <div class="w-10 h-10 rounded-lg border border-brand-orange/20 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="target" class="w-5 h-5 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Campaign Optimization</h3>
                    <p class="text-base text-zinc-500 leading-relaxed">
                        Measure campaign success with key metrics like conversion rates and ROI instantly.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Data Insights Section -->
    <section class="data-insights py-16 md:py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                <!-- Text Content -->
                <div>
                    <span class="insight-text text-brand-orange text-sm font-medium mb-2 block">Data Insights</span>
                    <h2 class="insight-text text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 tracking-tight">
                        Improved <span class="text-brand-orange">decision-making</span>
                    </h2>
                    <p class="insight-text text-zinc-500 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light">
                        By leveraging real-time insights and comprehensive data analysis, you can make informed decisions with confidence, reducing uncertainty.
                    </p>

                    <div class="space-y-6">
                        <div class="insight-text flex items-start gap-4">
                            <div class="mt-1 w-5 h-5 rounded border border-brand-orange/50 flex items-center justify-center bg-brand-orange/10 shrink-0">
                                <i data-lucide="check" class="w-3 h-3 text-brand-orange"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-medium mb-1">Comprehensive Data Visualization</h4>
                                <p class="text-sm text-zinc-500">With our advanced visualization tools, turn complex datasets into easy-to-understand charts.</p>
                            </div>
                        </div>

                        <div class="insight-text flex items-start gap-4">
                            <div class="mt-1 w-5 h-5 rounded border border-brand-orange/50 flex items-center justify-center bg-brand-orange/10 shrink-0">
                                <i data-lucide="pie-chart" class="w-3 h-3 text-brand-orange"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-medium mb-1">Predictive Modeling</h4>
                                <p class="text-sm text-zinc-500">Leverage cutting-edge predictive analytics to forecast future trends and outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- UI Mockup -->
                <div class="relative">
                    <!-- Background Glow for Card -->
                    <div class="absolute -inset-1 bg-linear-to-r from-brand-orange/20 to-transparent blur-2xl opacity-30"></div>
                    
                    <div class="insight-chart relative bg-[#0F0F0F] border border-brand-border rounded-xl p-8 shadow-2xl">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-zinc-400 text-sm font-medium">Improved decision making</h3>
                                <div class="flex items-baseline gap-2 mt-1">
                                    <span class="insight-counter text-4xl font-semibold text-white tracking-tight">85%</span>
                                    <span class="text-xs font-medium text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center">
                                        <i data-lucide="arrow-up" class="w-3 h-3 mr-0.5"></i> 12%
                                    </span>
                                </div>
                            </div>
                            <div class="p-2 rounded-lg bg-zinc-900 border border-brand-border">
                                <i data-lucide="more-horizontal" class="w-5 h-5 text-zinc-500"></i>
                            </div>
                        </div>

                        <!-- Bar Chart Representation -->
                        <div class="chart-track h-[200px] flex items-end justify-between gap-4 px-2">
                            <!-- Bar 1 - VISUAL -->
                            <div class="bar flex-1 h-[40%] relative group">
                                <div class="insight-bar bar-fill absolute bottom-0 left-0 right-0 rounded-t-[8px] bg-linear-to-t from-[#FF823C] to-[#FFAB71] shadow-[0_4px_15px_rgba(255,130,60,0.3)] transition-all duration-500">
                                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">40%</div>
                                </div>
                            </div>
                            <!-- Bar 2 - MODEL -->
                            <div class="bar flex-1 h-[60%] relative group">
                                <div class="insight-bar bar-fill absolute bottom-0 left-0 right-0 rounded-t-[8px] bg-linear-to-t from-[#FF823C] to-[#FFAB71] shadow-[0_4px_15px_rgba(255,130,60,0.3)] transition-all duration-500">
                                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">60%</div>
                                </div>
                            </div>
                            <!-- Bar 3 - INSIGHT -->
                            <div class="bar flex-1 h-[50%] relative group">
                                <div class="insight-bar bar-fill absolute bottom-0 left-0 right-0 rounded-t-[8px] bg-linear-to-t from-[#FF823C] to-[#FFAB71] shadow-[0_4px_15px_rgba(255,130,60,0.3)] transition-all duration-500">
                                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">50%</div>
                                </div>
                            </div>
                            <!-- Bar 4 - GROWTH -->
                            <div class="bar flex-1 h-[90%] relative group">
                                <div class="insight-bar bar-fill absolute bottom-0 left-0 right-0 rounded-t-[8px] bg-linear-to-t from-[#FF823C] to-[#FFAB71] shadow-[0_4px_15px_rgba(255,130,60,0.3)] transition-all duration-500">
                                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">90%</div>
                                </div>
                            </div>
                        </div>

                        <!-- Chart Labels -->
                        <div class="flex justify-between mt-4 px-2">
                            <span class="text-[10px] uppercase tracking-wider text-white font-medium w-full text-center">Visual</span>
                            <span class="text-[10px] uppercase tracking-wider text-white font-medium w-full text-center">Model</span>
                            <span class="text-[10px] uppercase tracking-wider text-white font-medium w-full text-center">Insight</span>
                            <span class="text-[10px] uppercase tracking-wider text-white font-medium w-full text-center">Growth</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}

/**
 * Initialize Features section scroll animations
 */
export function initFeaturesAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;

          // Check if it's the features section or data insights section
          if (section.id === "product") {
            // Features section - title and cards
            const titles = section.querySelectorAll(".features-title");
            titles.forEach((el, index) => {
              setTimeout(() => el.classList.add("animate"), index * 100);
            });

            const cards = section.querySelectorAll(".features-card");
            cards.forEach((card, index) => {
              setTimeout(
                () => card.classList.add("animate"),
                300 + index * 150,
              );
            });
          } else if (section.classList.contains("data-insights")) {
            // Data Insights section - text and chart
            const textElements = section.querySelectorAll(".insight-text");
            textElements.forEach((el, index) => {
              setTimeout(() => el.classList.add("animate"), index * 100);
            });

            // Chart animation
            const chart = section.querySelector(".insight-chart");
            if (chart) {
              chart.classList.add("animate");
            }

            // Bars animation with stagger
            const bars = section.querySelectorAll(".insight-bar");
            bars.forEach((bar, index) => {
              setTimeout(
                () => {
                  bar.classList.add("animate");
                },
                500 + index * 100,
              );
            });

            // Counter animation
            const counter = section.querySelector(".insight-counter");
            if (counter) {
              setTimeout(() => {
                counter.classList.add("animate");
                // Animate counter from 0 to 85
                animateCounter(counter, 0, 85, 1500);
              }, 900);
            }
          }

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.15 },
  );

  // Observe both sections
  const featuresSection = document.getElementById("product");
  const dataInsightsSection = document.querySelector(".data-insights");

  if (featuresSection) observer.observe(featuresSection);
  if (dataInsightsSection) observer.observe(dataInsightsSection);
}

/**
 * Animate counter from start to end value
 */
function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out quad
    const easeProgress = 1 - Math.pow(1 - progress, 2);
    const current = Math.floor(start + (end - start) * easeProgress);

    element.textContent = current + "%";

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

export default { render: renderFeatures, init: initFeaturesAnimations };
