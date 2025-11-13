import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What services does BPH Growth offer?",
      answer: "We provide comprehensive business consulting including strategic planning, AI integration, funding access, leadership development, and operational optimization tailored to your growth stage."
    },
    {
      question: "How does 'The Growth Blueprint' ensure my plan is executable?",
      answer: "We dedicate a phase to creating the Operational Execution Playbook—a high-value deliverable that provides specific system architecture, workflow designs, and process audits (Ops Diagnostics) necessary to implement the strategy without friction."
    },
    {
      question: "What is the 'AI Governance Roadmap'?",
      answer: "This consulting service goes beyond simply installing AI tools. We help you design the ethical, compliant, and data-secure frameworks necessary to integrate AI into your operations (as required by local and international standards)."
    },
    {
      question: "Is the Business Clinic mandatory for loans?",
      answer: "For high-risk products like Micro-Enterprise Trade Finance, a mandatory component of the Business Clinic Micro-Training is required before disbursement to ensure financial literacy and mitigate compliance risk."
    },
    {
      question: "How does BPH Growth Fund determine eligibility for loans?",
      answer: "We use a hybrid underwriting model. We look at standard factors (income verification) plus our proprietary data: 1. PlansDeck Data Scoring (for consulting clients), and 2. Cluster Risk Scoring (for Micro-Trade clients)."
    },
    {
      question: "What is 'Systemic Efficiency Coaching' in the Business Clinic?",
      answer: "It's the practical application of the mindset work. We combine visualization with tangible skill development in personal workflow optimization, digital system organization, and executive habit formation."
    }
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest mb-2">FREQUENTLY ASKED</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">Questions</h2>
          <p className="text-sm lg:text-base text-gray-600">
            Anything unclear? <a href="mailto:hello@bphgrowth.com" className="text-black hover:text-[#60a5fa] transition-colors">hello@bphgrowth.com</a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-colors"
              >
                <h3 className="text-base lg:text-lg font-semibold pr-8">
                  {faq.question}
                </h3>
                
                {/* Plus/Minus Icon */}
                <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === index ? (
                    // Minus icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    // Plus icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/faqs">
            <button className="text-base lg:text-lg font-semibold hover:text-[#60a5fa] transition-colors">
              View All FAQs
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ