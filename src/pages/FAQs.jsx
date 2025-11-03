import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function FAQs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  const faqs = [
    {
      question: "What services does BPH Growth offer?",
      answer: "We provide comprehensive business consulting including strategic planning, AI integration, business plan development, funding access (loans and equity financing), leadership development, and operational optimization tailored to your growth stage."
    },
    {
      question: "How long does it take to get a loan approved?",
      answer: "Our loan approval process is fast and efficient. Personal and business loans are typically processed within 2-24 hours, while asset financing may take 48-72 hours depending on documentation completeness."
    },
    {
      question: "What are the loan amount ranges available?",
      answer: "We offer flexible loan amounts ranging from ₦50,000 to ₦5,000,000 for personal loans, ₦50,000 to ₦1,000,000 for business loans, and up to ₦5,000,000 for asset financing, depending on your eligibility and requirements."
    },
    {
      question: "Do I need collateral to apply for a loan?",
      answer: "It depends on the loan type. Personal loans may require minimal collateral, while business loans typically need business documentation and guarantors. Asset financing loans are secured against the asset being financed."
    },
    {
      question: "How does the business consulting process work?",
      answer: "Our consulting process starts with an initial assessment (1-2 weeks), followed by strategic planning and implementation (3-6 months). We provide ongoing support, regular check-ins, and adjust strategies based on your progress and market changes."
    },
    {
      question: "What documents do I need to apply for a loan?",
      answer: "You'll need valid ID, BVN, proof of income, proof of residence, and bank statements. Business loans require additional documentation including business registration, tax ID, and business bank statements."
    },
    {
      question: "Can you help with equity financing and investor connections?",
      answer: "Yes! We provide access to angel investors and venture capital firms, help prepare investor-ready pitch decks and business plans, support due diligence processes, and guide you through negotiation strategies."
    },
    {
      question: "What makes BPH Growth different from other consultants?",
      answer: "We combine traditional business expertise with AI-augmented insights, offering data-driven strategies alongside personalized mentorship. Plus, we provide access to both consulting services and funding solutions in one place."
    },
    {
      question: "What is the interest rate on loans?",
      answer: "Our interest rates are competitive and vary by loan type. Personal loans start from 3% per month, business loans from 4% per month, and asset financing from 3% per month. Rates are customized based on loan amount, tenure, and risk assessment."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with businesses at all stages—from early-stage startups seeking validation and funding to established companies looking to scale, pivot, or optimize their operations."
    },
    {
      question: "What is the loan repayment tenure?",
      answer: "We offer flexible repayment options ranging from 1 to 12 months depending on the loan type and amount. You can choose a tenure that aligns with your cash flow and financial planning."
    },
    {
      question: "How much does your consulting service cost?",
      answer: "Our consulting fees are customized based on your specific needs, business size, and engagement scope. We offer flexible packages and payment plans. Contact us at hello@bphgrowth.com for a personalized quote."
    },
    {
      question: "Can I get both consulting and financing services?",
      answer: "Absolutely! We offer integrated solutions where you can access strategic business consulting to build a bankable plan and then secure funding through our loan or equity financing options—all under one roof."
    },
    {
      question: "What are the eligibility criteria for loans?",
      answer: "You must be a Nigerian citizen aged 21-60 years, have a stable income or business revenue, possess valid identification and BVN, and provide required documentation. Business loans require additional business registration documents."
    },
    {
      question: "Do you provide AI consulting and digital transformation services?",
      answer: "Yes! We specialize in AI strategy consulting, AI bot development, digital transformation roadmaps, custom AI solutions, and provide training for teams and executives to leverage AI for competitive advantage."
    },
    {
      question: "How can I get started with BPH Growth?",
      answer: "Simply reach out to us via hello@bphgrowth.com, schedule a consultation through our website, or visit our office at 23 Durojaiye Street, Surulere, Lagos. We'll discuss your needs and recommend the best path forward."
    }
  ]

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a2332] px-8 py-40 rounded-b-[40px]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-5xl font-bold mb-6 text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Feed Your Curiosity
          </h1>
          
          <p 
            className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get answers to common questions about our services, pricing, process, and how we can help your business thrive
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-wider mb-2">FREQUENTLY ASKED</p>
            <h2 className="text-5xl font-bold mb-4">Questions</h2>
            <p className="text-gray-600">
              Anything unclear? <a href="mailto:hello@bphgrowth.com" className="text-black hover:text-[#60a5fa] transition-colors">hello@bphgrowth.com</a>
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQs