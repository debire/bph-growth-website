import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

function ConsultationApplications() {
  // TODO: This data will come from backend API
  const [applications, setApplications] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      businessEmail: 'john@example.com',
      companyName: 'Tech Innovations Ltd',
      industrySector: 'Technology',
      currentBusinessStage: 'Startup (0-2 years)',
      primaryServiceInterest: 'Strategic Planning & Execution',
      targetFundingAmount: '₦1 Million - ₦5 Million',
      businessSummary: 'Looking to scale our SaaS platform across West Africa',
      status: 'pending',
      submittedAt: '2025-01-15T10:30:00'
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      businessEmail: 'jane@business.com',
      companyName: 'Green Agriculture Co',
      industrySector: 'Agriculture',
      currentBusinessStage: 'Early Growth (2-5 years)',
      primaryServiceInterest: 'Funding & Capital Access',
      targetFundingAmount: '₦5 Million - ₦10 Million',
      businessSummary: 'Expanding organic farming operations to 3 new states',
      status: 'pending',
      submittedAt: '2025-01-14T14:20:00'
    }
  ])

  const [selectedApplication, setSelectedApplication] = useState(null)

  const handleApprove = (id) => {
    // TODO: Send approval to backend API
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'approved' } : app
    ))
    setSelectedApplication(null)
    alert('Application approved! Backend will send notification email.')
  }

  const handleDeny = (id) => {
    // TODO: Send denial to backend API
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'denied' } : app
    ))
    setSelectedApplication(null)
    alert('Application denied. Backend will send notification email.')
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'approved': return 'bg-green-100 text-green-800'
      case 'denied': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Consultation Applications</h1>

        {/* Applications List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{app.companyName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{app.industrySector}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{app.primaryServiceInterest}</td>
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
                <h2 className="text-2xl font-bold text-gray-800">Application Details</h2>
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Full Name</p>
                    <p className="text-gray-900">{selectedApplication.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Business Email</p>
                    <p className="text-gray-900">{selectedApplication.businessEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Company Name</p>
                    <p className="text-gray-900">{selectedApplication.companyName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Industry Sector</p>
                    <p className="text-gray-900">{selectedApplication.industrySector}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Business Stage</p>
                    <p className="text-gray-900">{selectedApplication.currentBusinessStage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Service Interest</p>
                    <p className="text-gray-900">{selectedApplication.primaryServiceInterest}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Target Funding</p>
                    <p className="text-gray-900">{selectedApplication.targetFundingAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Submitted</p>
                    <p className="text-gray-900">{new Date(selectedApplication.submittedAt).toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Business Summary</p>
                  <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">{selectedApplication.businessSummary}</p>
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

export default ConsultationApplications