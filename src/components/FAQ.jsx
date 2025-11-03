function FAQ() {
  const faqs = [
    {
      question: "What services does BPH Growth offer?",
      answer: "We provide comprehensive business consulting including strategic planning, AI integration, funding access, leadership development, and operational optimization tailored to your growth stage."
    },
    {
      question: "How long does the consulting process take?",
      answer: "Our engagement timelines vary based on your needs. Initial assessments take 1-2 weeks, while full strategic implementations typically span 3-6 months with ongoing support available."
    },
    {
      question: "Do you work with startups or established businesses?",
      answer: "We work with businesses at all stages - from early-stage startups seeking validation to established companies looking to scale or pivot their operations."
    },
    {
      question: "What makes BPH Growth different from other consultants?",
      answer: "We combine traditional business expertise with AI-augmented insights, offering data-driven strategies alongside personalized mentorship and access to our funding network."
    },
    {
      question: "How much does your consulting service cost?",
      answer: "Our pricing is customized based on your specific needs and business size. We offer flexible packages and payment plans. Contact us for a personalized quote."
    },
    {
      question: "Can you help with funding and investor connections?",
      answer: "Yes! We provide verified funding access, help prepare investor-ready materials, and connect you with our network of investors and financial partners."
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