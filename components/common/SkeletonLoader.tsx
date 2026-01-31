export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border-2 border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* Title */}
      <div className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>

      {/* Description */}
      <div className="mb-4 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>

      {/* Tags */}
      <div className="flex gap-2">
        <div className="h-6 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-6 w-14 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonList({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="mb-2 h-4 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-3 h-8 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-4 space-y-2">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
