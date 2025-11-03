function About() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm lg:text-base">
              <p>
                At Business Plan Hub Growth, we have a proven track record of helping SMEs/Start-ups grow profitably and scale quickly. We provide holistic Business Support and Funding Advisory, backed by cutting-edge AI tools and deep human expertise. We specialize in overcoming the most common pain points of Nigerian SMEs: Access to Capital, Access to Market, and Access to Talent.
              </p>
              
              <p>
                We don't just write plans; we craft bankable strategies that make investors run after you. Our successful business re-engineering processes and lean-centered scale models have commanded behemoth results for our clientele across Financial Services, FMCG, Tech, and Agriculture.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
              alt="Business meeting" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About