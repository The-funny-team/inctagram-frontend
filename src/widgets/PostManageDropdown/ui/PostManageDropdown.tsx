import {
  CopyLinkOutlineIcon,
  DotsHorizontalIcon,
  FollowOutlineIcon,
  TrashOutlineIcon,
} from '@/shared/assets'
import { EditOutlineIcon } from '@/shared/assets/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography,
} from '@/shared/ui'

import styles from './PostManageDropdown.module.scss'

type Props = {
  isMyPost: boolean
}

export const PostManageDropdown = ({ isMyPost }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={styles.trigger}>
        <DotsHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.content}>
        {isMyPost ? (
          <>
            <DropdownMenuItem className={styles.menuItem}>
              <EditOutlineIcon />
              <Typography as={'span'} variant={'regularText14'}>
                Edit Post
              </Typography>
            </DropdownMenuItem>
            <DropdownMenuItem className={styles.menuItem}>
              <TrashOutlineIcon />
              <Typography as={'span'} variant={'regularText14'}>
                Delete Post
              </Typography>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem className={styles.menuItem}>
              <FollowOutlineIcon />
              <Typography as={'span'} variant={'regularText14'}>
                Follow
              </Typography>
            </DropdownMenuItem>
            <DropdownMenuItem className={styles.menuItem}>
              <CopyLinkOutlineIcon />
              <Typography as={'span'} variant={'regularText14'}>
                Copy Link
              </Typography>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
