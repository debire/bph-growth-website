import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import api from '../../config/api'

function InsightsManager() {
  const navigate = useNavigate()
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAddingInsight, setIsAddingInsight] = useState(false)
  const [editingInsight, setEditingInsight] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  
  const [newInsight, setNewInsight] = useState({
    category: '',
    title: '',
    description: '',
    content: '',
    image: null
  })

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem('consultationAdminAuth') || localStorage.getItem('adminAuthenticated')
    const token = localStorage.getItem('consultationAdminToken')
    
    if (!isAuth) {
      navigate('/admin/consultation-login')
      return
    }

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    
    fetchInsights()
  }, [navigate])

  const fetchInsights = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get('/insights')
      
      if (response.data.success) {
        setInsights(response.data.data)
      }
    } catch (err) {
      console.error('Error fetching insights:', err)
      setError(err.response?.data?.message || 'Failed to load insights')
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }
      setNewInsight({ ...newInsight, image: file })
    }
  }

  const handleAddInsight = async () => {
    if (!newInsight.category || !newInsight.title || !newInsight.description || !newInsight.content || !newInsight.image) {
      alert('Please fill all fields and select an image')
      return
    }

    setSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('category', newInsight.category)
      formData.append('title', newInsight.title)
      formData.append('description', newInsight.description)
      formData.append('content', newInsight.content)
      formData.append('image', newInsight.image)

      const response = await api.post('/insights', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        setInsights([response.data.data, ...insights])
        setNewInsight({ category: '', title: '', description: '', content: '', image: null })
        setIsAddingInsight(false)
        alert('Insight created successfully!')
      }
    } catch (err) {
      console.error('Error creating insight:', err)
      alert(err.response?.data?.message || 'Failed to create insight')
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpdateInsight = async () => {
    if (!editingInsight.category || !editingInsight.title || !editingInsight.description || !editingInsight.content) {
      alert('Please fill all required fields')
      return
    }

    setSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('category', editingInsight.category)
      formData.append('title', editingInsight.title)
      formData.append('description', editingInsight.description)
      formData.append('content', editingInsight.content)
      formData.append('isActive', editingInsight.isActive)
      
      if (editingInsight.newImage) {
        formData.append('image', editingInsight.newImage)
      }

      const response = await api.put(`/insights/${editingInsight.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        setInsights(insights.map(insight => 
          insight.id === editingInsight.id ? response.data.data : insight
        ))
        setEditingInsight(null)
        alert('Insight updated successfully!')
      }
    } catch (err) {
      console.error('Error updating insight:', err)
      alert(err.response?.data?.message || 'Failed to update insight')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteInsight = async (id) => {
    if (!window.confirm('Are you sure you want to delete this insight? This will also delete the associated image from Cloudinary.')) {
      return
    }

    try {
      const response = await api.delete(`/insights/${id}`)

      if (response.data.success) {
        setInsights(insights.filter(insight => insight.id !== id))
        alert('Insight deleted successfully!')
      }
    } catch (err) {
      console.error('Error deleting insight:', err)
      alert(err.response?.data?.message || 'Failed to delete insight')
    }
  }

  const toggleInsightStatus = async (id) => {
    try {
      const response = await api.patch(`/insights/${id}/toggle`)

      if (response.data.success) {
        setInsights(insights.map(insight => 
          insight.id === id ? response.data.data : insight
        ))
        alert(response.data.message)
      }
    } catch (err) {
      console.error('Error toggling insight status:', err)
      alert(err.response?.data?.message || 'Failed to toggle insight status')
    }
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

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading insights...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && insights.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">No insights yet.</p>
            <p className="text-gray-500 text-sm mt-2">Create your first insight to get started.</p>
          </div>
        )}

        {/* Insights List */}
        {!loading && !error && insights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase">{insight.category}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      insight.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {insight.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{insight.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{insight.description}</p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingInsight({ ...insight, newImage: null })}
                      className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleInsightStatus(insight.id)}
                      className="flex-1 bg-yellow-50 text-yellow-600 py-2 rounded-lg hover:bg-yellow-100 transition-colors text-sm font-semibold"
                    >
                      {insight.isActive ? 'Hide' : 'Show'}
                    </button>
                    <button
                      onClick={() => handleDeleteInsight(insight.id)}
                      className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Insight Modal */}
        {isAddingInsight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full my-8">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Add New Insight</h2>
                <button
                  onClick={() => {
                    setIsAddingInsight(false)
                    setNewInsight({ category: '', title: '', description: '', content: '', image: null })
                  }}
                  className="text-gray-400 hover:text-gray-600"
                  disabled={submitting}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <input
                    type="text"
                    value={newInsight.category}
                    onChange={(e) => setNewInsight({ ...newInsight, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    placeholder="e.g., Business Strategy, Technology, Leadership"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newInsight.title}
                    onChange={(e) => setNewInsight({ ...newInsight, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    placeholder="Enter insight title"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={newInsight.description}
                    onChange={(e) => setNewInsight({ ...newInsight, description: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    placeholder="Brief description of the insight"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content *</label>
                  <textarea
                    value={newInsight.content}
                    onChange={(e) => setNewInsight({ ...newInsight, content: e.target.value })}
                    rows="8"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    placeholder="Full content of the insight"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Featured Image * (Max 5MB)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  />
                  {newInsight.image && (
                    <p className="text-sm text-green-600 mt-2">✓ {newInsight.image.name}</p>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => {
                    setIsAddingInsight(false)
                    setNewInsight({ category: '', title: '', description: '', content: '', image: null })
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddInsight}
                  disabled={submitting}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Creating...' : 'Create Insight'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Insight Modal */}
        {editingInsight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full my-8">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Edit Insight</h2>
                <button
                  onClick={() => setEditingInsight(null)}
                  className="text-gray-400 hover:text-gray-600"
                  disabled={submitting}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <input
                    type="text"
                    value={editingInsight.category}
                    onChange={(e) => setEditingInsight({ ...editingInsight, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={editingInsight.title}
                    onChange={(e) => setEditingInsight({ ...editingInsight, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={editingInsight.description}
                    onChange={(e) => setEditingInsight({ ...editingInsight, description: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Content *</label>
                  <textarea
                    value={editingInsight.content}
                    onChange={(e) => setEditingInsight({ ...editingInsight, content: e.target.value })}
                    rows="8"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Image</label>
                  <img src={editingInsight.image} alt="Current" className="w-32 h-32 object-cover rounded-lg mb-2" />
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Replace Image (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file) {
                        setEditingInsight({ ...editingInsight, newImage: file })
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  />
                  {editingInsight.newImage && (
                    <p className="text-sm text-green-600 mt-2">✓ New image: {editingInsight.newImage.name}</p>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => setEditingInsight(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateInsight}
                  disabled={submitting}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Updating...' : 'Update Insight'}
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