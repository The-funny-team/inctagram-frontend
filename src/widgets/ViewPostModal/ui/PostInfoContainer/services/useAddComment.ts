import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@locales/en'
import {
  AddCommentType,
  addCommentSchema,
} from 'src/widgets/ViewPostModal/ui/PostInfoContainer/services/addCommentSchema'

export const useAddComment = (t: LocaleType['validation']) =>
  useForm<AddCommentType>({
    defaultValues: {
      text: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(addCommentSchema(t)),
  })
