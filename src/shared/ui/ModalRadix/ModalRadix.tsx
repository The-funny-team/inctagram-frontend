import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Cross2Icon } from '@/shared/assets/icons'
import { Typography } from '@/shared/ui'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import styles from './ModalRadix.module.scss'

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
          <DialogPrimitive.Overlay className={styles.dialogPrimitiveOverlay} />
          <DialogPrimitive.Content className={styles.dialogPrimitiveContent} ref={ref}>
            <div className={className}>
              {title && (
                <div className={styles.title}>
                  <Typography as={'h1'} variant={'h1'}>
                    {title}
                  </Typography>
                  <DialogPrimitive.Close className={styles.dialogPrimitiveClose}>
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
