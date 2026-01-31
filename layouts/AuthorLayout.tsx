import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/common/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    bluesky,
    linkedin,
    github,
    bio,
    skills,
    resume,
  } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center space-x-2 pt-8 pb-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            {bio && (
              <p className="mt-4 px-4 text-center text-sm text-gray-600 dark:text-gray-300">
                {bio}
              </p>
            )}
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
            {resume && (
              <div className="pt-4">
                <a
                  href={resume}
                  className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            )}
          </div>
          <div className="pt-8 pb-8 xl:col-span-2">
            <div className="prose dark:prose-invert max-w-none">{children}</div>

            {/* Skills Section */}
            {skills && skills.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-lg px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
