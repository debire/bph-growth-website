function FAQ() {
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
      question: "What is the 'AI Governance Roadmap?",
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest mb-2">FREQUENTLY ASKED</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">Questions</h2>
          <p className="text-sm lg:text-base text-gray-600">
            Anything unclear? <a href="mailto:hello@bphgrowth.com" className="text-black hover:text-[#60a5fa] transition-colors">hello@bphgrowth.com</a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-12 mb-12">
          {faqs.slice(0, 4).map((faq, index) => (
            <div key={index} className="lg:block">
              <h3 className="text-lg lg:text-xl font-bold mb-3">
                {faq.question}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
          {/* Show last 2 FAQs only on desktop */}
          {faqs.slice(4).map((faq, index) => (
            <div key={index + 4} className="hidden lg:block">
              <h3 className="text-xl font-bold mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/faqs" className="cursor-pointer">
            <button className="text-base lg:text-lg font-semibold hover:text-[#60a5fa] transition-colors cursor-pointer">
              View All FAQs
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ