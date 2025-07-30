import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Brain, Award, Heart, Menu, X } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research & Innovation' },
    { id: 'humanoid', label: 'Humanoid Healthcare' },
    { id: 'myhealthstory', label: 'MyHealthStory' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  const renderNavigation = () => (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <span className="font-bold text-xl text-gray-900">AndySquire.AI</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-teal-100 text-teal-700'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-teal-100 text-teal-700'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-teal-500 to-green-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <span className="text-2xl font-bold">AndySquire.AI</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Founder & CEO,<br />
                <span className="text-yellow-300">Humanoid Healthcare</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-teal-100">
                Building the Certified Medical OS for Assistive Robotics
              </h2>
              
              <p className="text-xl mb-8 text-teal-50 leading-relaxed">
                Translating my journey as a 2x cancer survivor into MedTech & AI solutions that empower patient independence and enhance quality of life. #PatientFirstAI
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-4 text-lg"
                  onClick={() => setActiveSection('research')}
                >
                  Discover Our Vision
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                  onClick={() => setActiveSection('myhealthstory')}
                >
                  Discover My Patient Journey
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold">AS</span>
                      </div>
                      <div className="bg-white/90 text-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">ANDY SQUIRE</h3>
                        <p className="text-sm">Healthcare Innovation Strategist</p>
                        <p className="text-sm">2x Cancer Survivor</p>
                        <p className="text-sm">Patient Advocate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 text-center text-white pb-8">
          <p className="text-sm">📍 Basel, Switzerland &nbsp;&nbsp;&nbsp; ✉️ andy@andysquire.ai</p>
          <p className="text-xs mt-2 opacity-75">Made with Manus</p>
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Andy Squire</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As the Founder & CEO of Humanoid Healthcare, I am leading the charge to build the next generation of assistive robotics. My mission, fueled by my experience as a 2x cancer survivor, is to create AI-driven solutions that restore patient independence and dignity. Let's build the future of healthcare together.
          </p>
          <div className="mt-8">
            <p className="text-lg text-gray-700 italic mb-4">
              Interested in investment, partnerships, or joining our mission?
            </p>
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
              onClick={() => setActiveSection('contact')}
            >
              🤝 Explore a Collaboration
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold">AI Data-Driven Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our solutions are built on a foundation of human-centric design, leveraging AI to create intuitive and impactful experiences for patients, caregivers, and clinicians.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-bold">Thought Leader</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Driving the conversation on the future of MedTech, assistive robotics, and patient-centric AI. I am dedicated to sharing insights that bridge the gap between technology and human need. #PatientFirstAI
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl font-bold">Patient Advocacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Translating lived cancer experience into innovative healthcare solutions, focusing on patient empowerment and quality of life improvements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderResearch = () => (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Research & Innovation</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Building the technological and business foundation for a new era of healthcare: an AI-powered, humanoid-assisted ecosystem for patient-centric care at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold">Healthcare Ecosystem Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We are designing a comprehensive business model with a triple-win value proposition for patients, healthcare providers, and robotics manufacturers.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Data-driven business model (DDBM)</li>
                <li>• High-level business architecture</li>
                <li>• IT architecture integration</li>
                <li>• Stakeholder value propositions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-bold">Humanoid Healthcare Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our strategic framework targets the projected $1 trillion AI humanoid healthcare market, focusing on solutions for aging populations and chronic care management.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Market analysis & opportunity</li>
                <li>• Regulatory compliance (SaMD)</li>
                <li>• Triple-win value creation</li>
                <li>• Implementation roadmap</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl font-bold">MyHealthStory Initiative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                A core component of our patient-first approach, the MyHealthStory Initiative is a digital tool designed to empower patients and improve communication with medical teams.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• One-page health summary</li>
                <li>• Form-fillable PDF template</li>
                <li>• Privacy & consent management</li>
                <li>• Royal Marsden Cancer Charity support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Research Validation Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Research Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "The global humanoid robot market is expected to reach $75 billion by 2032, with healthcare applications representing a significant growth segment."
              </blockquote>
              <cite className="text-sm text-gray-500">- MarketsandMarkets Research, 2025</cite>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "By 2030, the global shortage of healthcare workers could reach 18 million, making AI and robotic solutions essential for sustainable care delivery."
              </blockquote>
              <cite className="text-sm text-gray-500">- World Health Organization</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderHumanoidHealthcare = () => (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Humanoid Healthcare Initiative</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-6">
            EMPOWERING INDEPENDENCE, ENHANCING PATIENT CARE
          </h2>
          <p className="text-xl text-gray-300">
            Claim your share of the future $1 Trillion AI Humanoid Healthcare Market
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">The Problem We're Solving</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📉</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-red-400">Caregiver Shortage</h4>
              <p className="text-gray-300">Our aging population is critically short of caregivers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-red-400">Rising Healthcare Costs</h4>
              <p className="text-gray-300">Current healthcare models are unsustainable</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-red-400">Personalised Care Gap</h4>
              <p className="text-gray-300">Existing solutions can't offer fully tailored treatment plans</p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Solution: Triple Win Value Proposition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle className="text-xl">Patients & Caregivers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Improve Quality of Life</li>
                  <li>• Reduce Hospitalizations</li>
                  <li>• Data-driven personalized care</li>
                  <li>• Emotional Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <CardTitle className="text-xl">Healthcare Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Transition to preventative care</li>
                  <li>• Lower costs via prevention</li>
                  <li>• Seamless data interoperability</li>
                  <li>• Greater Health Equity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <CardTitle className="text-xl">Robotics Manufacturers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Multiple revenue streams</li>
                  <li>• Subscription models</li>
                  <li>• API access opportunities</li>
                  <li>• Low-cost patient programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">Market Opportunity</h3>
          <div className="text-6xl font-bold text-blue-400 mb-4">€75 Billion by 2032</div>
          <div className="text-4xl font-bold text-purple-400 mb-6">Over €1 Trillion by 2040</div>
          <p className="text-xl text-gray-300 mb-8">Humanoid Market growing at 45%+ annually</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-400">Key Facts:</h4>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• Humanoids learn in simulated training</li>
                <li>• $20-$50K per unit (or lease)</li>
                <li>• Target: aging population initially</li>
                <li>• Expand to chronic patients</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-400">Why Now:</h4>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• AI & LLM advancements</li>
                <li>• Robotics cost reduction</li>
                <li>• Battery life improvements</li>
                <li>• Problem-solving capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContact = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact</h1>
          <p className="text-xl text-gray-600">
            Ready to join the future of healthcare? Let's connect.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700">Basel, Switzerland</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <a href="mailto:andy@andysquire.ai" className="text-teal-600 hover:text-teal-700">
                    andy@andysquire.ai
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔗</span>
                  <a href="https://linkedin.com/in/andysquire" className="text-teal-600 hover:text-teal-700">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Interest</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Investment Opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Strategic Partnerships</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Research Collaborations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Advisory Roles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Speaking Engagements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return renderHome()
      case 'about':
        return renderAbout()
      case 'research':
        return renderResearch()
      case 'humanoid':
        return renderHumanoidHealthcare()
      case 'contact':
        return renderContact()
      default:
        return renderHome()
    }
  }

  return (
    <div className="min-h-screen">
      {renderNavigation()}
      {renderSection()}
    </div>
  )
}

export default App

