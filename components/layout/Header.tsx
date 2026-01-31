'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '@/components/common/Link'
import MobileNav from '@/components/layout/MobileNav'
import ThemeSwitch from '@/components/navigation/ThemeSwitch'
import CommandPalette from '@/components/navigation/CommandPalette'

const Header = () => {
  const pathname = usePathname()
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Site Title/Logo */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-center">
          <span className="text-primary-500 dark:text-primary-400 text-xl font-bold tracking-tight sm:text-2xl">
            {siteMetadata.author}
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-1 leading-5 sm:gap-2">
        {/* Desktop navigation links - hidden on mobile */}
        <nav className="hidden items-center gap-x-1 md:flex">
          {headerNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.title}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.title}
                {isActive && (
                  <span className="bg-primary-500 dark:bg-primary-400 absolute bottom-0 left-0 h-0.5 w-full rounded-full"></span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Utility buttons */}
        <CommandPalette />
        <ThemeSwitch />
        
        {/* Mobile menu button - only on mobile */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
