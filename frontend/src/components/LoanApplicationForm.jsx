import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
// import PersonalLoanForm from '../components/loan-forms/PersonalLoanForm'
// import BusinessLoanForm from '../components/loan-forms/BusinessLoanForm'
// import EquityFinancingForm from '../components/loan-forms/EquityFinancingForm'
// import PersonalAssetFinancingForm from '../components/loan-forms/PersonalAssetFinancingForm'
// import BusinessAssetFinancingForm from '../components/loan-forms/BusinessAssetFinancingForm'
import api from '../config/api'

function LoanApplicationForm() {
  const navigate = useNavigate()
  const [selectedLoanType, setSelectedLoanType] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const loanTypes = [
    {
      id: 'personal',
      title: 'Personal Loan',
      description: 'For individual financial needs, home improvement, education, or personal expenses.',
      icon: '👤',
      component: PersonalLoanForm
    },
    {
      id: 'business',
      title: 'Business Loan',
      description: 'Working capital, inventory, equipment, or operational expenses for your business.',
      icon: '🏢',
      component: BusinessLoanForm
    },
    {
      id: 'equity',
      title: 'Equity Financing',
      description: 'Investment capital in exchange for equity stake in your high-growth business.',
      icon: '📈',
      component: EquityFinancingForm
    },
    {
      id: 'personal-asset',
      title: 'Personal Asset Financing',
      description: 'Financing for vehicles, properties, or other personal assets.',
      icon: '🚗',
      component: PersonalAssetFinancingForm
    },
    {
      id: 'business-asset',
      title: 'Business Asset Financing',
      description: 'Financing for business equipment, machinery, or commercial property.',
      icon: '🏭',
      component: BusinessAssetFinancingForm
    }
  ]

  const handleLoanTypeSelect = (loanType) => {
    setSelectedLoanType(loanType)
    setSubmitError('')
    setSubmitSuccess(false)
  }

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    try {
      const response = await api.post('/loans/submit', formData)

      if (response.data.success) {
        setSubmitSuccess(true)
        
        // Show success message
        setTimeout(() => {
          // Redirect to home or thank you page
          navigate('/')
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting loan application:', error)
      setSubmitError(error.response?.data?.message || 'Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    setSelectedLoanType(null)
    setSubmitError('')
    setSubmitSuccess(false)
  }

  const SelectedLoanForm = selectedLoanType?.component

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#1a2332] px-8 py-16 lg:py-24 rounded-b-[40px]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            {selectedLoanType ? selectedLoanType.title : 'Apply for Funding'}
          </h1>
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            {selectedLoanType 
              ? 'Complete the form below to submit your application. We\'ll review it and get back to you within 3-5 business days.'
              : 'Choose the funding option that best fits your needs. We offer flexible terms and competitive rates.'}
          </p>
        </div>
      </section>

      {/* Success Message */}
      {submitSuccess && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">Application Submitted Successfully!</h3>
            <p className="text-green-700">
              Thank you for your application. We've sent a confirmation email to your inbox. 
              Our team will review your application and contact you within 3-5 business days.
            </p>
            <p className="text-green-600 text-sm mt-4">Redirecting to home page...</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600">{submitError}</p>
          </div>
        </div>
      )}

      {/* Loan Type Selection or Form */}
      <section className="py-12 lg:py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {!selectedLoanType ? (
            /* Loan Type Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((loanType) => (
                <div
                  key={loanType.id}
                  onClick={() => handleLoanTypeSelect(loanType)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{loanType.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{loanType.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{loanType.description}</p>
                  <button className="text-[#60a5fa] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            /* Selected Loan Form */
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleBack}
                className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                disabled={isSubmitting}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Loan Types
              </button>

              <SelectedLoanForm 
                onSubmit={handleFormSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LoanApplicationForm