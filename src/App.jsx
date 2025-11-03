import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import BPHGrowthFund from './pages/BPHGrowthFund'
import FAQs from './pages/FAQs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/bph-growth-fund" element={<BPHGrowthFund />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  )
}

export default App