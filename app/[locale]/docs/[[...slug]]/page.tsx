import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { source } from '@/lib/source'

function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  }
}

export default async function Page(props: PageProps<'/[locale]/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.locale);
  if (!page) notFound();

  const MDX = page.data.body

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      // lastUpdate={page.data.lastModified}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: PageProps<'/[locale]/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
