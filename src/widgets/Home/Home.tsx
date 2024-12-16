import { HomePost } from './HomePost'
const testPost = {
  avatarOwner:
    'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/4164019e-a863-4222-ab5b-e2657e8a8bb2_users/848/avatar/c309d797-46fe-4711-89a3-0349d083982f-images-192x192',
  avatarWhoLikes: [],
  createdAt: '2024-08-06T13:31:46.287Z',
  description: 'reactPost',
  id: 1289,
  images: [
    {
      createdAt: '2024-08-06T13:31:43.822Z',
      fileSize: 95555,
      height: 1440,
      uploadId: '66b225bfc35c67dec5f3998c',
      url: 'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/c42b795f-0f3a-436c-be10-c74450b8d653_users/848/post/5c00c331-589c-4fa7-aff2-10c1af1f8327-images-1440x1440',
      width: 1440,
    },
    {
      createdAt: '2024-08-06T13:31:43.706Z',
      fileSize: 54374,
      height: 1440,
      uploadId: '66b225bfc35c67dec5f39988',
      url: 'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/ae64e228-b0ea-452d-ade9-3908b3155aaf_users/848/post/d6de9ac1-006b-49b8-917a-e8d2a7aead8e-images-1440x1440',
      width: 1440,
    },
  ],
  isLiked: false,
  likesCount: 0,
  location: 'null',
  owner: {
    firstName: 'Aleksandr',
    lastName: 'Leetvin',
  },
  ownerId: 848,
  updatedAt: '2024-08-06T14:13:59.298Z',
  userName: 'apple23',
}

export const Home = () => {
  return (
    <div style={{ paddingLeft: '175px', paddingTop: '30px' }}>
      <div>
        <HomePost post={testPost} />
      </div>
    </div>
  )
}
