'use client'

import {
  Dialog,
  DialogPanel,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { FiCommand } from 'react-icons/fi'
import { HiSearch } from 'react-icons/hi'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import navigation from '@/data/navigation'

interface SearchItem {
  name: string
  href: string
  type: 'page' | 'blog' | 'resource'
  category?: string
}

export default function CommandPalette() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [searchData, setSearchData] = useState<SearchItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [playOpen] = useSound('/static/sounds/open.mp3', { volume: 0.5 })

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 150)
    return () => clearTimeout(timer)
  }, [query])

  // Load search data from the generated search.json
  useEffect(() => {
    const loadSearchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/search.json')
        const blogPosts: Array<{ title: string; path: string; category?: string }> =
          await response.json()

        // Combine pages, blog posts, and resources into searchable items
        const pages: SearchItem[] = navigation.pages.map((page) => ({
          name: page.name,
          href: page.href,
          type: 'page',
        }))

        const blogs: SearchItem[] = blogPosts.map((post) => ({
          name: post.title,
          href: `/${post.path}`,
          type: 'blog',
          category: post.category || 'Blog',
        }))

        setSearchData([...pages, ...blogs])
      } catch (error) {
        // Fallback to just pages if search.json not available
        const pages: SearchItem[] = navigation.pages.map((page) => ({
          name: page.name,
          href: page.href,
          type: 'page',
        }))
        setSearchData(pages)
      } finally {
        setIsLoading(false)
      }
    }

    loadSearchData()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        event.stopPropagation()
        setIsOpen(!isOpen)
        playOpen()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, playOpen])

  const togglePalette = () => {
    setIsOpen(!isOpen)
    playOpen()
  }

  const filteredItems = debouncedQuery
    ? searchData.filter(
        (item) =>
          item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          (item.category && item.category.toLowerCase().includes(debouncedQuery.toLowerCase()))
      )
    : searchData.slice(0, 8) // Show first 8 items when no query

  return (
    <>
      <motion.button
        className="focus:ring-primary-500 mr-1 ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-1 ring-zinc-400 transition-all duration-200 ease-in-out hover:bg-zinc-400 hover:ring-1 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-600"
        type="button"
        aria-label="Command palette (⌘K)"
        title="Open command palette (⌘K)"
        animate={{
          rotate: isOpen ? 360 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={togglePalette}
      >
        <FiCommand className="h-4 w-4" />
      </motion.button>

      <Transition show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
        <Dialog onClose={setIsOpen} className="fixed inset-0 z-[100] overflow-y-auto p-4 pt-[15vh] sm:pt-[20vh]">
          <TransitionChild
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-900/75 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative mx-auto max-w-xl focus:outline-none">
              <Combobox
                onChange={(page: { name: string; href: string } | null) => {
                  if (page) {
                    setIsOpen(false)
                    router.push(page.href)
                  }
                }}
              >
                <div className="focus-within:ring-primary-500 overflow-hidden rounded-xl bg-white ring-1 shadow-2xl ring-black/5 focus-within:ring-2 dark:bg-zinc-800">
                  <div className="flex items-center border-b border-gray-200 px-3 sm:px-4 dark:border-zinc-700">
                    <HiSearch className="h-4 w-4 flex-shrink-0 text-gray-400 sm:h-5 sm:w-5" />
                    <ComboboxInput
                      onChange={(event) => setQuery(event.target.value)}
                      className="h-11 w-full border-0 bg-transparent px-3 text-sm text-gray-800 placeholder-gray-400 focus:ring-0 focus:outline-none sm:h-12 sm:px-4 dark:text-gray-200 dark:placeholder-gray-500"
                      placeholder="Search pages..."
                      autoComplete="off"
                    />
                  </div>

                  {/* Loading State */}
                  {isLoading && (
                    <div className="px-6 py-14 text-center">
                      <div className="border-primary-500 mx-auto h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
                      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Loading search data...
                      </p>
                    </div>
                  )}

                  {/* Result Count */}
                  {!isLoading && filteredItems.length > 0 && (
                    <div className="border-b border-gray-200 px-4 py-2 text-xs text-gray-500 dark:border-zinc-700 dark:text-gray-400">
                      {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}
                      {debouncedQuery && ` for "${debouncedQuery}"`}
                    </div>
                  )}

                  {/* Results */}
                  {!isLoading && filteredItems.length > 0 && (
                    <ComboboxOptions static className="max-h-[50vh] overflow-y-auto py-2 sm:max-h-96">
                      {filteredItems.map((item, index) => (
                        <ComboboxOption key={`${item.href}-${index}`} value={item} as={Fragment}>
                          {({ focus }) => (
                            <li
                              className={`cursor-pointer px-3 py-2.5 sm:px-4 sm:py-3 ${
                                focus
                                  ? 'bg-primary-500 text-white'
                                  : 'text-gray-900 dark:text-gray-100'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex flex-col overflow-hidden">
                                  <span className="truncate font-medium">{item.name}</span>
                                  {item.category && (
                                    <span className="truncate text-xs opacity-75">{item.category}</span>
                                  )}
                                </div>
                              </div>
                            </li>
                          )}
                        </ComboboxOption>
                      ))}
                    </ComboboxOptions>
                  )}

                  {/* No Results */}
                  {!isLoading && debouncedQuery && filteredItems.length === 0 && (
                    <div className="px-6 py-14 text-center text-sm text-gray-500 dark:text-gray-400">
                      No results found for "{debouncedQuery}"
                    </div>
                  )}

                  {/* Keyboard Shortcuts Footer */}
                  <div className="hidden items-center justify-between border-t border-gray-200 px-4 py-3 text-xs text-gray-500 sm:flex dark:border-zinc-700 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-zinc-700">↑↓</kbd>
                        <span>Navigate</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-zinc-700">Enter</kbd>
                        <span>Select</span>
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <kbd className="rounded bg-gray-100 px-2 py-1 dark:bg-zinc-700">ESC</kbd>
                      <span>Close</span>
                    </span>
                  </div>
                </div>
              </Combobox>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
