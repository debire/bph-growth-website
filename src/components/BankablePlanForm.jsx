import { useState } from 'react'
import Select from 'react-select'

function BankablePlanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    industrySector: null,
    currentBusinessStage: null,
    primaryServiceInterest: null,
    targetFundingAmount: null,
    businessSummary: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({
      ...formData,
      [actionMeta.name]: selectedOption
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  // Detect if device is mobile
  const isMobile = window.innerWidth < 1024

  // Options for dropdowns
  const industrySectorOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'fmcg', label: 'FMCG' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'education', label: 'Education' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'hospitality', label: 'Hospitality & Tourism' },
    { value: 'other', label: 'Other' }
  ]

  const businessStageOptions = [
    { value: 'idea', label: 'Idea Stage' },
    { value: 'startup', label: 'Startup (0-2 years)' },
    { value: 'early-growth', label: 'Early Growth (2-5 years)' },
    { value: 'established', label: 'Established (5+ years)' },
    { value: 'scaling', label: 'Scaling/Expansion' }
  ]

  const serviceInterestOptions = [
    { value: 'strategic-planning', label: 'Strategic Planning & Execution' },
    { value: 'funding-access', label: 'Funding & Capital Access' },
    { value: 'ai-consulting', label: 'AI Consulting & Digital Transformation' },
    { value: 'business-clinic', label: 'Business Clinic & Leadership Development' },
    { value: 'multiple', label: 'Multiple Services' }
  ]

  const fundingAmountOptions = [
    { value: 'under-1m', label: 'Under ₦1 Million' },
    { value: '1m-5m', label: '₦1 Million - ₦5 Million' },
    { value: '5m-10m', label: '₦5 Million - ₦10 Million' },
    { value: '10m-50m', label: '₦10 Million - ₦50 Million' },
    { value: '50m-100m', label: '₦50 Million - ₦100 Million' },
    { value: 'over-100m', label: 'Over ₦100 Million' },
    { value: 'not-applicable', label: 'Not Applicable' }
  ]

  // Custom styles for react-select
  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      padding: '0.375rem',
      boxShadow: 'none',
      borderColor: state.isFocused ? '#9ca3af' : '#d1d5db',
      '&:hover': {
        borderColor: '#9ca3af'
      }
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9ca3af'
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '0.5rem',
      overflow: 'hidden',
      border: '1px solid #d1d5db'
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      borderRadius: '0.5rem'
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? '#f3f4f6'
        : state.isFocused
        ? '#f3f4f6'
        : 'white',
      color: 'black',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#f3f4f6'
      }
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#6b7280',
      '&:hover': {
        color: '#6b7280'
      }
    }),
    indicatorSeparator: () => ({
      display: 'none'
    })
  }

  return (
    <section id="consultation-form" className="py-12 lg:py-16 px-4 lg:px-8 bg-[#1a2332]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-3">Schedule Your Consultation</h2>
          <p className="text-gray-300 text-sm lg:text-lg">
            Tell us about your venture, and let's start the conversation. Your first 15-minute consultation is free.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            {/* Business Email */}
            <div>
              <input
                type="email"
                name="businessEmail"
                placeholder="Business Email"
                value={formData.businessEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            {/* Industry Sector */}
            <div>
              <Select
                name="industrySector"
                options={industrySectorOptions}
                value={formData.industrySector}
                onChange={handleSelectChange}
                placeholder="Industry Sector"
                styles={customSelectStyles}
                isSearchable={!isMobile}
                required
              />
            </div>

            {/* Current Business Stage */}
            <div>
              <Select
                name="currentBusinessStage"
                options={businessStageOptions}
                value={formData.currentBusinessStage}
                onChange={handleSelectChange}
                placeholder="Current Business Stage"
                styles={customSelectStyles}
                isSearchable={!isMobile}
                required
              />
            </div>

            {/* Primary Service Interest */}
            <div>
              <Select
                name="primaryServiceInterest"
                options={serviceInterestOptions}
                value={formData.primaryServiceInterest}
                onChange={handleSelectChange}
                placeholder="Primary Service Interest"
                styles={customSelectStyles}
                isSearchable={!isMobile}
                required
              />
            </div>

            {/* Target Funding Amount */}
            <div className="lg:col-span-2">
              <Select
                name="targetFundingAmount"
                options={fundingAmountOptions}
                value={formData.targetFundingAmount}
                onChange={handleSelectChange}
                placeholder="Target Funding Amount (if applicable)"
                styles={customSelectStyles}
                isSearchable={!isMobile}
                isClearable
              />
            </div>

            {/* Business Summary */}
            <div className="lg:col-span-2">
              <textarea
                name="businessSummary"
                placeholder="Quick Summary of Business Idea or Challenge"
                value={formData.businessSummary}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 resize-none"
                required
              />
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs lg:text-sm text-gray-600 mt-4 lg:mt-6 mb-4 lg:mb-6">
            By submitting, you agree to our{' '}
            <a href="/company-policies" className="underline hover:text-[#60a5fa]">
              Privacy Policy
            </a>
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#1a2332] text-white px-12 py-2.5 lg:px-16 lg:py-3 text-sm lg:text-base rounded-full hover:bg-[#2a3f52] transition-colors font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BankablePlanForm