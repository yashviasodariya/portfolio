import { genPageMetadata } from 'app/seo'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Contact
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Let's connect! I'm always open to discussing pharmaceutical opportunities, hospital
            pharmacy positions, or collaboration in pharmaceutical research.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Email
                </h3>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-lg"
                >
                  {siteMetadata.email}
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Phone
                </h3>
                <a
                  href={`tel:${siteMetadata.phone}`}
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-lg"
                >
                  {siteMetadata.phone}
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Location
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{siteMetadata.location}</p>
              </div>

              {/* Current Status */}
              <div>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Current Status
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Recent B.Pharm Graduate
                  <br />
                  <span className="text-base text-gray-600 dark:text-gray-400">
                    Seeking Opportunities in Hospital Pharmacy
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Connect With Me
            </h2>

            <div className="space-y-4">
              {siteMetadata.linkedin && (
                <div className="flex items-center gap-4">
                  <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">LinkedIn</h3>
                    <a
                      href={siteMetadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Email</h3>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {siteMetadata.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                  <svg
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Phone</h3>
                  <a
                    href={`tel:${siteMetadata.phone}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {siteMetadata.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Areas of Interest
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Hospital Pharmacy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pharmaceutical operations, inventory management, patient care
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Drug Formulation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Herbal formulations, pharmaceutical research, quality control
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Supply Chain Management
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pharmaceutical logistics, distribution, inventory systems
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
                Pharmaceutical Analysis
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Drug testing, quality assurance, laboratory procedures
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Interested in pharmaceutical collaboration or discussing opportunities?
          </p>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 mt-4 inline-block rounded-lg px-8 py-3 font-medium text-white transition"
          >
            Send me an email
          </a>
        </div>
      </div>
    </>
  )
}
