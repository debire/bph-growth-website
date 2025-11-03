import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import CoreValues from '../components/CoreValues'
import Partners from '../components/Partners'

function AboutUs() {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a2332] px-8 py-40 rounded-b-[40px]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Building the Future of African Entrepreneurship
          </h1>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            We're more than consultants—we're your partners in transforming bold ideas into thriving businesses that drive economic growth across Nigeria.
          </p>
        </div>
      </section>

      {/* Who We Are, Vision & Mission Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16">
            {/* Left Column - Who We Are */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Business Plan Hub Growth, we have a proven track record of helping SMEs/Start-ups grow profitably and scale quickly. We provide holistic Business Support and Advisory Services, integrating modern technology and deep human expertise. We specialize in overcoming the most common pain points of Nigerian SMEs: Access to Capital, Access to Market, and Access to Talent.
                </p>
                
                <p>
                  We don't just write plans; we craft bankable strategies that make investors run after you. Our successful business re-engineering processes and lean-centered scale models have commanded behemoth results for our clientele across Financial Services, FMCG, Tech, and Agriculture.
                </p>
              </div>
            </div>

            {/* Right Column - Vision & Mission */}
            <div className="space-y-12">
              {/* Our Vision */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be Africa's leading business growth platform, recognized for transforming ambitious ideas into successful enterprises through innovation, expertise, and unwavering commitment to our clients' success.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower Nigerian entrepreneurs with strategic business planning, AI-augmented insights, and access to funding, enabling them to launch, scale, and sustain profitable ventures that contribute to economic growth and job creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />

      {/* What Makes Us Different Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12">
  {/* Left side - Image */}
  <div className="flex">
    <img 
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
      alt="Team collaboration" 
      className="w-full h-full object-cover rounded-3xl"
    />
  </div>

  {/* Right side - Content */}
  <div>
    <h2 className="text-4xl font-bold mb-8">What Makes Us Different</h2>
    
    <div className="space-y-8">
      {/* 1. AI-Augmented Intelligence */}
      <div>
        <h3 className="text-2xl font-bold mb-4">1. AI-Augmented Intelligence</h3>
        <p className="text-gray-700 leading-relaxed">
          Traditional consulting meets cutting-edge technology. We leverage AI-powered market research, financial modeling, and predictive analytics to give you data-driven insights that traditional consultants simply can't match.
        </p>
      </div>

      {/* 2. Nigerian Market Expertise */}
      <div>
        <h3 className="text-2xl font-bold mb-4">2. Nigerian Market Expertise</h3>
        <p className="text-gray-700 leading-relaxed">
          We don't offer cookie-cutter solutions. Our team deeply understands the Nigerian business landscape, regulatory environment, and funding ecosystem, allowing us to provide context-specific strategies that actually work.
        </p>
      </div>

      {/* 3. End-to-End Partnership */}
      <div>
        <h3 className="text-2xl font-bold mb-4">3. End-to-End Partnership</h3>
        <p className="text-gray-700 leading-relaxed">
          We're not just consultants—we're your growth partners. From initial ideation through funding to scale, we provide continuous support, resources, and guidance at every stage of your journey.
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* How We Work with You Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-8 mb-12">
    <h2 className="text-4xl font-bold text-center">How We Work with You</h2>
  </div>
  
  <div className="grid grid-cols-5 gap-1">
    {/* 01 - Client-Centric */}
    <div 
      className="relative h-[400px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-6 left-6">
        <span className="text-white text-6xl font-bold opacity-70">01</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-2xl font-bold mb-3">Client-Centric</h3>
        <p className="text-white text-xs leading-relaxed">
          Every strategy is customized to your unique business, industry, and goals. We don't believe in one-size-fits-all solutions.
        </p>
      </div>
    </div>

    {/* 02 - Data-Driven */}
    <div 
      className="relative h-[400px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-6 left-6">
        <span className="text-white text-6xl font-bold opacity-70">02</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-2xl font-bold mb-3">Data-Driven</h3>
        <p className="text-white text-xs leading-relaxed">
          Our recommendations are backed by market research, competitive analysis, and AI-powered insights—not gut feelings.
        </p>
      </div>
    </div>

    {/* 03 - Action-Oriented */}
    <div 
      className="relative h-[400px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-6 left-6">
        <span className="text-white text-6xl font-bold opacity-70">03</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-2xl font-bold mb-3">Action-Oriented</h3>
        <p className="text-white text-xs leading-relaxed">
          We deliver practical, implementable strategies with clear action steps, timelines, and accountability measures.
        </p>
      </div>
    </div>

    {/* 04 - Collaborative */}
    <div 
      className="relative h-[400px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-6 left-6">
        <span className="text-white text-6xl font-bold opacity-70">04</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-2xl font-bold mb-3">Collaborative</h3>
        <p className="text-white text-xs leading-relaxed">
          You're not handing off your business to strangers. We work alongside you as partners, ensuring capability building.
        </p>
      </div>
    </div>

    {/* 05 - Results-Focused */}
    <div 
      className="relative h-[400px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute top-6 left-6">
        <span className="text-white text-6xl font-bold opacity-70">05</span>
      </div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-2xl font-bold mb-3">Results-Focused</h3>
        <p className="text-white text-xs leading-relaxed">
          We measure success by your success. Our engagement doesn't end until you've achieved measurable, sustainable growth.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Meet Our Team Section */}
<section className="py-16 px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-3">Meet Our Team</h2>
      <p className="text-gray-600 text-lg">15+ Years of Combined Practical Experience</p>
    </div>

    {/* Management Team */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8">Management Team</h3>
      <div className="flex justify-center gap-12">
        {/* Team Member 1 */}
        <div className="text-center">
          <div className="w-64 h-80 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
              alt="Obafemi Darabidan"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Obafemi Darabidan</h4>
          <p className="text-gray-600">Executive Director</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <div className="w-64 h-80 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" 
              alt="Nelson Ochonogor"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Nelson Ochonogor</h4>
          <p className="text-gray-600">Executive Director</p>
        </div>
      </div>
    </div>

    {/* Board of Advisors */}
    <div>
      <h3 className="text-3xl font-bold text-center mb-8">Board of Advisors</h3>
      
      {/* First Row - 4 Members */}
      <div className="grid grid-cols-4 gap-8 mb-8">
        {/* Advisor 1 */}
        <div className="text-center">
          <div className="w-full h-64 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
              alt="Ebire Ayooluwa"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Ebire Ayooluwa</h4>
        </div>

        {/* Advisor 2 */}
        <div className="text-center">
          <div className="w-full h-64 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
              alt="Kanyinsola Awonusi ACCA"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Kanyinsola Awonusi ACCA</h4>
        </div>

        {/* Advisor 3 */}
        <div className="text-center">
          <div className="w-full h-64 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" 
              alt="Wole Medunoye BA"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Wole Medunoye BA</h4>
        </div>

        {/* Advisor 4 */}
        <div className="text-center">
          <div className="w-full h-64 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" 
              alt="Alueshima Kakwagh ACCA"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Alueshima Kakwagh ACCA</h4>
        </div>
      </div>

      {/* Second Row - 2 Members Centered */}
      <div className="flex justify-center gap-8">
        {/* Advisor 5 */}
        <div className="text-center">
          <div className="w-64 h-80 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" 
              alt="Obafemi Darabidan MCIB"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Obafemi Darabidan MCIB</h4>
        </div>

        {/* Advisor 6 */}
        <div className="text-center">
          <div className="w-64 h-80 bg-gray-300 mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80" 
              alt="Dupe Adeoye"
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-bold text-lg">Dupe Adeoye</h4>
        </div>
      </div>
    </div>
  </div>
</section>

      <Partners />
      
      {/* CTA Section */}
      <CTA />

      <Footer />
    </div>
  )
}

export default AboutUs