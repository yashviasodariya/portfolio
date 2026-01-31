import Link from '@/components/common/Link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400 mr-3 rounded-full px-3 py-1 text-sm font-medium">
      {text.split(' ').join('-')}
    </span>
  )
}

export default Tag
