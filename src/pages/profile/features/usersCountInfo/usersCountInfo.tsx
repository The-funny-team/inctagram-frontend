import React from 'react'

import { Typography } from '@/shared/ui'
type Props = {
  count: number
  name: string
}

export const UsersCountInfo = ({ count, name }: Props) => {
  const number = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div>
      <Typography variant={'boldText14'}>{number}</Typography>
      <Typography variant={'regularText14'}>{name}</Typography>
    </div>
  )
}
