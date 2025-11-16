import { useState } from 'react'
import Select from 'react-select'
import api from '../config/api' // ADD THIS IMPORT

function LoanApplicationForm() {
  const [selectedLoanType, setSelectedLoanType] = useState({ value: 'personal', label: 'Personal Loan' })
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false) // ADD THIS
  const [submitError, setSubmitError] = useState('') // ADD THIS
  const [submitSuccess, setSubmitSuccess] = useState(false) // ADD THIS

  // Detect if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

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

  const handleLoanTypeChange = (selectedOption) => {
    setSelectedLoanType(selectedOption)
    // Keep name, email, phone - reset everything else
    setFormData({
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    try {
      // Prepare data for backend
      const submitData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        loanType: selectedLoanType.label, // Send label instead of value
        loanAmount: formData.loanAmount?.label || '',
        repaymentPeriod: formData.repaymentPeriod?.label || '',

        // Personal loan fields
        employmentStatus: formData.employmentStatus?.label || undefined,
        monthlyIncome: formData.monthlyIncome || undefined,
        loanPurpose: formData.loanPurpose || undefined,

        // Business loan fields
        businessName: formData.businessName || undefined,
        businessRegistration: formData.businessRegistration || undefined,
        yearEstablished: formData.yearEstablished || undefined,
        monthlyRevenue: formData.monthlyRevenue || undefined,
        businessPurpose: formData.businessPurpose || undefined,

        // Asset financing fields
        assetType: formData.assetType?.label || undefined,
        assetValue: formData.assetValue || undefined,
        assetDescription: formData.assetDescription || undefined,
        purposeOfAsset: formData.purposeOfAsset || undefined
      }

      console.log('📤 Submitting loan application:', submitData)

      // Submit to backend
      const response = await api.post('/loans/submit', submitData)

      if (response.data.success) {
        setSubmitSuccess(true)

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: ''
        })

        // Reset to default loan type with correct value
        setSelectedLoanType({ value: 'personal', label: 'Personal Loan' })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting loan application:', error)
      setSubmitError(error.response?.data?.message || 'Failed to submit loan application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Loan type options - ADDED EQUITY FINANCING
  const loanTypeOptions = [
    { value: 'personal', label: 'Personal Loan' },
    { value: 'business', label: 'Business Loan' },
    { value: 'equity', label: 'Equity Financing' },
    { value: 'personal-asset', label: 'Personal Asset Financing' },
    { value: 'business-asset', label: 'Business Asset Financing' }
  ]

  // Common select options
  const loanAmountOptions = [
    { value: '50000-500000', label: '₦50,000 - ₦500,000' },
    { value: '500000-1000000', label: '₦500,000 - ₦1,000,000' },
    { value: '1000000-2000000', label: '₦1,000,000 - ₦2,000,000' },
    { value: '2000000-5000000', label: '₦2,000,000 - ₦5,000,000' },
    { value: '5000000+', label: 'Over ₦5,000,000' }
  ]

  const repaymentPeriodOptions = [
    { value: '1-3', label: '1-3 months' },
    { value: '4-6', label: '4-6 months' },
    { value: '7-9', label: '7-9 months' },
    { value: '10-12', label: '10-12 months' }
  ]

  const employmentStatusOptions = [
    { value: 'employed', label: 'Employed (Salaried)' },
    { value: 'self-employed', label: 'Self-Employed' },
    { value: 'business-owner', label: 'Business Owner' },
    { value: 'unemployed', label: 'Unemployed' }
  ]

  const assetTypeOptions = [
    { value: 'vehicle', label: 'Vehicle' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'machinery', label: 'Machinery/Equipment' },
    { value: 'electronics', label: 'Electronics/Gadgets' }
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
    <section id="loan-application-form" className="py-12 lg:py-16 px-4 lg:px-8 bg-[#1a2332]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-3">Fund Your Growth with BPH</h2>
          <p className="text-gray-300 text-sm lg:text-lg">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Success Message - ADD THIS */}
        {submitSuccess && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold">Loan Application Submitted Successfully!</p>
                <p className="text-green-700 text-sm">We'll review your application and get back to you within 3-5 business days.</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message - ADD THIS */}
        {submitError && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Common Fields - Always Visible */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            {/* Loan Type Selection */}
            <div>
              <Select
                options={loanTypeOptions}
                value={selectedLoanType}
                onChange={handleLoanTypeChange}
                placeholder="Loan Type"
                styles={customSelectStyles}
                isSearchable={!isMobile}
              />
            </div>

            {/* Common Loan Fields */}
            <div>
              <Select
                name="loanAmount"
                options={loanAmountOptions}
                value={formData.loanAmount}
                onChange={handleSelectChange}
                placeholder="Desired Loan Amount"
                styles={customSelectStyles}
                isSearchable={!isMobile}
                required
              />
            </div>

            <div>
              <Select
                name="repaymentPeriod"
                options={repaymentPeriodOptions}
                value={formData.repaymentPeriod}
                onChange={handleSelectChange}
                placeholder="Desired Repayment Period"
                styles={customSelectStyles}
                isSearchable={!isMobile}
                required
              />
            </div>

            {/* Personal Loan Specific Fields */}
            {selectedLoanType.value === 'personal' && (
              <>
                <div>
                  <Select
                    name="employmentStatus"
                    options={employmentStatusOptions}
                    value={formData.employmentStatus}
                    onChange={handleSelectChange}
                    placeholder="Employment Status"
                    styles={customSelectStyles}
                    isSearchable={!isMobile}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="monthlyIncome"
                    placeholder="Monthly Income (₦)"
                    value={formData.monthlyIncome || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div className="lg:col-span-2">
                  <textarea
                    name="loanPurpose"
                    placeholder="Purpose of Loan"
                    value={formData.loanPurpose || ''}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 resize-none"
                    required
                  />
                </div>
              </>
            )}

            {/* Business Loan & Equity Financing Specific Fields - IDENTICAL */}
            {(selectedLoanType.value === 'business' || selectedLoanType.value === 'equity') && (
              <>
                <div>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="businessRegistration"
                    placeholder="Business Registration Number"
                    value={formData.businessRegistration || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="yearEstablished"
                    placeholder="Year Established"
                    value={formData.yearEstablished || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="monthlyRevenue"
                    placeholder="Average Monthly Revenue (₦)"
                    value={formData.monthlyRevenue || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div className="lg:col-span-2">
                  <textarea
                    name="businessPurpose"
                    placeholder="How will this loan help your business?"
                    value={formData.businessPurpose || ''}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 resize-none"
                    required
                  />
                </div>
              </>
            )}

            {/* Personal Asset Financing Specific Fields */}
            {selectedLoanType.value === 'personal-asset' && (
              <>
                <div>
                  <Select
                    name="assetType"
                    options={assetTypeOptions}
                    value={formData.assetType}
                    onChange={handleSelectChange}
                    placeholder="Type of Asset"
                    styles={customSelectStyles}
                    isSearchable={!isMobile}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="assetValue"
                    placeholder="Estimated Asset Value (₦)"
                    value={formData.assetValue || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div className="lg:col-span-2">
                  <input
                    type="text"
                    name="assetDescription"
                    placeholder="Asset Description (Make, Model, Year, etc.)"
                    value={formData.assetDescription || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <Select
                    name="employmentStatus"
                    options={employmentStatusOptions}
                    value={formData.employmentStatus}
                    onChange={handleSelectChange}
                    placeholder="Employment Status"
                    styles={customSelectStyles}
                    isSearchable={!isMobile}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="monthlyIncome"
                    placeholder="Monthly Income (₦)"
                    value={formData.monthlyIncome || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>
              </>
            )}

            {/* Business Asset Financing Specific Fields */}
            {selectedLoanType.value === 'business-asset' && (
              <>
                <div>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="businessRegistration"
                    placeholder="Business Registration Number"
                    value={formData.businessRegistration || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <Select
                    name="assetType"
                    options={assetTypeOptions}
                    value={formData.assetType}
                    onChange={handleSelectChange}
                    placeholder="Type of Asset"
                    styles={customSelectStyles}
                    isSearchable={!isMobile}
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="assetValue"
                    placeholder="Estimated Asset Value (₦)"
                    value={formData.assetValue || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div className="lg:col-span-2">
                  <input
                    type="text"
                    name="assetDescription"
                    placeholder="Asset Description (Make, Model, Year, etc.)"
                    value={formData.assetDescription || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="monthlyRevenue"
                    placeholder="Average Monthly Revenue (₦)"
                    value={formData.monthlyRevenue || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div className="lg:col-span-2">
                  <textarea
                    name="purposeOfAsset"
                    placeholder="How will this asset benefit your business?"
                    value={formData.purposeOfAsset || ''}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 resize-none"
                    required
                  />
                </div>
              </>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3 mt-4 lg:mt-6">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1"
            />
            <label htmlFor="terms" className="text-xs lg:text-sm text-gray-600">
              I agree to the{' '}
              <a href="/company-policies" className="underline hover:text-[#60a5fa]">
                Terms and Conditions
              </a>
              {' '}and consent to the processing of my personal data
            </label>
          </div>

          {/* Submit Button - UPDATE THIS */}
          <div className="flex justify-center mt-6 lg:mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1a2332] text-white px-12 py-2.5 lg:px-16 lg:py-3 text-sm lg:text-base rounded-full hover:bg-[#2a3f52] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoanApplicationForm