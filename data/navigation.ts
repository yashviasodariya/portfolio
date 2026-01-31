export interface NavigationPage {
  name: string
  href: string
  icon?: string
}

export const navigation = {
  pages: [
    { name: 'Home', href: '/', icon: 'HomeIcon' },
    { name: 'About', href: '/about', icon: 'PersonIcon' },
    { name: 'Experience', href: '/experience', icon: 'RocketIcon' },
    { name: 'Projects', href: '/projects', icon: 'ArchiveIcon' },
    { name: 'Contact', href: '/contact', icon: 'Link2Icon' },
  ],
}

export default navigation
