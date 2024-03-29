import React, { ComponentProps, forwardRef } from 'react'
import * as RDP from 'react-datepicker'
import { registerLocale } from 'react-datepicker'

import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Trans } from '@/shared/ui'
import { clsx } from 'clsx'
import { getYear } from 'date-fns'
import { ru } from 'date-fns/locale'
import { range } from 'lodash'
import Link from 'next/link'

import 'react-datepicker/dist/react-datepicker.min.css'

import s from './DatePicker.module.scss'

import { CustomHeader } from './custom/CustomHeader'
import { CustomInput } from './custom/CustomInput'

export type DatePickerProps = {
  className?: string
  disabled?: boolean
  endDate?: Date | null
  error?: string
  label?: string
  placeholder?: string
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date | null
} & ComponentProps<'div'>

registerLocale('ru', ru)

const RDPC = (((RDP.default as any).default as any) ||
  (RDP.default as any) ||
  (RDP as any)) as typeof RDP.default

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      className,
      disabled,
      endDate,
      error,
      label,
      placeholder,
      setEndDate,
      setStartDate,
      startDate,
      ...rest
    },
    ref
  ) => {
    const isRange = endDate !== undefined

    const { router, text } = useTranslation()
    const t = text.calendar

    const classNames = {
      calendar: s.calendar,
      day: () => s.day,
      errorText: s.errorText,
      input: clsx(s.input),
      link: s.link,
      popper: s.popper,
      root: clsx(s.root, className),
    }

    const locale = router.locale
    const years = range(1900, getYear(new Date()) + 1, 1)
    const months = t.months

    const DatePickerHandler = (dates: [Date | null, Date | null] | Date | null) => {
      if (Array.isArray(dates)) {
        const [start, end] = dates

        setStartDate(start)
        setEndDate?.(end)
      } else {
        setStartDate(dates)
      }
    }

    return (
      <div className={classNames.root} {...rest}>
        <RDPC
          calendarClassName={classNames.calendar}
          calendarStartDay={1}
          className={classNames.input}
          customInput={<CustomInput disabled={disabled} error={error} label={label} />}
          dateFormat={'dd/MM/yyyy'}
          dayClassName={classNames.day}
          disabled={disabled}
          endDate={endDate}
          formatWeekDay={formatWeekDay}
          locale={locale}
          onChange={DatePickerHandler}
          placeholderText={placeholder}
          popperClassName={classNames.popper}
          renderCustomHeader={({
            changeMonth,
            changeYear,
            date,
            decreaseMonth,
            increaseMonth,
            monthDate,
            ...rest
          }) => (
            <CustomHeader
              changeMonth={changeMonth}
              changeYear={changeYear}
              date={date}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
              monthDate={monthDate}
              months={months}
              years={years}
              {...rest}
            />
          )}
          selected={startDate}
          selectsRange={isRange}
          showPopperArrow={false}
          showYearPicker={false}
          startDate={startDate}
        />
        {error && (
          <span className={s.errorMessage}>
            <Trans
              tags={{
                1: () => (
                  <Link className={classNames.link} href={ROUTES_URL.PRIVACY_POLICY}>
                    {'Privacy Policy'}
                  </Link>
                ),
              }}
              text={error || ''}
            />
          </span>
        )}
      </div>
    )
  }
)

const regExp = /о|е|у|я|\$/g

const formatWeekDay = (day: string) =>
  capitalizeFirstLetter(day.replace(regExp, '').substring(0, 2))

const capitalizeFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}
