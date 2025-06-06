import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'

type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ children, href }: { children: ReactNode; href?: string }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children }: { children: ReactNode }) => (
      <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
        {children}
      </code>
    ),
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-slate-400 my-4">
        {children}
      </blockquote>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="list-disc list-inside mb-4 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="mb-1">{children}</li>
    ),
    img: (props: any) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="rounded-lg my-4"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}