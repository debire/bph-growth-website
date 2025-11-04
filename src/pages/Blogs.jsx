import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

function Blogs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    })
  }, [])

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
    },
    {
      category: "STRATEGIC PLANNING",
      title: "How to Build a Business Plan That Investors Actually Read",
      description: "Essential elements of a bankable business plan that captures attention and secures funding.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      category: "MARKET INSIGHTS",
      title: "Navigating Nigeria's Regulatory Landscape: A Practical Guide for Startups",
      description: "Understanding compliance requirements and regulatory frameworks for different industries in Nigeria.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      category: "LEADERSHIP",
      title: "Scaling Your Team: When and How to Hire for Growth",
      description: "Strategic approaches to building high-performing teams that drive sustainable business expansion.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    }
  ]

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a2332] px-8 py-16 lg:py-40 rounded-b-[40px]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-3xl lg:text-5xl font-bold mb-6 text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Insights & Resources for Nigerian Entrepreneurs
          </h1>
          
          <p 
            className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Expert perspectives on business planning, funding strategies, market trends, and growth tactics to help you build a successful business in Nigeria.
          </p>
        </div>
      </section>

      {/* Blog Insights Section */}
      <section className="py-12 lg:py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title and Subtitle */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
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
                <div className="h-48 lg:h-64 overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content section with dark blue background */}
                <div className="bg-[#1a2332] text-white p-5 lg:p-6 grow flex flex-col">
                  <p className="text-xs lg:text-sm font-semibold tracking-wider mb-2 lg:mb-3 text-[#60a5fa]">
                    {insight.category}
                  </p>
                  
                  <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 leading-tight">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs lg:text-sm mb-3 lg:mb-4 leading-relaxed grow">
                    {insight.description}
                  </p>

                  <button className="flex items-center gap-2 text-white text-sm lg:text-base font-semibold hover:gap-4 transition-all group">
                    Read More
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default Blogs