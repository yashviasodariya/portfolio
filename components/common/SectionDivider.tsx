interface SectionDividerProps {
  title?: string
  subtitle?: string
}

export default function SectionDivider({ title, subtitle }: SectionDividerProps) {
  if (title) {
    return (
      <div className="border-t border-gray-200 py-16 dark:border-gray-700">
        <div className="text-center">
          {title && (
            <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
          )}
          {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
        </div>
      </div>
    )
  }

  return <div className="border-t border-gray-200 py-16 dark:border-gray-700" />
}
