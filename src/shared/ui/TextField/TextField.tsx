import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './TextField.module.scss'

type Props = {
  error?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'textarea'>
export const TextField = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { className, error, label, onChange, onValueChange, value, ...rest } = props

  const classNames = {
    errorMessage: clsx(s.errorMessage),
    label: clsx(s.label, rest.disabled && s.disabledLabel),
    textarea: clsx(s.textarea, error && s.error),
    wrapper: clsx(s.wrapper, className),
  }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange?.(e.target.value)

    onChange?.(e)
  }

  return (
    <div className={classNames.wrapper}>
      {label && (
        <label className={classNames.label} htmlFor={label}>
          {label}
        </label>
      )}
      <textarea
        className={classNames.textarea}
        id={label}
        onChange={onChangeHandler}
        ref={ref}
        value={value}
        {...rest}
      ></textarea>
      {error && <span className={classNames.errorMessage}>{error}</span>}
    </div>
  )
})
