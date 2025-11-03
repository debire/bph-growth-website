import { useState } from 'react'
import Select from 'react-select'

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    loanType: { value: 'personal', label: 'Personal Loan' },
    // Personal Loan fields
    bvn: '',
    homeAddress: '',
    employerName: '',
    employmentType: '',
    dateOfEmployment: '',
    netSalary: '',
    loanAmount: '',
    loanTenor: ''
  })

  const loanTypeOptions = [
    { value: 'personal', label: 'Personal Loan' },
    { value: 'business', label: 'Business Loans' },
    { value: 'personal-asset', label: 'Personal Asset Loan' },
    { value: 'business-asset', label: 'Business Asset Loan' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      loanType: selectedOption
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

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

  // Render form fields based on loan type
  const renderDynamicFields = () => {
    switch (formData.loanType.value) {
      case 'personal':
        return (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Bank Verification Number</label>
              <input
                type="text"
                name="bvn"
                placeholder="Enter your BVN"
                value={formData.bvn}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">House Address</label>
              <input
                type="text"
                name="homeAddress"
                placeholder="Enter your home address"
                value={formData.homeAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Employer (Organisation) Name</label>
              <input
                type="text"
                name="employerName"
                placeholder="Enter your employer name"
                value={formData.employerName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Employment Type</label>
              <input
                type="text"
                name="employmentType"
                placeholder="Enter your employment type"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date Of Employment</label>
              <input
                type="date"
                name="dateOfEmployment"
                placeholder="Enter your date of employment"
                value={formData.dateOfEmployment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Net Salary (in Naira)</label>
              <input
                type="number"
                name="netSalary"
                placeholder="Enter your net salary"
                value={formData.netSalary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Amount (in Naira)</label>
              <input
                type="number"
                name="loanAmount"
                placeholder="Enter your loan amount"
                value={formData.loanAmount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Tenor (in months)</label>
              <input
                type="number"
                name="loanTenor"
                placeholder="Enter your loan tenor"
                value={formData.loanTenor}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>
          </>
        )

      case 'business':
        return (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Business Name</label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter your business name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Registration Number</label>
              <input
                type="text"
                name="businessRegNumber"
                placeholder="Enter your registration number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Address</label>
              <input
                type="text"
                name="businessAddress"
                placeholder="Enter your business address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Industry Sector</label>
              <input
                type="text"
                name="industrySector"
                placeholder="Enter your industry sector"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Years in Business</label>
              <input
                type="number"
                name="yearsInBusiness"
                placeholder="Enter years in business"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Annual Revenue (in Naira)</label>
              <input
                type="number"
                name="annualRevenue"
                placeholder="Enter your annual revenue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Amount (in Naira)</label>
              <input
                type="number"
                name="loanAmount"
                placeholder="Enter your loan amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Purpose</label>
              <input
                type="text"
                name="loanPurpose"
                placeholder="Enter the purpose of the loan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>
          </>
        )

      case 'personal-asset':
        return (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Bank Verification Number</label>
              <input
                type="text"
                name="bvn"
                placeholder="Enter your BVN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">House Address</label>
              <input
                type="text"
                name="homeAddress"
                placeholder="Enter your home address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asset Type</label>
              <input
                type="text"
                name="assetType"
                placeholder="E.g., Vehicle, Electronics, Land"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asset Description</label>
              <textarea
                name="assetDescription"
                placeholder="Describe the asset you want to finance"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asset Value (in Naira)</label>
              <input
                type="number"
                name="assetValue"
                placeholder="Enter the asset value"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Monthly Income (in Naira)</label>
              <input
                type="number"
                name="monthlyIncome"
                placeholder="Enter your monthly income"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Amount (in Naira)</label>
              <input
                type="number"
                name="loanAmount"
                placeholder="Enter your loan amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Tenor (in months)</label>
              <input
                type="number"
                name="loanTenor"
                placeholder="Enter your loan tenor"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>
          </>
        )

      case 'business-asset':
        return (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Business Name</label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter your business name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Registration Number</label>
              <input
                type="text"
                name="businessRegNumber"
                placeholder="Enter your registration number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Address</label>
              <input
                type="text"
                name="businessAddress"
                placeholder="Enter your business address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asset Type</label>
              <input
                type="text"
                name="assetType"
                placeholder="E.g., Machinery, Equipment, Vehicle"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asset Description</label>
              <textarea
                name="assetDescription"
                placeholder="Describe the asset you want to finance"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asset Value (in Naira)</label>
              <input
                type="number"
                name="assetValue"
                placeholder="Enter the asset value"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tax Identification Number</label>
              <input
                type="text"
                name="taxId"
                placeholder="Enter your TIN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Amount (in Naira)</label>
              <input
                type="number"
                name="loanAmount"
                placeholder="Enter your loan amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Tenor (in months)</label>
              <input
                type="number"
                name="loanTenor"
                placeholder="Enter your loan tenor"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <section id="loan-application-form" className="py-16 px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3">Loan Application Form</h2>
          <p className="text-gray-600 text-lg">Get started by filling this form</p>
        </div>

        <form onSubmit={handleSubmit} className="border-2 border-gray-300 rounded-3xl p-8 space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-2">Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          {/* Loan Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Loan Type</label>
            <Select
              value={formData.loanType}
              onChange={handleSelectChange}
              options={loanTypeOptions}
              styles={customSelectStyles}
              isSearchable={false}
            />
          </div>

          {/* Dynamic Fields Based on Loan Type */}
          {renderDynamicFields()}

          {/* Privacy Policy */}
          <p className="text-sm text-gray-600">
            By submitting, you agree to our{' '}
            <a href="/company-policies" className="underline hover:text-[#60a5fa]">
              Privacy Policy
            </a>
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#60a5fa] text-white px-16 py-3 rounded-full hover:bg-[#3b82f6] transition-colors font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoanApplicationForm