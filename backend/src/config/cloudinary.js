import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Upload file from path (for resources/documents)
export const uploadToCloudinary = async (filePath, folder = 'resources') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `bph-growth/${folder}`,
      resource_type: 'auto',
    })

    console.log('✅ File uploaded to Cloudinary:', result.secure_url)
    return result
  } catch (error) {
    console.error('❌ Cloudinary upload error:', error)
    throw error
  }
}

// Upload image from buffer (for insights/blogs with multer)
export const uploadImageToCloudinary = async (fileBuffer, folder = 'insights') => {
  try {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `bph-growth/${folder}`,
          resource_type: 'image',
          transformation: [
            { width: 1200, height: 630, crop: 'limit' }, // Max dimensions
            { quality: 'auto', fetch_format: 'auto' } // Auto optimize
          ]
        },
        (error, result) => {
          if (error) {
            console.error('❌ Cloudinary upload error:', error)
            reject(error)
          } else {
            console.log('✅ Image uploaded to Cloudinary:', result.secure_url)
            resolve(result)
          }
        }
      )
      
      uploadStream.end(fileBuffer)
    })
  } catch (error) {
    console.error('❌ Cloudinary upload error:', error)
    throw error
  }
}

// Delete file from Cloudinary
export const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId)
    console.log('✅ File deleted from Cloudinary:', publicId)
    return result
  } catch (error) {
    console.error('❌ Cloudinary delete error:', error)
    throw error
  }
}

export default cloudinary