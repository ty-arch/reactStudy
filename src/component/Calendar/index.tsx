import React, { useState, type JSX } from 'react'
import './index.css'

interface CalendarProps {
  defaultValue?: Date,
  onChange?: (date: Date) => void
}

const dayNames = ['日', '一', '二', '三', '四', '五', '六']

const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}

const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay()
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const {
    defaultValue = new Date(),
    onChange
  } = props
  const [current, setCurrent] = useState(defaultValue)
  const [currentMonth, setCurrentMounth] = useState(current.getMonth() + 1)
  const [currentYear, setCurrentYear] = useState(current.getFullYear())
  const handlePrevMounth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1)
      setCurrentMounth(12)
    } else {
      setCurrentMounth(currentMonth - 1)
    }
  }

  const handleNextMounth = () => {
    if (currentMonth === 12) {
      setCurrentMounth(1)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMounth(currentMonth + 1)
    }
  }

  const changeSelectedDate = (i: number) => {
    const curDate = new Date(currentYear, currentMonth - 1, i + 1)
    console.log(curDate)
    setCurrent(curDate)
    onChange?.(curDate)
  }

  const renderDate = () => {
    const days: JSX.Element[] = []

    const daysCount = daysOfMonth(currentYear, currentMonth)
    const firstDay = firstDayOfMonth(currentYear, currentMonth)

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>)
    }

    for (let i = 0; i < daysCount; i++) {
      const isSelected = i + 1 === current.getDate() && currentMonth === current.getMonth() + 1 && currentYear === current.getFullYear()
      days.push(
        <div
          key={`${currentYear}${currentMonth}${i}`}
          className={`day ${isSelected && 'selected'}`}
          onClick={() => changeSelectedDate(i)}
        >
          {i + 1}
        </div>
      )
    }
    return (
      <div className='days'>
        {dayNames.map((item) => (
          <div key={item} className='day'>{item}</div>
        ))}
        {days}
      </div>
    )

  }
  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMounth}>&lt;</button>
        <div>{currentYear} 年 {currentMonth} 月</div>
        <button onClick={handleNextMounth}>&gt;</button>
      </div>
      {renderDate()}
    </div>
  )
}

export default Calendar