import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const ProfilePagesList: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
