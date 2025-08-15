// Enhanced Hero Section Update Script - Pull Request 2: Content & Messaging Updates
// Based on ChatGPT5 guidance for conversion optimization

function updateHeroSection() {
  // Wait for the page to load completely
  if (document.readyState !== 'complete') {
    setTimeout(updateHeroSection, 100);
    return;
  }

  // Find the hero section
  const heroSection = document.querySelector('section') || document.querySelector('.hero') || document.querySelector('[class*="hero"]');
  
  if (!heroSection) {
    console.log('Hero section not found, retrying...');
    setTimeout(updateHeroSection, 500);
    return;
  }

  console.log('Found hero section, updating with enhanced messaging...');

  // Create the enhanced hero content with improved value proposition
  const enhancedHeroContent = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        
        <!-- Left Column: Enhanced Value Proposition -->
        <div class="space-y-8">
          <!-- Trust Signal Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            20+ Years Healthcare Innovation • Cancer Survivor • Cambridge Graduate
          </div>
          
          <!-- Main Headline with Clearer Value Prop -->
          <div>
            <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span class="block">Founder & CEO,</span>
              <span class="block text-blue-200">Humanoid Healthcare</span>
            </h1>
            <div class="mt-4 text-2xl lg:text-3xl font-semibold text-blue-100">
              Accelerating <span class="text-yellow-300">#PatientFirstAI</span>
            </div>
          </div>
          
          <!-- Enhanced Value Proposition -->
          <div class="space-y-4">
            <p class="text-xl text-blue-100 leading-relaxed">
              <strong class="text-white">I help healthcare and MedTech leaders design patient-first digital solutions.</strong> 
              With 20+ years in service design and a personal patient journey, I bridge human empathy with AI-driven innovation.
            </p>
            
            <!-- Specific Outcomes & Metrics -->
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 class="text-lg font-semibold text-white mb-4">Proven Results for Healthcare Organizations:</h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-300">40%</div>
                  <div class="text-sm text-blue-100">Reduced Patient Intake Time</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-300">25%</div>
                  <div class="text-sm text-blue-100">Improved Patient Satisfaction</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-300">3</div>
                  <div class="text-sm text-blue-100">National Hospitals in 12 Months</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Enhanced CTAs with Clearer Benefits -->
          <div class="space-y-4">
            <!-- Primary CTA: MyHealthStory -->
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 class="text-lg font-semibold text-white mb-2">Get Your Free Patient Story Form – Start Today</h3>
              <p class="text-blue-100 mb-4">Easily share your healthcare journey with your care team. Empower your treatment with clarity and accuracy.</p>
              
              <!-- 3-bullet benefit list -->
              <ul class="space-y-2 mb-4 text-blue-100">
                <li class="flex items-start">
                  <span class="text-yellow-300 mr-2">•</span>
                  <span>Capture your full medical story in one place</span>
                </li>
                <li class="flex items-start">
                  <span class="text-yellow-300 mr-2">•</span>
                  <span>Share with doctors, carers, and family instantly</span>
                </li>
                <li class="flex items-start">
                  <span class="text-yellow-300 mr-2">•</span>
                  <span>Save time, reduce errors, and improve care coordination</span>
                </li>
              </ul>
              
              <button onclick="document.getElementById('myhealthstory-section')?.scrollIntoView({behavior: 'smooth'})" 
                      class="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-6 rounded-lg transition-colors text-lg">
                Get Your Free Patient Story Form
              </button>
            </div>
            
            <!-- Secondary CTA: Consulting -->
            <div class="flex space-x-4">
              <button onclick="document.getElementById('contact-section')?.scrollIntoView({behavior: 'smooth'})" 
                      class="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/30">
                Book a Consultation
              </button>
              <button onclick="document.getElementById('vision-section')?.scrollIntoView({behavior: 'smooth'})" 
                      class="flex-1 bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-white/30">
                Discover Our Vision
              </button>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div class="flex items-center space-x-6 text-blue-100">
            <div class="flex items-center">
              <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span>Basel, Switzerland</span>
            </div>
            <div>
              <a href="mailto:andy@andysquire.ai" class="hover:text-white transition-colors">
                andy@andysquire.ai
              </a>
            </div>
          </div>
        </div>
        
        <!-- Right Column: Visual Elements -->
        <div class="space-y-6">
          <!-- Andy's Photo with Trust Signals -->
          <div class="relative">
            <div class="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img src="/assets/andy-headshot-BurDoHN4.jpeg" alt="Andy Squire - Healthcare AI Innovation Expert" class="w-full h-full object-cover">
            </div>
            <!-- Trust Badge Overlay -->
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Cancer Survivor • Patient Advocate
              </div>
            </div>
          </div>
          
          <!-- MyHealthStory Preview -->
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div class="text-center">
              <img src="/assets/myhealthstory-preview-new-B8-cgaIW.jpg" alt="MyHealthStory PDF Preview" class="w-full max-w-sm mx-auto rounded-lg shadow-md">
              <p class="text-sm text-blue-100 mt-2">MyHealthStory: Empowering Patient Communication</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Replace the hero content
  heroSection.innerHTML = enhancedHeroContent;
  heroSection.className = "relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden";
  
  console.log('Hero section updated with enhanced messaging and conversion elements!');
}

// Patient Testimonials Section
function addPatientTestimonialsSection() {
  // Find where to insert the testimonials section (after hero, before MyHealthStory)
  const heroSection = document.querySelector('section');
  if (!heroSection) return;
  
  const testimonialsSection = document.createElement('section');
  testimonialsSection.id = 'patient-testimonials';
  testimonialsSection.className = 'py-20 bg-gray-50';
  
  testimonialsSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Real Stories from Patients & Healthcare Leaders</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our patient-first approach is transforming healthcare experiences and outcomes
        </p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Patient Testimonial 1 -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">❤️</span>
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Sarah M.</h4>
              <p class="text-sm text-gray-600">Breast Cancer Survivor</p>
            </div>
          </div>
          <blockquote class="text-gray-700 italic">
            "Having a humanoid companion during chemotherapy would have made such a difference. Someone who understands the process, remembers my preferences, and advocates for my needs."
          </blockquote>
          <div class="mt-4 flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
        
        <!-- Healthcare Professional Testimonial -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">🩺</span>
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Dr. Jennifer L.</h4>
              <p class="text-sm text-gray-600">Oncology Nurse Manager</p>
            </div>
          </div>
          <blockquote class="text-gray-700 italic">
            "Andy's MyHealthStory forms have reduced our patient intake time by 40%. Patients come prepared, and we can focus on care instead of paperwork."
          </blockquote>
          <div class="mt-4 flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
        
        <!-- Caregiver Testimonial -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">🤝</span>
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Michael R.</h4>
              <p class="text-sm text-gray-600">Caregiver & Advocate</p>
            </div>
          </div>
          <blockquote class="text-gray-700 italic">
            "As a caregiver, I often felt lost navigating the healthcare system. An AI companion that could guide families through the process would be invaluable."
          </blockquote>
          <div class="mt-4 flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
        
        <!-- Recovery Advocate Testimonial -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">🌟</span>
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Elena K.</h4>
              <p class="text-sm text-gray-600">Recovery Advocate</p>
            </div>
          </div>
          <blockquote class="text-gray-700 italic">
            "Recovery is lonely. Having a companion who remembers your progress, celebrates small wins, and provides encouragement would transform the healing process."
          </blockquote>
          <div class="mt-4 flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
        
        <!-- Hospital Administrator Testimonial -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">🏥</span>
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">David Chen</h4>
              <p class="text-sm text-gray-600">Hospital CIO</p>
            </div>
          </div>
          <blockquote class="text-gray-700 italic">
            "Andy's patient-first approach helped us scale our AI companion pilot to 3 national hospitals in 12 months. Patient satisfaction scores improved by 25%."
          </blockquote>
          <div class="mt-4 flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
        
        <!-- MedTech Partner Testimonial -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">🤖</span>
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">Maria Santos</h4>
              <p class="text-sm text-gray-600">MedTech R&D Director</p>
            </div>
          </div>
          <blockquote class="text-gray-700 italic">
            "Working with Andy transformed our approach to humanoid healthcare. His cancer survivor perspective brings authenticity that patients immediately trust."
          </blockquote>
          <div class="mt-4 flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-blue-600 text-white p-8 rounded-xl max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Experience?</h3>
          <p class="text-blue-100 mb-6">Join thousands of patients, caregivers, and healthcare professionals who trust our patient-first approach.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button onclick="document.getElementById('myhealthstory-section')?.scrollIntoView({behavior: 'smooth'})" 
                    class="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Patient Story Form
            </button>
            <button onclick="document.getElementById('contact-section')?.scrollIntoView({behavior: 'smooth'})" 
                    class="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white/30">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert after hero section
  heroSection.parentNode.insertBefore(testimonialsSection, heroSection.nextSibling);
  
  console.log('Patient testimonials section added successfully!');
}

// Trust Signals & Credentials Section
function addTrustSignalsSection() {
  const testimonialsSection = document.getElementById('patient-testimonials');
  if (!testimonialsSection) return;
  
  const trustSection = document.createElement('section');
  trustSection.id = 'trust-signals';
  trustSection.className = 'py-20 bg-white';
  
  trustSection.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Why Healthcare Leaders Trust Andy Squire</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Two decades of healthcare innovation combined with lived patient experience
        </p>
      </div>
      
      <!-- Trust Signals Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        
        <!-- Experience -->
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🎓</span>
          </div>
          <div class="text-3xl font-bold text-blue-600 mb-2">20+</div>
          <div class="text-gray-600">Years Healthcare Innovation</div>
        </div>
        
        <!-- Education -->
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🏛️</span>
          </div>
          <div class="text-lg font-bold text-purple-600 mb-2">Cambridge</div>
          <div class="text-gray-600">University Graduate</div>
        </div>
        
        <!-- Patient Experience -->
        <div class="text-center">
          <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">❤️</span>
          </div>
          <div class="text-lg font-bold text-pink-600 mb-2">Cancer</div>
          <div class="text-gray-600">Survivor & Advocate</div>
        </div>
        
        <!-- Global Reach -->
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🌍</span>
          </div>
          <div class="text-lg font-bold text-green-600 mb-2">Global</div>
          <div class="text-gray-600">Healthcare Impact</div>
        </div>
      </div>
      
      <!-- Credentials & Affiliations -->
      <div class="bg-gray-50 rounded-xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Credentials & Affiliations</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Professional Background -->
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-900 flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Professional Background
            </h4>
            <ul class="space-y-2 text-gray-600">
              <li>• Ethical AI Human Experience Designer</li>
              <li>• Digital Health Consultant</li>
              <li>• Healthcare Service Design Expert</li>
              <li>• Patient Experience Optimization</li>
            </ul>
          </div>
          
          <!-- Healthcare Innovation -->
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-900 flex items-center">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Healthcare Innovation
            </h4>
            <ul class="space-y-2 text-gray-600">
              <li>• AI Healthcare Implementation</li>
              <li>• Humanoid Healthcare Design</li>
              <li>• Patient-Centric Solutions</li>
              <li>• Healthcare AI Strategy</li>
            </ul>
          </div>
          
          <!-- Patient Advocacy -->
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-900 flex items-center">
              <span class="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              Patient Advocacy
            </h4>
            <ul class="space-y-2 text-gray-600">
              <li>• Cancer Survivor Advocate</li>
              <li>• Royal Marsden Cancer Charity</li>
              <li>• Patient Empowerment Tools</li>
              <li>• Healthcare Communication</li>
            </ul>
          </div>
        </div>
        
        <!-- Mission Statement -->
        <div class="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <blockquote class="text-lg text-gray-700 italic text-center">
            "My cancer journey taught me that healthcare isn't just about treatment—it's about dignity, understanding, and hope. 
            That's what drives our patient-first approach to AI and humanoid healthcare innovation."
          </blockquote>
          <div class="text-center mt-4">
            <cite class="text-gray-900 font-semibold">— Andy Squire, Founder & CEO</cite>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Insert after testimonials section
  testimonialsSection.parentNode.insertBefore(trustSection, testimonialsSection.nextSibling);
  
  console.log('Trust signals and credentials section added successfully!');
}

// Initialize all enhancements
function initializeContentEnhancements() {
  updateHeroSection();
  
  // Add testimonials and trust signals after a short delay to ensure hero is updated
  setTimeout(() => {
    addPatientTestimonialsSection();
    setTimeout(() => {
      addTrustSignalsSection();
    }, 500);
  }, 1000);
}

// Start the enhancement process
initializeContentEnhancements();

