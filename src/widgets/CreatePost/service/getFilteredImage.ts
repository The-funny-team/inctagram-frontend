import type { AppDispatch } from '@/application/store'

import { toast } from 'react-toastify'

import { isFetchBaseQueryError } from '@/shared/lib/helpers'
import { createImageElement } from '@/widgets/CreatePost/service/createImageElement'
import { CroppedPicture, setPicturesIds } from '@/widgets/CreatePost/service/createPost.slice'

export const getFilteredImage = async (
  croppedPictureObj: CroppedPicture,
  dispatch: AppDispatch,
  uploadToServer: (file: FormData) => Promise<any>
): Promise<string> => {
  const imageObj = await createImageElement(croppedPictureObj.img)
  const canvasObj = document.createElement('canvas')
  const ctx = canvasObj.getContext('2d')

  if (!ctx) {
    return ''
  }

  canvasObj.width = croppedPictureObj.croppedArea.width
  canvasObj.height = croppedPictureObj.croppedArea.height

  ctx.filter = croppedPictureObj.filter
  ctx.drawImage(imageObj, 0, 0)

  const dataUrl = canvasObj.toDataURL('image/jpeg')

  canvasObj.toBlob(async blob => {
    if (blob) {
      const timestamp = Date.now()
      const fileName = `photo_${timestamp}.png`
      const file = new File([blob], fileName, { type: 'image/png' })
      const formData = new FormData()

      formData.append('image', file)

      try {
        const response = await uploadToServer(formData)
        const imageId = response?.data?.fileId

        if (imageId) {
          dispatch(setPicturesIds(imageId))
        }
      } catch (error: unknown) {
        if (isFetchBaseQueryError(error)) {
          if (!Array.isArray(error.data.message)) {
            toast.error(error.data.message)
          }
        }
      }
    }
  }, 'image/jpeg')

  imageObj.remove()
  canvasObj.remove()

  return dataUrl
}
