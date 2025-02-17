import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NavbarList: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
