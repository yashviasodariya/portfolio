'use client'

import { useState, useMemo } from 'react'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter from '@/components/projects/ProjectFilter'
import ProjectSearch from '@/components/projects/ProjectSearch'
import EmptyState from '@/components/common/EmptyState'
import ScrollFadeIn from '@/components/common/ScrollFadeIn'

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Extract unique tech stack and categories
  const allTechStack = useMemo(() => {
    const techSet = new Set<string>()
    projectsData.forEach((project) => {
      project.techStack.forEach((tech) => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  const allCategories = useMemo(() => {
    const categorySet = new Set<string>()
    projectsData.forEach((project) => {
      project.category.forEach((cat) => categorySet.add(cat))
    })
    return Array.from(categorySet).sort()
  }, [])

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Tech stack filter
      const matchesTech =
        selectedTech.length === 0 || selectedTech.some((tech) => project.techStack.includes(tech))

      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((cat) => project.category.includes(cat))

      return matchesSearch && matchesTech && matchesCategory
    })
  }, [searchQuery, selectedTech, selectedCategories])

  // Sort projects: featured first, then by start date
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return b.startDate.localeCompare(a.startDate)
    })
  }, [filteredProjects])

  const handleTechChange = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const handleClearFilters = () => {
    setSelectedTech([])
    setSelectedCategories([])
    setSearchQuery('')
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Research projects and pharmaceutical work
          </p>
        </div>

        <div className="container py-12">
          {/* Search */}
          <ProjectSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          {/* Filters */}
          <ProjectFilter
            techStack={allTechStack}
            categories={allCategories}
            selectedTech={selectedTech}
            selectedCategories={selectedCategories}
            onTechChange={handleTechChange}
            onCategoryChange={handleCategoryChange}
            onClearFilters={handleClearFilters}
          />

          {/* Results count */}
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {sortedProjects.length} of {projectsData.length} projects
          </div>

          {/* Projects grid */}
          {sortedProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {sortedProjects.map((project, index) => (
                <ScrollFadeIn key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </ScrollFadeIn>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Projects Found"
              description="We couldn't find any projects matching your filters. Try adjusting your search criteria or explore all projects."
              actionLabel="Clear Filters"
              onAction={handleClearFilters}
            />
          )}
        </div>
      </div>
    </>
  )
}
