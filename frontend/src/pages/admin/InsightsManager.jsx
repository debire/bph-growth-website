import { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'

function InsightsManager() {
  // TODO: This data will come from backend API
  const [insights, setInsights] = useState([
    {
      id: 1,
      category: "AI CONSULTING",
      title: "The Future is Augmented: Integrating AI into Your 2025 Business Model",
      description: "How BPH Growth's AI strategy consulting can transform operational efficiency and reduce time-to-market.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      isActive: true,
      createdAt: '2025-01-10T10:00:00'
    },
    {
      id: 2,
      category: "BUSINESS CLINIC",
      title: "Cognitive Reprogramming: The Mindset Shift That Attracts Investors",
      description: "Why visualization and affirmations are the secret weapons of resilient, successful founders.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      isActive: true,
      createdAt: '2025-01-09T14:30:00'
    },
    {
      id: 3,
      category: "FUNDING ACCESS",
      title: "Debt vs. Equity: Which Funding Path is Right for Your Growth Stage?",
      description: "An in-depth guide on analyzing your current stage to secure the most favorable capital.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      isActive: true,
      createdAt: '2025-01-08T09:15:00'
    }
  ])

  const [isAddingInsight, setIsAddingInsight] = useState(false)
  const [editingInsight, setEditingInsight] = useState(null)
  const [newInsight, setNewInsight] = useState({
    category: '',
    title: '',
    description: '',
    image: ''
  })

  const categoryOptions = [
    'AI CONSULTING',
    'BUSINESS CLINIC',
    'FUNDING ACCESS',
    'STRATEGIC PLANNING',
    'MARKET INSIGHTS',
    'LEADERSHIP'
  ]

  const handleAddInsight = () => {
    if (newInsight.category && newInsight.title && newInsight.description && newInsight.image) {
      // TODO: Send to backend API
      const insight = {
        id: Date.now(),
        ...newInsight,
        isActive: true,
        createdAt: new Date().toISOString()
      }
      setInsights([insight, ...insights])
      setNewInsight({ category: '', title: '', description: '', image: '' })
      setIsAddingInsight(false)
      alert('Insight added successfully!')
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleUpdateInsight = () => {
    if (editingInsight && editingInsight.category && editingInsight.title && editingInsight.description && editingInsight.image) {
      // TODO: Send to backend API
      setInsights(insights.map(insight => 
        insight.id === editingInsight.id ? editingInsight : insight
      ))
      setEditingInsight(null)
      alert('Insight updated successfully!')
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleDeleteInsight = (id) => {
    if (window.confirm('Are you sure you want to delete this insight?')) {
      // TODO: Send delete request to backend API
      setInsights(insights.filter(insight => insight.id !== id))
      alert('Insight deleted successfully!')
    }
  }

  const toggleInsightStatus = (id) => {
    // TODO: Send status update to backend API
    setInsights(insights.map(insight => 
      insight.id === id ? { ...insight, isActive: !insight.isActive } : insight
    ))
  }

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Insights Manager</h1>
          <button
            onClick={() => setIsAddingInsight(true)}
            className="bg-[#60a5fa] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Insight
          </button>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    insight.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                  }`}>
                    {insight.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs font-semibold text-[#60a5fa] mb-2">{insight.category}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{insight.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{insight.description}</p>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingInsight(insight)}
                    className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => toggleInsightStatus(insight.id)}
                    className="flex-1 bg-yellow-50 text-yellow-600 py-2 rounded-lg font-semibold hover:bg-yellow-100 transition-colors text-sm"
                  >
                    {insight.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => handleDeleteInsight(insight.id)}
                    className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Insight Modal */}
        {isAddingInsight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Add New Insight</h2>
                <button
                  onClick={() => {
                    setIsAddingInsight(false)
                    setNewInsight({ category: '', title: '', description: '', image: '' })
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={newInsight.category}
                    onChange={(e) => setNewInsight({ ...newInsight, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newInsight.title}
                    onChange={(e) => setNewInsight({ ...newInsight, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    placeholder="Enter insight title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newInsight.description}
                    onChange={(e) => setNewInsight({ ...newInsight, description: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    placeholder="Enter insight description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={newInsight.image}
                    onChange={(e) => setNewInsight({ ...newInsight, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    placeholder="https://example.com/image.jpg"
                  />
                  {newInsight.image && (
                    <img 
                      src={newInsight.image} 
                      alt="Preview" 
                      className="mt-3 w-full h-40 object-cover rounded-lg"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => {
                    setIsAddingInsight(false)
                    setNewInsight({ category: '', title: '', description: '', image: '' })
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddInsight}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors"
                >
                  Add Insight
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Insight Modal */}
        {editingInsight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Edit Insight</h2>
                <button
                  onClick={() => setEditingInsight(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select
                    value={editingInsight.category}
                    onChange={(e) => setEditingInsight({ ...editingInsight, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                  >
                    <option value="">Select Category</option>
                    {categoryOptions.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingInsight.title}
                    onChange={(e) => setEditingInsight({ ...editingInsight, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={editingInsight.description}
                    onChange={(e) => setEditingInsight({ ...editingInsight, description: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={editingInsight.image}
                    onChange={(e) => setEditingInsight({ ...editingInsight, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                  />
                  {editingInsight.image && (
                    <img 
                      src={editingInsight.image} 
                      alt="Preview" 
                      className="mt-3 w-full h-40 object-cover rounded-lg"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => setEditingInsight(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateInsight}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors"
                >
                  Update Insight
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default InsightsManager