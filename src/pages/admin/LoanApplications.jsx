import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

function LoanApplications() {
  // TODO: This data will come from backend API
  const [applications, setApplications] = useState([
    {
      id: 1,
      fullName: 'Michael Johnson',
      email: 'michael@email.com',
      phoneNumber: '+234 801 234 5678',
      loanType: 'Personal Loan',
      loanAmount: '₦500,000 - ₦1,000,000',
      repaymentPeriod: '4-6 months',
      employmentStatus: 'Employed (Salaried)',
      monthlyIncome: '₦350,000',
      loanPurpose: 'Home renovation and furniture',
      status: 'pending',
      submittedAt: '2025-01-15T09:15:00'
    },
    {
      id: 2,
      fullName: 'Sarah Williams',
      email: 'sarah@business.com',
      phoneNumber: '+234 802 345 6789',
      loanType: 'Business Loan',
      loanAmount: '₦2,000,000 - ₦5,000,000',
      repaymentPeriod: '7-9 months',
      businessName: 'Williams Fashion House',
      businessRegistration: 'RC123456',
      yearEstablished: '2020',
      monthlyRevenue: '₦1,200,000',
      businessPurpose: 'Expand retail operations to 2 new locations and increase inventory',
      status: 'pending',
      submittedAt: '2025-01-14T16:45:00'
    },
    {
      id: 3,
      fullName: 'David Okafor',
      email: 'david@email.com',
      phoneNumber: '+234 803 456 7890',
      loanType: 'Personal Asset Financing',
      loanAmount: '₦1,000,000 - ₦2,000,000',
      repaymentPeriod: '10-12 months',
      assetType: 'Vehicle',
      assetValue: '₦1,500,000',
      assetDescription: 'Toyota Camry 2020 model for personal use',
      employmentStatus: 'Self-Employed',
      monthlyIncome: '₦280,000',
      status: 'pending',
      submittedAt: '2025-01-13T11:30:00'
    }
  ])

  const [selectedApplication, setSelectedApplication] = useState(null)

  const handleApprove = (id) => {
    // TODO: Send approval to backend API
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'approved' } : app
    ))
    setSelectedApplication(null)
    alert('Loan application approved! Backend will send notification email.')
  }

  const handleDeny = (id) => {
    // TODO: Send denial to backend API
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'denied' } : app
    ))
    setSelectedApplication(null)
    alert('Loan application denied. Backend will send notification email.')
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'approved': return 'bg-green-100 text-green-800'
      case 'denied': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderLoanDetails = (app) => {
    // Different fields based on loan type
    if (app.loanType === 'Personal Loan') {
      return (
        <>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Employment Status</p>
            <p className="text-gray-900">{app.employmentStatus}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Monthly Income</p>
            <p className="text-gray-900">{app.monthlyIncome}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-semibold text-gray-600 mb-1">Loan Purpose</p>
            <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{app.loanPurpose}</p>
          </div>
        </>
      )
    } else if (app.loanType === 'Business Loan') {
      return (
        <>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Business Name</p>
            <p className="text-gray-900">{app.businessName}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Registration Number</p>
            <p className="text-gray-900">{app.businessRegistration}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Year Established</p>
            <p className="text-gray-900">{app.yearEstablished}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Monthly Revenue</p>
            <p className="text-gray-900">{app.monthlyRevenue}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-semibold text-gray-600 mb-1">Business Purpose</p>
            <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{app.businessPurpose}</p>
          </div>
        </>
      )
    } else if (app.loanType === 'Personal Asset Financing') {
      return (
        <>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Asset Type</p>
            <p className="text-gray-900">{app.assetType}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Asset Value</p>
            <p className="text-gray-900">{app.assetValue}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-semibold text-gray-600 mb-1">Asset Description</p>
            <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{app.assetDescription}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Employment Status</p>
            <p className="text-gray-900">{app.employmentStatus}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-1">Monthly Income</p>
            <p className="text-gray-900">{app.monthlyIncome}</p>
          </div>
        </>
      )
    }
    return null
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Loan Applications</h1>

        {/* Applications List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Loan Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{app.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{app.loanType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{app.loanAmount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(app.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedApplication(app)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Details Modal */}
        {selectedApplication && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Loan Application Details</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Common Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Full Name</p>
                    <p className="text-gray-900">{selectedApplication.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                    <p className="text-gray-900">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Phone Number</p>
                    <p className="text-gray-900">{selectedApplication.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Loan Type</p>
                    <p className="text-gray-900">{selectedApplication.loanType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Loan Amount</p>
                    <p className="text-gray-900">{selectedApplication.loanAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Repayment Period</p>
                    <p className="text-gray-900">{selectedApplication.repaymentPeriod}</p>
                  </div>
                  
                  {/* Loan Type Specific Fields */}
                  {renderLoanDetails(selectedApplication)}
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Submitted</p>
                    <p className="text-gray-900">{new Date(selectedApplication.submittedAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {selectedApplication.status === 'pending' && (
                <div className="p-6 border-t border-gray-200 flex gap-4">
                  <button
                    onClick={() => handleApprove(selectedApplication.id)}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(selectedApplication.id)}
                    className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Deny
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default LoanApplications