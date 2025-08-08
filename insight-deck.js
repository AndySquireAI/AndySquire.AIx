// Interactive Insight Deck JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Wait for page to load before initializing
    setTimeout(initializeInsightDeck, 1000);
});

function initializeInsightDeck() {
    console.log('🎴 Initializing Interactive Insight Deck...');
    
    // Create the insight deck section
    createInsightDeckSection();
    
    // Initialize carousel functionality
    initializeCarousel();
    
    console.log('✅ Interactive Insight Deck initialized successfully');
}

function createInsightDeckSection() {
    // Find a good place to insert the insight deck (after hero section)
    const heroSection = document.querySelector('section') || document.querySelector('main') || document.body;
    
    // Create the insight deck HTML
    const insightDeckHTML = `
        <section class="insight-deck-section" id="insight-deck">
            <div class="insight-deck-container">
                <h2 class="insight-deck-title">The Experience That Drives Our Vision</h2>
                <p class="insight-deck-subtitle">
                    Real stories from patients, survivors, and caregivers that shape our #PatientFirstAI approach
                </p>
                
                <div class="insight-carousel">
                    <div class="insight-cards" id="insight-cards">
                        <!-- Founder Insight Card 1 -->
                        <div class="insight-card founder">
                            <img src="assets/andy-headshot-BurDoHN4.jpeg" alt="Andy Squire" class="insight-avatar founder">
                            <div class="insight-quote">
                                When I was diagnosed with cancer, I realized how disconnected patients feel from their own care journey. The technology exists to change this - we just need to put patients first.
                            </div>
                            <div class="insight-attribution founder">Andy Squire</div>
                            <div class="insight-role">Founder & CEO, Cancer Survivor</div>
                        </div>
                        
                        <!-- Patient Insight Card 1 -->
                        <div class="insight-card patient">
                            <div class="insight-avatar patient">❤️</div>
                            <div class="insight-quote">
                                Having a humanoid companion during chemotherapy would have made such a difference. Someone who understands the process, remembers my preferences, and advocates for my needs.
                            </div>
                            <div class="insight-attribution patient">Sarah M.</div>
                            <div class="insight-role">Breast Cancer Survivor</div>
                        </div>
                        
                        <!-- Founder Insight Card 2 -->
                        <div class="insight-card founder">
                            <img src="assets/andy-headshot-BurDoHN4.jpeg" alt="Andy Squire" class="insight-avatar founder">
                            <div class="insight-quote">
                                Every patient interaction taught me that healthcare isn't just about treatment - it's about dignity, understanding, and hope. That's what drives our humanoid healthcare vision.
                            </div>
                            <div class="insight-attribution founder">Andy Squire</div>
                            <div class="insight-role">Founder & CEO, Patient Advocate</div>
                        </div>
                        
                        <!-- Patient Insight Card 2 -->
                        <div class="insight-card patient">
                            <div class="insight-avatar patient">🤝</div>
                            <div class="insight-quote">
                                As a caregiver, I often felt lost navigating the healthcare system. An AI companion that could guide families through the process would be invaluable.
                            </div>
                            <div class="insight-attribution patient">Michael R.</div>
                            <div class="insight-role">Caregiver & Advocate</div>
                        </div>
                        
                        <!-- Founder Insight Card 3 -->
                        <div class="insight-card founder">
                            <img src="assets/andy-headshot-BurDoHN4.jpeg" alt="Andy Squire" class="insight-avatar founder">
                            <div class="insight-quote">
                                The future of healthcare is personal, empathetic, and always available. Humanoid companions can provide the 24/7 support that human caregivers simply can't sustain.
                            </div>
                            <div class="insight-attribution founder">Andy Squire</div>
                            <div class="insight-role">Founder & CEO, Healthcare Innovator</div>
                        </div>
                        
                        <!-- Patient Insight Card 3 -->
                        <div class="insight-card patient">
                            <div class="insight-avatar patient">🌟</div>
                            <div class="insight-quote">
                                Recovery is lonely. Having a companion who remembers your progress, celebrates small wins, and provides encouragement would transform the healing process.
                            </div>
                            <div class="insight-attribution patient">Elena K.</div>
                            <div class="insight-role">Recovery Advocate</div>
                        </div>
                    </div>
                    
                    <!-- Navigation Arrows -->
                    <button class="carousel-nav prev" id="prev-btn" aria-label="Previous insight">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    <button class="carousel-nav next" id="next-btn" aria-label="Next insight">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Indicators -->
                <div class="carousel-indicators" id="carousel-indicators">
                    <div class="indicator active" data-slide="0"></div>
                    <div class="indicator" data-slide="1"></div>
                    <div class="indicator" data-slide="2"></div>
                    <div class="indicator" data-slide="3"></div>
                    <div class="indicator" data-slide="4"></div>
                    <div class="indicator" data-slide="5"></div>
                </div>
            </div>
        </section>
    `;
    
    // Insert the insight deck after the hero section
    if (heroSection.nextSibling) {
        heroSection.parentNode.insertBefore(
            createElementFromHTML(insightDeckHTML), 
            heroSection.nextSibling
        );
    } else {
        heroSection.parentNode.appendChild(createElementFromHTML(insightDeckHTML));
    }
    
    console.log('🎴 Insight deck section created');
}

function initializeCarousel() {
    const carousel = document.getElementById('insight-cards');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!carousel || !prevBtn || !nextBtn) {
        console.log('❌ Carousel elements not found');
        return;
    }
    
    let currentSlide = 0;
    const totalSlides = 6;
    let autoAdvanceInterval;
    
    // Update carousel position
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // Auto-advance functionality
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(nextSlide, 5000); // 5 seconds
    }
    
    function stopAutoAdvance() {
        if (autoAdvanceInterval) {
            clearInterval(autoAdvanceInterval);
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoAdvance();
        setTimeout(startAutoAdvance, 10000); // Restart after 10 seconds
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoAdvance();
        setTimeout(startAutoAdvance, 10000); // Restart after 10 seconds
    });
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 10000); // Restart after 10 seconds
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 10000);
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 10000);
        }
    });
    
    // Pause auto-advance on hover
    const carouselContainer = document.querySelector('.insight-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoAdvance);
        carouselContainer.addEventListener('mouseleave', startAutoAdvance);
    }
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                prevSlide(); // Swipe right - previous slide
            }
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 10000);
        }
    }
    
    // Start auto-advance
    startAutoAdvance();
    
    console.log('🎠 Carousel functionality initialized');
}

function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

// Accessibility improvements
function enhanceAccessibility() {
    const carousel = document.querySelector('.insight-carousel');
    if (carousel) {
        carousel.setAttribute('role', 'region');
        carousel.setAttribute('aria-label', 'Patient and founder insights carousel');
        
        const cards = document.querySelectorAll('.insight-card');
        cards.forEach((card, index) => {
            card.setAttribute('role', 'tabpanel');
            card.setAttribute('aria-label', `Insight ${index + 1} of ${cards.length}`);
        });
    }
}

// Initialize accessibility after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(enhanceAccessibility, 1100);
});

