import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PaginationList: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
