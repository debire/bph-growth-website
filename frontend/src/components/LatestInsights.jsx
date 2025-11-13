import { useState } from 'react'

function LatestInsights() {
  const [selectedInsight, setSelectedInsight] = useState(null)

  const insights = [
    {
      category: "AI CONSULTING",
      title: "The Future is Augmented: Integrating AI into Your 2025 Business Model",
      description: "How BPH Growth's AI strategy consulting can transform operational efficiency and reduce time-to-market.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      content: `
        <p class="mb-4">In an era where technology evolves at breakneck speed, artificial intelligence is no longer a futuristic concept—it's a present-day necessity for businesses looking to stay competitive. At BPH Growth, we've witnessed firsthand how AI integration transforms operational frameworks, streamlines processes, and significantly reduces time-to-market for products and services.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">The Current State of AI in Nigerian Business</h3>
        <p class="mb-4">Nigerian businesses are at a critical juncture. While global corporations leverage AI for everything from customer service to predictive analytics, many local enterprises remain hesitant, citing concerns about cost, complexity, and relevance to their operations. However, this hesitation creates a widening gap between early adopters and those left behind.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Why AI Strategy Matters</h3>
        <p class="mb-4">Simply implementing AI tools without a comprehensive strategy is like buying a sports car without learning to drive—you have the potential for speed but lack the control to harness it effectively. A well-crafted AI strategy considers your business's unique challenges, existing infrastructure, and growth objectives.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Key Benefits of AI Integration</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Operational Efficiency:</strong> Automate repetitive tasks, freeing your team to focus on high-value activities that require human creativity and decision-making.</li>
          <li><strong>Data-Driven Insights:</strong> Transform raw data into actionable intelligence, enabling more informed strategic decisions.</li>
          <li><strong>Enhanced Customer Experience:</strong> Deploy AI-powered chatbots and recommendation systems that provide 24/7 support and personalized interactions.</li>
          <li><strong>Cost Reduction:</strong> Minimize errors, optimize resource allocation, and reduce operational overhead through intelligent automation.</li>
          <li><strong>Competitive Advantage:</strong> Stay ahead of competitors by leveraging predictive analytics and market intelligence.</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">BPH Growth's Approach to AI Consulting</h3>
        <p class="mb-4">Our AI consulting methodology is built on three pillars:</p>
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>Assessment:</strong> We begin by thoroughly evaluating your current operations, identifying pain points where AI can deliver the most significant impact.</li>
          <li><strong>Strategy Development:</strong> We create a customized AI roadmap that aligns with your business goals, budget constraints, and technical capabilities.</li>
          <li><strong>Implementation Support:</strong> Beyond strategy, we provide hands-on guidance during implementation, ensuring your team understands and embraces the new systems.</li>
        </ol>

        <h3 class="text-xl font-bold mb-3 mt-6">Real-World Applications</h3>
        <p class="mb-4">Consider a Lagos-based retail company we worked with. By implementing AI-driven inventory management and customer behavior analysis, they reduced stockouts by 40%, improved cash flow, and increased customer satisfaction scores by 35%—all within six months of implementation.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Getting Started</h3>
        <p class="mb-4">The journey to AI integration doesn't require massive upfront investment. Start small, focus on high-impact areas, and scale gradually. BPH Growth specializes in making AI accessible and practical for Nigerian businesses of all sizes.</p>

        <p class="mb-4">Ready to explore how AI can transform your business? Contact BPH Growth for a comprehensive AI readiness assessment and discover opportunities you might be missing.</p>
      `
    },
    {
      category: "BUSINESS CLINIC",
      title: "Cognitive Reprogramming: The Mindset Shift That Attracts Investors",
      description: "Why visualization and affirmations are the secret weapons of resilient, successful founders.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      content: `
        <p class="mb-4">Behind every successful business is a founder with an unshakeable mindset. While business plans, financial projections, and market analysis are crucial, the psychological foundation of entrepreneurship often determines who perseveres and who gives up when challenges arise.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">The Investor's Hidden Filter</h3>
        <p class="mb-4">Investors don't just evaluate your business model—they're assessing you. They're looking for founders who exude confidence, demonstrate resilience, and maintain clarity under pressure. These qualities aren't innate; they're cultivated through deliberate mental conditioning.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Understanding Cognitive Reprogramming</h3>
        <p class="mb-4">Cognitive reprogramming is the practice of consciously reshaping your thought patterns, beliefs, and mental habits to align with your entrepreneurial goals. It's about replacing limiting beliefs with empowering ones, transforming fear into fuel, and cultivating unwavering self-belief.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">The Power of Visualization</h3>
        <p class="mb-4">Elite athletes have used visualization for decades, mentally rehearsing their performance before competition. The same principle applies to entrepreneurship. When you consistently visualize successful investor meetings, product launches, and business milestones, your brain begins treating these scenarios as familiar rather than frightening.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Practical Visualization Techniques:</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Spend 10 minutes daily visualizing successful business outcomes in vivid detail</li>
          <li>Create a vision board with images representing your business goals</li>
          <li>Practice mental rehearsal before important meetings or presentations</li>
          <li>Visualize yourself confidently handling challenges and setbacks</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">Strategic Affirmations</h3>
        <p class="mb-4">Affirmations aren't just feel-good mantras—they're tools for rewiring neural pathways. When crafted strategically and repeated consistently, affirmations help overcome imposter syndrome, build confidence, and maintain motivation during difficult periods.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Effective Affirmation Examples:</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>"I create value that investors recognize and want to support"</li>
          <li>"Challenges are opportunities for growth and innovation"</li>
          <li>"I am resourceful, resilient, and capable of building a successful business"</li>
          <li>"My vision is clear, my strategy is sound, and my execution is excellent"</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">The BPH Business Clinic Approach</h3>
        <p class="mb-4">Our Business Clinic program integrates cognitive reprogramming with practical business training. We don't just teach you to pitch—we help you embody the confidence that makes investors believe in your vision. Through guided visualization exercises, strategic affirmation development, and mindset coaching, we prepare founders psychologically for the demands of entrepreneurship.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Real Results</h3>
        <p class="mb-4">One of our clients, a fintech founder, struggled with anxiety during investor presentations. After eight weeks in our Business Clinic program, incorporating daily visualization and affirmations, she secured ₦15 million in seed funding. The difference? She projected confidence and clarity that made investors trust her ability to execute.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Starting Your Mental Transformation</h3>
        <p class="mb-4">Begin today. Set aside 15 minutes each morning for visualization and affirmations. Be consistent, be specific, and watch how your mindset shifts transform your business reality. Remember: investors invest in people who believe in themselves. Make sure you're that person.</p>
      `
    },
    {
      category: "FUNDING ACCESS",
      title: "Debt vs. Equity: Which Funding Path is Right for Your Growth Stage?",
      description: "An in-depth guide on analyzing your current stage to secure the most favorable capital.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      content: `
        <p class="mb-4">One of the most critical decisions facing entrepreneurs is how to finance their growth. Should you take on debt or give up equity? The answer isn't one-size-fits-all—it depends on your business stage, growth trajectory, cash flow situation, and long-term vision.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Understanding the Fundamental Difference</h3>
        <p class="mb-4">Debt financing means borrowing money that must be repaid with interest, while equity financing involves selling ownership stakes in your business to investors. Each comes with distinct advantages, obligations, and long-term implications for your company's future.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">When Debt Makes Sense</h3>
        <p class="mb-4">Debt financing is ideal when you have:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Predictable Cash Flow:</strong> You can confidently project revenue to cover loan repayments</li>
          <li><strong>Short-Term Capital Needs:</strong> You need funding for specific purchases or inventory that will generate quick returns</li>
          <li><strong>Control Priorities:</strong> You want to maintain full ownership and decision-making authority</li>
          <li><strong>Tax Considerations:</strong> Loan interest is tax-deductible, reducing your overall cost of capital</li>
          <li><strong>Established Operations:</strong> Your business has proven revenue streams and collateral to secure favorable terms</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">Advantages of Debt Financing:</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>Retain full ownership and control</li>
          <li>Loan repayment has a clear endpoint</li>
          <li>Interest payments are tax-deductible</li>
          <li>No dilution of future profits</li>
          <li>Easier to secure for established businesses with assets</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">When Equity Makes Sense</h3>
        <p class="mb-4">Equity financing is preferable when you:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Need Substantial Capital:</strong> You're raising significant funds that debt repayment would strain</li>
          <li><strong>Lack Consistent Revenue:</strong> Your startup isn't generating sufficient cash flow to service debt</li>
          <li><strong>Want Strategic Partners:</strong> You value investor expertise, networks, and guidance beyond just capital</li>
          <li><strong>Have High Growth Potential:</strong> Your business model promises exponential returns that justify sharing ownership</li>
          <li><strong>Require Flexible Capital:</strong> You need funding without the pressure of fixed repayment schedules</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">Advantages of Equity Financing:</h3>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>No repayment obligation or interest burden</li>
          <li>Investors share business risk</li>
          <li>Access to investor expertise and networks</li>
          <li>Increased credibility with customers and partners</li>
          <li>Suitable for high-risk, high-reward ventures</li>
        </ul>

        <h3 class="text-xl font-bold mb-3 mt-6">Hybrid Approaches</h3>
        <p class="mb-4">Many successful businesses use a combination of debt and equity at different stages. For example, you might raise equity funding for initial growth, then use debt for working capital once revenue is established. Convertible notes and revenue-based financing offer middle-ground options worth exploring.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">Stage-Specific Recommendations</h3>
        <p class="mb-4"><strong>Idea Stage:</strong> Bootstrapping or small equity from friends/family. Debt is generally unavailable and inadvisable.</p>
        <p class="mb-4"><strong>Early Stage (0-2 years):</strong> Equity financing from angel investors or early-stage VCs. Focus on growth over profitability.</p>
        <p class="mb-4"><strong>Growth Stage (2-5 years):</strong> Combination of equity and debt. Use equity for major expansion, debt for working capital and equipment.</p>
        <p class="mb-4"><strong>Established Stage (5+ years):</strong> Primarily debt financing to avoid dilution, with strategic equity only for transformative opportunities.</p>

        <h3 class="text-xl font-bold mb-3 mt-6">How BPH Growth Fund Helps</h3>
        <p class="mb-4">We don't believe in one-size-fits-all solutions. Our team analyzes your specific situation—cash flow, growth projections, market position, and personal goals—to recommend the optimal funding structure. Whether it's connecting you with equity investors or structuring favorable debt terms, we ensure you make informed decisions aligned with your vision.</p>

        <p class="mb-4">Ready to explore your funding options? Contact BPH Growth for a personalized funding strategy consultation.</p>
      `
    }
  ]

  const openModal = (insight) => {
    setSelectedInsight(insight)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedInsight(null)
    document.body.style.overflow = 'unset'
  }

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
              onClick={() => openModal(insight)}
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

      {/* Modal */}
      {selectedInsight && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-end z-10">
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 lg:p-10">
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={selectedInsight.image} 
                  alt={selectedInsight.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>

              {/* Category */}
              <p className="text-sm font-semibold tracking-wider mb-3 text-[#60a5fa]">
                {selectedInsight.category}
              </p>

              {/* Title */}
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-900">
                {selectedInsight.title}
              </h2>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedInsight.content }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default LatestInsights