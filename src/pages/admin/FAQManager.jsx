import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

function FAQManager() {
  // TODO: This data will come from backend API
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What services does BPH Growth offer?",
      answer: "We provide comprehensive business consulting including strategic planning, AI integration, funding access, leadership development, and operational optimization tailored to your growth stage.",
      isActive: true
    },
    {
      id: 2,
      question: "How long does the consulting process take?",
      answer: "Our engagement timelines vary based on your needs. Initial assessments take 1-2 weeks, while full strategic implementations typically span 3-6 months with ongoing support available.",
      isActive: true
    },
    {
      id: 3,
      question: "Do you work with startups or established businesses?",
      answer: "We work with businesses at all stages - from early-stage startups seeking validation to established companies looking to scale or pivot their operations.",
      isActive: true
    }
  ])

  const [isAddingFAQ, setIsAddingFAQ] = useState(false)
  const [editingFAQ, setEditingFAQ] = useState(null)
  const [newFAQ, setNewFAQ] = useState({ question: '', answer: '' })

  const handleAddFAQ = () => {
    if (newFAQ.question && newFAQ.answer) {
      // TODO: Send to backend API
      const faq = {
        id: Date.now(),
        question: newFAQ.question,
        answer: newFAQ.answer,
        isActive: true
      }
      setFaqs([...faqs, faq])
      setNewFAQ({ question: '', answer: '' })
      setIsAddingFAQ(false)
      alert('FAQ added successfully!')
    }
  }

  const handleUpdateFAQ = () => {
    if (editingFAQ && editingFAQ.question && editingFAQ.answer) {
      // TODO: Send to backend API
      setFaqs(faqs.map(faq => 
        faq.id === editingFAQ.id ? editingFAQ : faq
      ))
      setEditingFAQ(null)
      alert('FAQ updated successfully!')
    }
  }

  const handleDeleteFAQ = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      // TODO: Send delete request to backend API
      setFaqs(faqs.filter(faq => faq.id !== id))
      alert('FAQ deleted successfully!')
    }
  }

  const toggleFAQStatus = (id) => {
    // TODO: Send status update to backend API
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isActive: !faq.isActive } : faq
    ))
  }

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">FAQ Manager</h1>
          <button
            onClick={() => setIsAddingFAQ(true)}
            className="bg-[#60a5fa] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New FAQ
          </button>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      faq.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {faq.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setEditingFAQ(faq)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => toggleFAQStatus(faq.id)}
                    className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                    title={faq.isActive ? 'Deactivate' : 'Activate'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteFAQ(faq.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add FAQ Modal */}
        {isAddingFAQ && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Add New FAQ</h2>
                <button
                  onClick={() => {
                    setIsAddingFAQ(false)
                    setNewFAQ({ question: '', answer: '' })
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Question</label>
                  <input
                    type="text"
                    value={newFAQ.question}
                    onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    placeholder="Enter FAQ question"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Answer</label>
                  <textarea
                    value={newFAQ.answer}
                    onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    placeholder="Enter FAQ answer"
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => {
                    setIsAddingFAQ(false)
                    setNewFAQ({ question: '', answer: '' })
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddFAQ}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors"
                >
                  Add FAQ
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit FAQ Modal */}
        {editingFAQ && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Edit FAQ</h2>
                <button
                  onClick={() => setEditingFAQ(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Question</label>
                  <input
                    type="text"
                    value={editingFAQ.question}
                    onChange={(e) => setEditingFAQ({ ...editingFAQ, question: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Answer</label>
                  <textarea
                    value={editingFAQ.answer}
                    onChange={(e) => setEditingFAQ({ ...editingFAQ, answer: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                  />
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => setEditingFAQ(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateFAQ}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors"
                >
                  Update FAQ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default FAQManager