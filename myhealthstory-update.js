// MyHealthStory Section Update Script
// This script will replace the existing MyHealthStory section with the new two-plan layout

function updateMyHealthStorySection() {
  // Wait for the page to load completely
  if (document.readyState !== 'complete') {
    setTimeout(updateMyHealthStorySection, 100);
    return;
  }

  // Find the MyHealthStory section by looking for the heading
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let myHealthStorySection = null;
  
  for (let heading of headings) {
    if (heading.textContent.includes('#MyHealthStory PDF form') || 
        heading.textContent.includes('MyHealthStory PDF form')) {
      myHealthStorySection = heading.closest('section') || heading.parentElement;
      break;
    }
  }

  if (!myHealthStorySection) {
    console.log('MyHealthStory section not found, retrying...');
    setTimeout(updateMyHealthStorySection, 500);
    return;
  }

  console.log('Found MyHealthStory section, updating...');

  // Create the new MyHealthStory content
  const newContent = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">#MyHealthStory PDF Forms</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering patients with a clear health summary to improve communication with medical teams. Choose the plan that's right for you.
        </p>
      </div>

      <!-- Two Plan Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        <!-- Current Plan Card -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">MyHealthStory Current Plan</h3>
          <p class="text-gray-700 mb-6">
            A concise one-page summary designed to capture your immediate health situation. 
            Perfect for sharing with your medical team to ensure everyone is on the same page.
          </p>
          
          <!-- Screenshot placeholder -->
          <div class="mb-6 bg-gray-100 rounded-lg p-4 text-center">
            <img src="/assets/myhealthstory-preview-new-B8-cgaIW.jpg" alt="MyHealthStory Current Plan Preview" class="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <p class="text-sm text-gray-600 mt-2">Page 1: Your Current Health Summary</p>
          </div>
          
          <!-- Key Feature Callout -->
          <div class="mb-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-blue-800 font-medium">✔ Use "Fill & Sign" in free Adobe Acrobat Reader for easy mobile completion.</p>
          </div>
          
          <!-- Feature List -->
          <ul class="space-y-3 mb-6">
            <li class="flex items-start">
              <span class="text-blue-600 mr-2">•</span>
              <div>
                <strong>Patient-Centric Design:</strong> Focuses on your current health status, goals, and priorities.
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-red-600 mr-2">•</span>
              <div>
                <strong>Holistic Approach:</strong> Combines medical data (diagnosis, medications, allergies) with personal well-being factors.
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <div>
                <strong>Communication Tool:</strong> Helps you prepare key questions and information for your healthcare providers.
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">•</span>
              <div>
                <strong>Patient Empowerment:</strong> Encourages active participation in your own healthcare decisions.
              </div>
            </li>
          </ul>
          
          <!-- Price -->
          <div class="text-center mb-6">
            <div class="text-3xl font-bold text-blue-600">£9</div>
            <div class="text-gray-600">(approx. €10.50, $12.50)</div>
            <div class="text-sm text-gray-500 mt-2">One-time purchase • Instant download</div>
          </div>
          
          <!-- Purchase Button -->
          <button onclick="window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=squiza33@gmail.com&item_name=MyHealthStory Current Plan&amount=9.00&currency_code=GBP&return=https://andysquire.ai/success&cancel_return=https://andysquire.ai','_blank')" 
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Buy Current Plan Now
          </button>
        </div>

        <!-- Complete Plan Card -->
        <div class="bg-white p-8 rounded-xl shadow-lg border border-purple-200 relative">
          <!-- Most Comprehensive Tag -->
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span class="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST COMPREHENSIVE</span>
          </div>
          
          <h3 class="text-2xl font-bold text-purple-600 mb-4 mt-4">MyHealthStory Complete Plan</h3>
          <p class="text-gray-700 mb-6">
            Our most comprehensive plan. Includes everything in the Current Plan, plus a second page dedicated to advance care planning, personal reflections, and legacy.
          </p>
          
          <!-- Screenshot placeholder -->
          <div class="mb-6 bg-gray-100 rounded-lg p-4 text-center">
            <div class="grid grid-cols-2 gap-2">
              <img src="/assets/myhealthstory-preview-new-B8-cgaIW.jpg" alt="Complete Plan Page 1" class="w-full rounded shadow-sm">
              <img src="/assets/myhealthstory-preview-new-B8-cgaIW.jpg" alt="Complete Plan Page 2" class="w-full rounded shadow-sm">
            </div>
            <p class="text-sm text-gray-600 mt-2">Complete Plan: Both pages shown in mobile view</p>
          </div>
          
          <!-- Key Feature Callout -->
          <div class="mb-6 p-4 bg-purple-50 rounded-lg">
            <p class="text-purple-800 font-medium">✔ Use "Fill & Sign" in free Adobe Acrobat Reader for easy mobile completion.</p>
          </div>
          
          <!-- Feature List -->
          <div class="mb-6">
            <p class="font-bold text-purple-600 mb-3">All features of the Current Plan, PLUS:</p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Advance Care Planning:</strong> Document your healthcare wishes, living will, and power of attorney.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 mr-2">•</span>
                <div>
                  <strong>Legacy & Wisdom:</strong> Share important messages and life lessons you've learned.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2">•</span>
                <div>
                  <strong>Forward-Looking:</strong> Helps you define what you are looking forward to and what gives your life purpose.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-600 mr-2">•</span>
                <div>
                  <strong>Helpful Resources:</strong> A space to list communities, links, and apps that support you.
                </div>
              </li>
            </ul>
          </div>
          
          <!-- Price -->
          <div class="text-center mb-6">
            <div class="text-3xl font-bold text-purple-600">£12</div>
            <div class="text-gray-600">(approx. €14, $16.50)</div>
            <div class="text-sm text-gray-500 mt-2">One-time purchase • Instant download</div>
          </div>
          
          <!-- Purchase Button -->
          <button onclick="window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=squiza33@gmail.com&item_name=MyHealthStory Complete Plan&amount=12.00&currency_code=GBP&return=https://andysquire.ai/success&cancel_return=https://andysquire.ai','_blank')" 
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Buy Complete Plan Now
          </button>
        </div>
      </div>

      <!-- Payment Logos -->
      <div class="flex justify-center items-center space-x-3 mb-12">
        <div class="bg-red-600 text-white px-3 py-2 rounded text-sm font-bold">MasterCard</div>
        <div class="bg-blue-600 text-white px-3 py-2 rounded text-sm font-bold">Visa</div>
        <div class="bg-blue-700 text-white px-3 py-2 rounded text-sm font-bold">VISA</div>
        <div class="bg-blue-800 text-white px-3 py-2 rounded text-sm font-bold">AMEX</div>
        <div class="bg-blue-900 text-white px-3 py-2 rounded text-sm font-bold">PayPal</div>
        <div class="bg-gray-700 text-white px-3 py-2 rounded text-sm font-bold">Discover</div>
      </div>

      <!-- Mission Section -->
      <div class="bg-gray-900 text-white p-8 rounded-xl mb-12">
        <h3 class="text-2xl font-bold mb-6 text-center">MyHealthStory Mission: Patient Empowerment & Cancer Research</h3>
        <p class="text-gray-300 mb-6 text-center">
          MyHealthStory was born from a cancer survivor's journey to help patients take control of their medical information. Our mission is two-fold: empower patients and support vital research.
        </p>
        
        <div class="text-center mb-6">
          <h4 class="text-xl font-bold text-blue-400 mb-4">50% of All Proceeds are Donated to The Royal Marsden Cancer Charity UK (where HRHs Prince & Princess of Wales are co-Patrons)</h4>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 class="font-bold text-green-400 mb-2">Current Plan - £4.50 to The Royal Marsden:</h5>
            <p class="text-gray-300 text-sm">Directly funds world-class cancer research, patient support programs, and advanced treatment development.</p>
          </div>
          <div>
            <h5 class="font-bold text-blue-400 mb-2">Current Plan - £4.50 for Platform & Advocacy:</h5>
            <p class="text-gray-300 text-sm">Ensures our tools remain secure, supports development of new features, and allows us to continue our patient advocacy work.</p>
          </div>
          <div>
            <h5 class="font-bold text-green-400 mb-2">Complete Plan - £6 to The Royal Marsden:</h5>
            <p class="text-gray-300 text-sm">Enhanced support for comprehensive cancer research and patient care programs.</p>
          </div>
          <div>
            <h5 class="font-bold text-blue-400 mb-2">Complete Plan - £6 for Platform & Advocacy:</h5>
            <p class="text-gray-300 text-sm">Continued platform development and expanded patient advocacy initiatives.</p>
          </div>
        </div>
      </div>

      <!-- Safety Section -->
      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">For Your Safety & Understanding</h3>
        <p class="text-gray-700 mb-4">
          These templates are form fillable PDFs designed to help you organize your health information and empower communication with your healthcare team.
        </p>
        <p class="text-gray-900 font-bold mb-6">They are not medical advice.</p>
        
        <div class="space-y-4 text-gray-700">
          <div>
            <p><strong>• Consult a Medical Professional:</strong> Always discuss your health and the information in this document with a qualified healthcare provider.</p>
          </div>
          <div>
            <p><strong>• You Are in Control:</strong> You are responsible for the accuracy of the information you enter.</p>
          </div>
          <div>
            <p><strong>• Your Privacy is Paramount:</strong> These are downloadable PDF Forms. You save them locally to your own device. We never see, store, or have access to your personal health data.</p>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600">
            Due to the instant-download nature of these digital products, we cannot offer refunds once a purchase is made. Thank you for your understanding.
          </p>
        </div>
      </div>
    </div>
  `;

  // Replace the content
  myHealthStorySection.innerHTML = newContent;
  myHealthStorySection.className = "section-padding bg-gray-50";
  
  console.log('MyHealthStory section updated successfully!');
  
  // Now that the containers exist, render the PayPal buttons
  renderPayPalButtons();
}

// NEW PAYPAL RENDERING FUNCTION
function renderPayPalButtons() {
  // Render the PayPal button for the "Current Plan"
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '9.00',
            currency_code: 'GBP'
          },
          description: 'MyHealthStory Current Plan'
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        window.location.href = 'https://andysquire.ai/success';
      });
    },
    onError: function(err) {
      console.error('PayPal Current Plan Error:', err);
    }
  }).render('#paypal-button-current-plan');

  // Render the PayPal button for the "Complete Plan"
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '12.00',
            currency_code: 'GBP'
          },
          description: 'MyHealthStory Complete Plan'
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        window.location.href = 'https://andysquire.ai/success';
      });
    },
    onError: function(err) {
      console.error('PayPal Complete Plan Error:', err);
    }
  }).render('#paypal-button-complete-plan');
  
  console.log('PayPal buttons rendered successfully!');
}

// Start the update process
updateMyHealthStorySection();

