import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import BPHGrowthFund from './pages/BPHGrowthFund'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import FAQs from './pages/FAQs'

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import ConsultationApplications from './pages/admin/ConsultationApplications'
import LoanApplications from './pages/admin/LoanApplications'
import FAQManager from './pages/admin/FAQManager'
import InsightsManager from './pages/admin/InsightsManager'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bph-growth-fund" element={<BPHGrowthFund />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faqs" element={<FAQs />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/consultations" element={<ConsultationApplications />} />
        <Route path="/admin/loans" element={<LoanApplications />} />
        <Route path="/admin/faqs" element={<FAQManager />} />
        <Route path="/admin/insights" element={<InsightsManager />} />
      </Routes>
    </Router>
  )
}

export default App