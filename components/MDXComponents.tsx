import Link from '@/components/common/Link'
import PageTitle from '@/components/common/PageTitle'
import SectionContainer from '@/components/layout/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import type { ReactNode } from 'react'

const editUrl = (path: string) => `${path}`
const discussUrl = (path: string) => `${path}`

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
            <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
