import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  return (
    <section className="bg-[#1a2332] px-8 py-16 lg:py-36 rounded-b-[40px]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 
          className="text-3xl lg:text-5xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-[#60a5fa]">Business Growth</span>
          <span className="text-white"> Meets </span>
          <span className="text-[#60a5fa]">Financial Freedom</span>
        </h1>
        
        <p 
          className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From strategic business consulting and AI-powered planning to flexible loan solutions—we provide the expertise and capital you need to launch, scale, and sustain your business success.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a href="/services" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-[#60a5fa] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3b82f6] transition-colors transform hover:scale-105">
              Schedule Consultation
            </button>
          </a>
          
          <a href="/bph-growth-fund" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-white text-[#60a5fa] px-8 py-3 rounded-full text-lg font-semibold border-2 border-[#60a5fa] hover:bg-gray-100 transition-colors transform hover:scale-105">
              Apply for a Loan
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero