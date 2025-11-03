function LatestInsights() {
  const insights = [
    {
      category: "AI CONSULTING",
      title: "The Future is Augmented: Integrating AI into Your 2025 Business Model",
      description: "How BPH Growth's AI strategy consulting can transform operational efficiency and reduce time-to-market.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      category: "BUSINESS CLINIC",
      title: "Cognitive Reprogramming: The Mindset Shift That Attracts Investors",
      description: "Why visualization and affirmations are the secret weapons of resilient, successful founders.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
    },
    {
      category: "FUNDING ACCESS",
      title: "Debt vs. Equity: Which Funding Path is Right for Your Growth Stage?",
      description: "An in-depth guide on analyzing your current stage to secure the most favorable capital.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    }
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest Insights & Strategies
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            Stay ahead of the curve with our expert analysis on funding, AI, and strategic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image section */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content section with dark blue background - flex-grow to fill space */}
              <div className="bg-[#1a2332] text-white p-6 grow flex flex-col">
                <p className="text-sm font-semibold tracking-wider mb-3 text-[#60a5fa]">
                  {insight.category}
                </p>
                
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {insight.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed grow">
                  {insight.description}
                </p>

                <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all group">
                  Read More
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestInsights