'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import experienceData from '@/data/experienceData'
import type { Experience } from '@/data/experienceData'
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

// Month order for sorting
const monthOrder = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// Helper to get month name from date string
const getMonthName = (dateStr: string) => {
  if (dateStr === 'Present') return 'Present'
  const [year, month] = dateStr.split('-')
  return monthOrder[parseInt(month) - 1]
}

// Helper to format date range
const formatDateRange = (startDate: string, endDate: string) => {
  const startMonth = getMonthName(startDate)
  const startYear = startDate.split('-')[0]
  const endMonth = endDate === 'Present' ? 'Present' : getMonthName(endDate)
  const endYear = endDate === 'Present' ? '' : endDate.split('-')[0]

  return `${startMonth} ${startYear} - ${endMonth}${endYear ? ' ' + endYear : ''}`
}

export default function Experience() {
  // Get unique years
  const years = useMemo(() => {
    const yearSet = new Set<number>()
    const currentYear = new Date().getFullYear()

    experienceData.forEach((exp) => {
      const startYear = parseInt(exp.startDate.split('-')[0])
      const endYear = exp.endDate === 'Present' ? currentYear : parseInt(exp.endDate.split('-')[0])

      for (let year = startYear; year <= endYear; year++) {
        yearSet.add(year)
      }
    })

    return Array.from(yearSet).sort((a, b) => b - a)
  }, [])

  const [selectedYear, setSelectedYear] = useState(years[0] || new Date().getFullYear())

  // Get data for selected year with month information
  const getYearData = (year: number) => {
    type YearItem = Experience & {
      month: string
      range: string
      isStart?: boolean
      isEnd?: boolean
      isOngoing?: boolean
    }
    const yearData: YearItem[] = []
    const currentYear = new Date().getFullYear()

    experienceData.forEach((item) => {
      const startYear = parseInt(item.startDate.split('-')[0])
      const endYear =
        item.endDate === 'Present' ? currentYear : parseInt(item.endDate.split('-')[0])
      const isOngoing = item.endDate === 'Present'

      if (year >= startYear && year <= endYear) {
        let month = ''
        let isStart = false
        let isEnd = false
        let isOngoingFlag = false

        // Determine month for this year
        if (year === startYear) {
          month = getMonthName(item.startDate)
          isStart = true
        } else if (year === endYear && !isOngoing) {
          month = getMonthName(item.endDate)
          isEnd = true
        } else {
          month = isOngoing ? 'Present' : 'Ongoing'
          isOngoingFlag = true
        }

        const range = formatDateRange(item.startDate, item.endDate)

        yearData.push({
          ...item,
          month,
          range,
          isStart,
          isEnd,
          isOngoing: isOngoingFlag,
        })
      }
    })

    return yearData.sort((a, b) => {
      if (a.month === 'Present') return -1
      if (b.month === 'Present') return 1
      if (a.month === 'Ongoing') return 1
      if (b.month === 'Ongoing') return -1
      const aIndex = monthOrder.indexOf(a.month)
      const bIndex = monthOrder.indexOf(b.month)
      return aIndex - bIndex
    })
  }

  const currentYearData = getYearData(selectedYear)

  // Group by month
  const monthGroups = useMemo(() => {
    const groups: Record<string, typeof currentYearData> = {}
    currentYearData.forEach((item) => {
      const monthKey = item.month
      if (!groups[monthKey]) {
        groups[monthKey] = []
      }
      groups[monthKey].push(item)
    })
    return groups
  }, [currentYearData])

  const currentIndex = years.indexOf(selectedYear)

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 pt-6 pb-6 md:space-y-4"
        >
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            My Journey
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My professional and educational journey from learning to code to building AI-driven
            systems at scale
          </p>
        </motion.div>

        {/* Year Slider */}
        <div className="mb-8">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {currentYearData.length} event{currentYearData.length !== 1 ? 's' : ''} in{' '}
              {selectedYear}
            </p>
          </div>

          <div className="relative mx-auto flex max-w-3xl items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={() => currentIndex > 0 && setSelectedYear(years[currentIndex - 1])}
              disabled={currentIndex === 0}
              className="absolute left-0 rounded-full border-2 border-blue-400 bg-white/80 p-3 shadow-xl transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 dark:bg-gray-800"
              style={{ marginLeft: '-56px' }}
            >
              <FaChevronLeft className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </button>

            {/* Year Display */}
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-16 py-6 shadow-lg"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{selectedYear}</div>
                <div className="mt-1 text-xs text-blue-100">
                  {currentIndex + 1} of {years.length} years
                </div>
              </div>
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={() =>
                currentIndex < years.length - 1 && setSelectedYear(years[currentIndex + 1])
              }
              disabled={currentIndex === years.length - 1}
              className="absolute right-0 rounded-full border-2 border-blue-400 bg-white/80 p-3 shadow-xl transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 dark:bg-gray-800"
              style={{ marginRight: '-56px' }}
            >
              <FaChevronRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {currentYearData.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {selectedYear} Timeline
              </h2>
            </div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Timeline line on left */}
              <div className="absolute top-0 left-8 h-full w-1 bg-blue-300 dark:bg-blue-700"></div>

              {/* Month-grouped items */}
              {Object.entries(monthGroups)
                .sort((a, b) => {
                  if (a[0] === 'Present') return -1
                  if (b[0] === 'Present') return 1
                  if (a[0] === 'Ongoing') return 1
                  if (b[0] === 'Ongoing') return -1
                  return monthOrder.indexOf(a[0]) - monthOrder.indexOf(b[0])
                })
                .map(([month, items]) => (
                  <div key={month} className="mb-8">
                    {items.map((item, itemIndex) => (
                      <div key={`${month}-${itemIndex}`} className="mb-8 flex flex-row items-start">
                        {/* Month indicator */}
                        <div className="relative mr-2 flex min-w-[80px] flex-col items-center">
                          {itemIndex === 0 ? (
                            <div className="mb-1 flex h-8 w-16 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-100 text-center text-xs font-bold text-blue-700 dark:border-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                              {month}
                            </div>
                          ) : (
                            <div className="mb-1 h-8 w-16"></div>
                          )}
                        </div>

                        {/* Timeline card */}
                        <div className="ml-4 flex-1">
                          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                            {/* Metadata badges */}
                            <div className="mb-4 flex flex-wrap items-center gap-3">
                              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                <FaCalendarAlt className="mr-2 h-3 w-3" />
                                {item.range}
                              </div>
                              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                <FaMapMarkerAlt className="mr-2 h-3 w-3" />
                                {item.location}
                              </div>
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                  item.type === 'work'
                                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                    : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                                }`}
                              >
                                {item.type === 'work' ? 'Work' : 'Education'}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                              {item.title}
                            </h3>

                            {/* Organization */}
                            <div className="mb-4">
                              <span className="text-primary-500 dark:text-primary-400 text-lg font-semibold">
                                {item.organization}
                              </span>
                            </div>

                            {/* Description */}
                            {item.description && (
                              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            )}

                            {/* Achievements */}
                            {item.achievements && item.achievements.length > 0 && (
                              <div className="space-y-2">
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                                  Key Achievements:
                                </h4>
                                <ul className="space-y-2">
                                  {item.achievements.map((achievement: string, index: number) => (
                                    <li key={index} className="flex items-start space-x-3">
                                      <span className="mt-1 text-lg text-blue-500">•</span>
                                      <span className="leading-relaxed text-gray-700 dark:text-gray-300">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <FaCalendarAlt className="mx-auto mb-4 h-12 w-12 opacity-50" />
              <p className="text-lg">No events recorded for {selectedYear}</p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  )
}
