import facebookIcon from '../assets/icons/Facebook.svg'
import linkedinIcon from '../assets/icons/LinkedIn.svg'
import xIcon from '../assets/icons/X.svg'

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          {/* Logo and Description */}
          <div className="lg:col-span-3">
            <a href="/" className="block">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 cursor-pointer hover:opacity-80 transition-opacity">LOGO</h2>
            </a>
            <p className="text-sm text-gray-600 mb-6">
              The go-to support system for the SME/Start-up community in Nigeria, helping them achieve scale and growth.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              
              {/* X (Twitter) */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-700 hover:text-black">Home</a></li>
              <li><a href="/about-us" className="text-gray-700 hover:text-black">About Us</a></li>
              <li><a href="/services" className="text-gray-700 hover:text-black">Our Services</a></li>
              <li><a href="/faqs" className="text-gray-700 hover:text-black">FAQ</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-700">Funding & Capital Access</li>
              <li className="text-gray-700">Strategic Planning & Business Consulting</li>
              <li className="text-gray-700">Personal and Business Loans</li>
              <li className="text-gray-700">Asset Financing & Capital Access</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li className="text-gray-700">Planning Guide</li>
              <li className="text-gray-700">Blog</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold mb-4">Contact us</h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="wrap-break-word">
                Email: <a href="mailto:hello@bphgrowth.com" className="hover:text-black">hello@bphgrowth.com</a>
              </p>
              <p>Phone: +234...available upon inquiry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-8 py-2 text-center">
          <p className="text-white text-sm">© 2025 BPH Growth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer