import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    })
  }, [])

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
            Let's Start a Conversation
          </h1>

          <p 
            className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Whether you have a question, want to learn more about our services, or are ready to transform your business, we're here to help.
          </p>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-12 lg:py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-32 lg:gap-y-12">
            {/* Phone */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">Phone</h3>
              <p className="text-sm lg:text-base text-gray-700">[+234... available upon inquiry]</p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">Address</h3>
              <p className="text-sm lg:text-base text-gray-700">23, Durojaiye Street, Surulere, Lagos</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">Email</h3>
              <p className="text-sm lg:text-base text-gray-700">
                <a href="mailto:info@bphgrowth.com" className="hover:opacity-80 transition-opacity">
                  info@bphgrowth.com
                </a>
              </p>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">Opening Hours</h3>
              <div className="text-sm lg:text-base text-gray-700 space-y-1">
                <p>Monday–Friday: 8am–5:00pm</p>
                <p>Saturday: 8am–3:00pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media Links */}
            {/* <div className="lg:col-span-2">
              <p className="text-sm lg:text-base text-gray-700">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-80 transition-opacity">
                  LinkedIn
                </a>
                {' | '}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-80 transition-opacity">
                  Facebook
                </a>
                {' | '}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:opacity-80 transition-opacity">
                  Twitter
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactUs