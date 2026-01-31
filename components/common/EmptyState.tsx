interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export default function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-gray-100 p-6 dark:bg-gray-800">
        <svg
          className="h-12 w-12 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mt-2 max-w-md text-gray-600 dark:text-gray-400">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 mt-6 rounded-lg px-6 py-2.5 font-medium text-white transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
