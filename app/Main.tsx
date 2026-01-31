'use client'

import Link from '@/components/common/Link'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'
import { RoughNotation } from 'react-rough-notation'
import Image from '@/components/common/Image'
import { FaGraduationCap, FaBriefcase, FaFlask } from 'react-icons/fa'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  // Calculate stats with animation
  const stats = [
    { label: 'Pharmacy Education', value: '4 Years', icon: FaGraduationCap },
    { label: 'Professional Internships', value: '3+', icon: FaBriefcase },
    { label: 'Research Projects', value: '1', icon: FaFlask },
  ]

  return (
    <>
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        <div className="space-y-6 py-12 md:space-y-8">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
            {/* Text Content */}
            <div className="flex flex-col space-y-6 md:w-2/3">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100"
              >
                Hi, I'm{' '}
                <span className="text-primary-500 dark:text-primary-400">
                  {siteMetadata.author}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl leading-8 text-gray-600 sm:text-2xl dark:text-gray-300"
              >
                <span>
                  <RoughNotation
                    type="highlight"
                    show={true}
                    color="#4ade80"
                    animationDelay={800}
                    animationDuration={1500}
                  >
                    B.Pharm Graduate
                  </RoughNotation>
                </span>{' '}
                | Passionate about Hospital Pharmacy, Drug Formulation & Patient Care
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400"
              >
                Pharmaceutical professional specializing in{' '}
                <span>
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#10b981"
                    animationDelay={1500}
                    animationDuration={1000}
                  >
                    hospital pharmacy operations
                  </RoughNotation>
                </span>{' '}
                and herbal drug formulation. Experienced in pharmaceutical supply chain management,
                inventory systems, and pharmaceutical research.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/experience"
                  className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium text-white transition"
                >
                  <FaBriefcase className="h-5 w-5" />
                  <span>View Experience</span>
                </Link>
                <Link
                  href="/projects"
                  className="border-primary-500 text-primary-500 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-base font-medium transition dark:hover:bg-gray-800"
                >
                  Research Projects
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  About Me
                </Link>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="border-primary-500 relative h-48 w-48 overflow-hidden rounded-full border-4 shadow-2xl md:h-64 md:w-64">
                <Image
                  src="/static/images/avatar.png"
                  alt={siteMetadata.author}
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="my-12"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all dark:border-gray-700 dark:from-gray-800 dark:to-gray-800/50"
              >
                <div className="absolute top-4 right-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <Icon className="text-primary-500 h-16 w-16" />
                </div>
                <div className="relative">
                  <div className="text-primary-500 dark:text-primary-400 mb-2 text-4xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Key Competencies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-16"
      >
        <h2 className="mb-8 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Key Competencies
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
              Clinical & Operations
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Hospital pharmacy management and operations
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Pharmaceutical supply chain logistics
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Inventory management and billing systems
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Data entry and pharmaceutical software
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
              Research & Analysis
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Drug formulation and evaluation
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Pharmaceutical analysis and testing
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Laboratory procedures and methodologies
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Scientific research and documentation
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 my-16 rounded-xl bg-gradient-to-br p-8 text-center"
      >
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Let's Connect</h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
          Interested in pharmaceutical research, hospital pharmacy, or collaboration opportunities?
        </p>
        <Link
          href="/contact"
          className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 inline-block rounded-lg px-8 py-3 font-medium text-white transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </>
  )
}
