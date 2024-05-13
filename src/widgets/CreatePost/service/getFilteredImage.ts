import { AppDispatch } from '@/application/store'
import { FileUploadResponse } from '@/shared/api/postsApi'
import { createImageElement } from '@/widgets/CreatePost/service/createImageElement'
import { CroppedPicture, setPicturesIds } from "@/widgets/CreatePost/service/createPost.slice";

export const getFilteredImage = async (
  croppedPictureObj: CroppedPicture,
  dispatch: AppDispatch,
  uploadToServer: any // Todo: add type
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
        console.error('Ошибка загрузки на сервер:', error)
      }
    }
  }, 'image/jpeg')

  imageObj.remove()
  canvasObj.remove()

  return dataUrl
}
