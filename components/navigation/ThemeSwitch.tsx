'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import useSound from 'use-sound'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [playSound] = useSound('/static/sounds/switch-on.mp3', { volume: 0.5 })

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    playSound()
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.7, rotate: 360 }}
      whileHover={mounted ? { scale: 1.1 } : {}}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className="ml-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-2 ring-zinc-400 transition-all hover:bg-zinc-400 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-600"
      aria-label="Toggle theme"
      type="button"
    >
      {mounted &&
        (resolvedTheme === 'dark' ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />)}
    </motion.button>
  )
}

export default ThemeSwitch
