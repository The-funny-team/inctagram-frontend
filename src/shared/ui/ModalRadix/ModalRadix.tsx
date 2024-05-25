import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Cross2Icon } from '@/shared/assets/icons'
import { Typography } from '@/shared/ui'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { Inter } from 'next/font/google'

import s from './ModalRadix.module.scss'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  className?: string
  title?: string
  trigger?: ReactNode
  triggerClassName?: string
} & ComponentPropsWithoutRef<typeof DialogPrimitive.Root>

export const ModalRadix = forwardRef<ElementRef<typeof DialogPrimitive.Content>, Props>(
  (props, ref) => {
    const { children, className, title, trigger, triggerClassName, ...rest } = props

    return (
      <DialogPrimitive.Root {...rest}>
        <DialogPrimitive.Trigger asChild className={triggerClassName}>
          {trigger}
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className={s.dialogPrimitiveOverlay} />
          <DialogPrimitive.Content
            className={clsx(s.dialogPrimitiveContent, inter.className)}
            ref={ref}
          >
            <div className={className}>
              {title && (
                <div className={s.title}>
                  <Typography as={'h1'} variant={'h1'}>
                    {title}
                  </Typography>
                  <DialogPrimitive.Close className={s.dialogPrimitiveClose}>
                    <Cross2Icon />
                  </DialogPrimitive.Close>
                </div>
              )}
              {children}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    )
  }
)
