import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ResourceCenter() {
  const [selectedResource, setSelectedResource] = useState(null)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  const resources = [
    {
      id: 1,
      title: "Business Plan Template",
      category: "STRATEGIC PLANNING",
      description: "A comprehensive business plan template with sections for executive summary, market analysis, financial projections, and more.",
      downloadSize: "PDF • 2.5 MB",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      id: 2,
      title: "Financial Projection Calculator",
      category: "FINANCIAL PLANNING",
      description: "Excel template for creating 3-5 year financial projections including income statements, cash flow, and balance sheets.",
      downloadSize: "XLSX • 1.8 MB",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      id: 3,
      title: "Pitch Deck Template",
      category: "FUNDING ACCESS",
      description: "Investor-ready pitch deck template with 15 essential slides to help you secure funding for your startup.",
      downloadSize: "PPTX • 3.2 MB",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
    },
    {
      id: 4,
      title: "Market Research Guide",
      category: "MARKET ANALYSIS",
      description: "Step-by-step guide to conducting effective market research for Nigerian businesses, including templates and examples.",
      downloadSize: "PDF • 1.9 MB",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 5,
      title: "Startup Legal Checklist",
      category: "LEGAL & COMPLIANCE",
      description: "Complete checklist of legal requirements, registrations, and licenses needed to start a business in Nigeria.",
      downloadSize: "PDF • 1.2 MB",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
    },
    {
      id: 6,
      title: "Customer Persona Worksheet",
      category: "MARKETING",
      description: "Interactive worksheet to help you define and understand your target customer personas and their pain points.",
      downloadSize: "PDF • 800 KB",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      id: 7,
      title: "Cash Flow Management Template",
      category: "FINANCIAL PLANNING",
      description: "Track and manage your business cash flow with this easy-to-use Excel template with automated calculations.",
      downloadSize: "XLSX • 1.5 MB",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
    },
    {
      id: 8,
      title: "AI Implementation Roadmap",
      category: "AI CONSULTING",
      description: "Strategic framework for integrating AI into your business operations, including assessment tools and implementation phases.",
      downloadSize: "PDF • 2.1 MB",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: 9,
      title: "Competitive Analysis Template",
      category: "STRATEGIC PLANNING",
      description: "Comprehensive template to analyze your competitors' strengths, weaknesses, and market positioning.",
      downloadSize: "XLSX • 1.3 MB",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ]

  const openDownloadModal = (resource) => {
    setSelectedResource(resource)
    setEmail('')
    document.body.style.overflow = 'hidden'
  }

  const closeDownloadModal = () => {
    setSelectedResource(null)
    setEmail('')
    setIsSubmitting(false)
    document.body.style.overflow = 'unset'
  }

  const handleDownload = (e) => {
    e.preventDefault()
    
    if (!email) {
      alert('Please enter your email address')
      return
    }

    setIsSubmitting(true)

    // TODO: Send email to backend API
    console.log('Sending resource to:', email)
    console.log('Resource:', selectedResource.title)

    // Simulate API call
    setTimeout(() => {
      alert(`Thank you! "${selectedResource.title}" will be sent to ${email} shortly.`)
      closeDownloadModal()
    }, 1500)
  }

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
            Free Business Resources
          </h1>
          
          <p 
            className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Download templates, guides, and tools to help you plan, launch, and grow your business. All resources are free and delivered directly to your inbox.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 lg:py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
              Available Resources
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Access professional business templates and guides curated by our experts
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col cursor-pointer transform hover:-translate-y-2"
                onClick={() => openDownloadModal(resource)}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Category */}
                  <p className="text-xs font-semibold tracking-wider text-[#60a5fa] mb-2">
                    {resource.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed grow">
                    {resource.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{resource.downloadSize}</span>
                    <button className="flex items-center gap-2 text-[#60a5fa] font-semibold hover:gap-3 transition-all group text-sm">
                      Download
                      <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={closeDownloadModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedResource.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{selectedResource.downloadSize}</p>
                </div>
                <button
                  onClick={closeDownloadModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleDownload} className="p-6">
              <p className="text-gray-700 mb-4">
                Enter your email address and we'll send you <strong>{selectedResource.title}</strong> immediately.
              </p>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Me This Resource'}
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By downloading, you agree to receive occasional emails from BPH Growth. 
                You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default ResourceCenter