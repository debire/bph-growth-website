import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import api from '../../config/api'
import { getAdminAuth, getAdminRedirectPath } from '../../utils/adminAuth'

function InsightsManager() {
  const navigate = useNavigate()
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAddingInsight, setIsAddingInsight] = useState(false)
  const [editingInsight, setEditingInsight] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  
  const [newInsight, setNewInsight] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    imageFile: null,
    imageUrl: ''
  })

  const categories = [
    'Business Strategy',
    'Financial Planning',
    'AI & Technology',
    'Market Insights',
    'Growth Tips',
    'Case Studies',
    'Industry News',
    'Other'
  ]

  // Check authentication - UPDATED
  useEffect(() => {
    const { isAuth, token } = getAdminAuth()
    
    if (!isAuth || !token) {
      navigate(getAdminRedirectPath())
      return
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    fetchInsights()
  }, [navigate])

  const fetchInsights = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get('/insights/admin')
      
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

  const handleImageUpload = async (file) => {
    if (!file) return null

    setUploadingImage(true)

    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await api.post('/insights/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        return response.data.data.imageUrl
      }
    } catch (err) {
      console.error('Error uploading image:', err)
      alert(err.response?.data?.message || 'Failed to upload image')
      return null
    } finally {
      setUploadingImage(false)
    }
  }

  const handleAddInsight = async () => {
    if (!newInsight.title || !newInsight.excerpt || !newInsight.content || !newInsight.category || !newInsight.author) {
      alert('Please fill in all required fields')
      return
    }

    setSubmitting(true)

    try {
      let imageUrl = newInsight.imageUrl

      if (newInsight.imageFile) {
        imageUrl = await handleImageUpload(newInsight.imageFile)
        if (!imageUrl) {
          setSubmitting(false)
          return
        }
      }

      const response = await api.post('/insights', {
        title: newInsight.title,
        excerpt: newInsight.excerpt,
        content: newInsight.content,
        category: newInsight.category,
        author: newInsight.author,
        imageUrl
      })

      if (response.data.success) {
        setInsights([response.data.data, ...insights])
        setNewInsight({
          title: '',
          excerpt: '',
          content: '',
          category: '',
          author: '',
          imageFile: null,
          imageUrl: ''
        })
        setIsAddingInsight(false)
        alert('Insight added successfully!')
      }
    } catch (err) {
      console.error('Error adding insight:', err)
      alert(err.response?.data?.message || 'Failed to add insight')
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpdateInsight = async () => {
    if (!editingInsight.title || !editingInsight.excerpt || !editingInsight.content || !editingInsight.category || !editingInsight.author) {
      alert('Please fill in all required fields')
      return
    }

    setSubmitting(true)

    try {
      let imageUrl = editingInsight.imageUrl

      if (editingInsight.newImageFile) {
        imageUrl = await handleImageUpload(editingInsight.newImageFile)
        if (!imageUrl) {
          setSubmitting(false)
          return
        }
      }

      const response = await api.put(`/insights/${editingInsight.id}`, {
        title: editingInsight.title,
        excerpt: editingInsight.excerpt,
        content: editingInsight.content,
        category: editingInsight.category,
        author: editingInsight.author,
        imageUrl,
        isActive: editingInsight.isActive
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
    if (!window.confirm('Are you sure you want to delete this insight?')) {
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
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Insights Manager</h1>
            <p className="text-gray-600 mt-1">Create and manage blog posts and insights</p>
          </div>
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

        {loading && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading insights...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchInsights}
              className="mt-2 text-red-700 underline hover:text-red-800"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && insights.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">No insights yet.</p>
            <p className="text-gray-500 text-sm mt-2">Create your first insight to get started.</p>
          </div>
        )}
        {!loading && !error && insights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                {insight.imageUrl && (
                  <img
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {insight.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      insight.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {insight.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {insight.excerpt}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">By {insight.author}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingInsight({ ...insight, newImageFile: null })}
                      className="flex-1 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleInsightStatus(insight.id)}
                      className="flex-1 py-2 text-sm text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                    >
                      {insight.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleDeleteInsight(insight.id)}
                      className="flex-1 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
                    setNewInsight({
                      title: '',
                      excerpt: '',
                      content: '',
                      category: '',
                      author: '',
                      imageFile: null,
                      imageUrl: ''
                    })
                  }}
                  className="text-gray-400 hover:text-gray-600"
                  disabled={submitting}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select
                    value={newInsight.category}
                    onChange={(e) => setNewInsight({ ...newInsight, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author *</label>
                  <input
                    type="text"
                    value={newInsight.author}
                    onChange={(e) => setNewInsight({ ...newInsight, author: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    placeholder="Enter author name"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt *</label>
                  <textarea
                    value={newInsight.excerpt}
                    onChange={(e) => setNewInsight({ ...newInsight, excerpt: e.target.value })}
                    rows="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa] resize-none"
                    placeholder="Brief summary (shown in cards)"
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
                    placeholder="Full article content"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured Image (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file) {
                        setNewInsight({ ...newInsight, imageFile: file })
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting || uploadingImage}
                  />
                  {newInsight.imageFile && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {newInsight.imageFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex gap-4">
                <button
                  onClick={() => {
                    setIsAddingInsight(false)
                    setNewInsight({
                      title: '',
                      excerpt: '',
                      content: '',
                      category: '',
                      author: '',
                      imageFile: null,
                      imageUrl: ''
                    })
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddInsight}
                  disabled={submitting || uploadingImage}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingImage ? 'Uploading Image...' : submitting ? 'Adding...' : 'Add Insight'}
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

              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select
                    value={editingInsight.category}
                    onChange={(e) => setEditingInsight({ ...editingInsight, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author *</label>
                  <input
                    type="text"
                    value={editingInsight.author}
                    onChange={(e) => setEditingInsight({ ...editingInsight, author: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt *</label>
                  <textarea
                    value={editingInsight.excerpt}
                    onChange={(e) => setEditingInsight({ ...editingInsight, excerpt: e.target.value })}
                    rows="2"
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
                  {editingInsight.imageUrl && (
                    <img
                      src={editingInsight.imageUrl}
                      alt="Current"
                      className="w-32 h-32 object-cover rounded-lg mb-2"
                    />
                  )}
                  
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Replace Image (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file) {
                        setEditingInsight({ ...editingInsight, newImageFile: file })
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#60a5fa]"
                    disabled={submitting || uploadingImage}
                  />
                  {editingInsight.newImageFile && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ New image: {editingInsight.newImageFile.name}
                    </p>
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
                  disabled={submitting || uploadingImage}
                  className="flex-1 bg-[#60a5fa] text-white py-3 rounded-lg font-semibold hover:bg-[#3b82f6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingImage ? 'Uploading Image...' : submitting ? 'Updating...' : 'Update Insight'}
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