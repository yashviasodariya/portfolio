'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from '@/components/common/Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const pathname = usePathname()

  const onToggleNav = () => {
    setNavShow((status) => {
      // Prevent body scroll when menu is open
      if (!status) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
      return !status
    })
  }

  const closeNav = () => {
    setNavShow(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {/* Mobile menu button - only visible on mobile */}
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="hover:text-primary-500 dark:hover:text-primary-400 ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-300 p-1 transition-all hover:bg-zinc-400 md:hidden dark:bg-zinc-700 dark:hover:bg-zinc-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile navigation menu */}
      <Transition appear show={navShow} as={Fragment}>
        <Dialog as="div" onClose={closeNav} className="relative md:hidden">
          {/* Backdrop */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>

          {/* Menu panel */}
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed top-0 right-0 bottom-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl dark:bg-gray-950">
              {/* Close button */}
              <button
                className="hover:text-primary-500 dark:hover:text-primary-400 absolute top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
                onClick={closeNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-900 dark:text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Navigation links */}
              <nav className="flex h-full flex-col justify-center px-8">
                <div className="space-y-2">
                  {headerNavLinks.map((link) => {
                    const isActive =
                      pathname === link.href || pathname.startsWith(link.href + '/')
                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        className={`block rounded-lg px-4 py-3 text-2xl font-bold tracking-wide transition-all ${
                          isActive
                            ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400'
                            : 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800'
                        }`}
                        onClick={closeNav}
                      >
                        {link.title}
                      </Link>
                    )
                  })}
                </div>

                {/* Footer info */}
                <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pharmaceutical Portfolio
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    © {new Date().getFullYear()} Yashvi Asodariya
                  </p>
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
