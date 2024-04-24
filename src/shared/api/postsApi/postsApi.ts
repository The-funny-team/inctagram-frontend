export type PostResponseType = {
  authorId: string
  createdAt: string
  description: string
  id: string
  imagesUrl: string
  updatedAt: string
}
export type PostsResponse = PostResponseType[]

export type FileUploadResponse = { fileId: string }

export type CreatePostDto = {
  description: string
  images: string[]
}

export type UpdatePostDto = { description: string }

export type UpdatePostArgs = { id: string } & UpdatePostDto

export type GetPostsArgs = {
  skip?: number
  sortDirection?: 'asc' | 'desc'
  sortField?: 'createdAt' | 'updatedAt'
  take?: number
}
