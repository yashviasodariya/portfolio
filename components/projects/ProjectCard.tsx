import Image from '@/components/common/Image'
import Link from '@/components/common/Link'
import { Project } from '@/data/projectsData'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imgSrc, href, github, demo, techStack, category, status, featured } =
    project

  return (
    <div className="h-full">
      <div className="group hover:border-primary-500 dark:hover:border-primary-400 flex h-full flex-col overflow-hidden rounded-xl border-2 border-gray-200/60 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800">
        {/* Status Badge */}
        {featured && (
          <div className="absolute z-10 m-2">
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-white">
              Featured
            </span>
          </div>
        )}

        {/* Image */}
        {imgSrc && (
          <div className="relative">
            {href || demo ? (
              <Link href={href || demo || ''} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            )}
          </div>
        )}

        <div className="p-6">
          {/* Category Badges */}
          <div className="mb-3 flex flex-wrap gap-2">
            {category.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {cat}
              </span>
            ))}
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                status === 'completed'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {status === 'in-progress' ? 'In Progress' : status}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
            {href || demo ? (
              <Link
                href={href || demo || ''}
                aria-label={`Link to ${title}`}
                className="text-gray-900 dark:text-gray-100"
              >
                {title}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100">{title}</span>
            )}
          </h2>

          {/* Description */}
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>

          {/* Tech Stack - Simple text badges */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {github && (
              <Link
                href={github}
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                aria-label={`GitHub repository for ${title}`}
              >
                GitHub →
              </Link>
            )}
            {demo && (
              <Link
                href={demo}
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                aria-label={`Live demo of ${title}`}
              >
                Live Demo →
              </Link>
            )}
            {href && !demo && (
              <Link
                href={href}
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                aria-label={`Learn more about ${title}`}
              >
                Learn more →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
