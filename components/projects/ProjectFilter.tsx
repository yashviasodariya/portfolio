'use client'

interface ProjectFilterProps {
  techStack: string[]
  categories: string[]
  selectedTech: string[]
  selectedCategories: string[]
  onTechChange: (tech: string) => void
  onCategoryChange: (category: string) => void
  onClearFilters: () => void
}

export default function ProjectFilter({
  techStack,
  categories,
  selectedTech,
  selectedCategories,
  onTechChange,
  onCategoryChange,
  onClearFilters,
}: ProjectFilterProps) {
  const hasActiveFilters = selectedTech.length > 0 || selectedCategories.length > 0

  return (
    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-sm"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">Category</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategories.includes(category)
                  ? 'bg-primary-500 dark:bg-primary-400 text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Stack Filter */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <button
              key={tech}
              onClick={() => onTechChange(tech)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedTech.includes(tech)
                  ? 'bg-primary-500 dark:bg-primary-400 text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
