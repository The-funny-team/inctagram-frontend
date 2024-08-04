import { ElementRef, forwardRef } from 'react'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type PropsType = {
  defaultValue: string
  disabled?: boolean
  items: Array<{ label: string; value: string }>
  onValueChange?: (value: string) => void
  value?: string
}
export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Item>, PropsType>(
  ({ defaultValue, disabled, items, onValueChange, value }, ref) => {
    return (
      <RadixRadioGroup.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {items.map(item => (
            <div key={item.value} style={{ alignItems: 'center', display: 'flex', gap: '12px' }}>
              <div style={{ height: '24px', padding: '2px', width: '24px' }}>
                <RadixRadioGroup.Item
                  className={s.radioGroupItem}
                  id={item.value}
                  ref={ref}
                  value={item.value}
                >
                  <RadixRadioGroup.Indicator className={s.radioGroupIndicator} />
                </RadixRadioGroup.Item>
              </div>
              <label className={s.label} htmlFor={item.value}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </RadixRadioGroup.Root>
    )
  }
)
