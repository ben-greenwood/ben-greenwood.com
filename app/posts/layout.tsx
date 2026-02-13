import { ReactNode } from 'react'
import Header from '../_components/Header'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Link href="/" passHref className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 hover:text-slate-600 dark:hover:text-slate-300">
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </Link>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </article>
    </div>
  )
} 