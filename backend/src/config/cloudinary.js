import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

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