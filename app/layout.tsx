import Head from 'next/head'
import { Metadata } from 'next'

import NavHeader from 'ui/blocks/NavHeader/index.client'

import 'styles/global-stylesheet.css'
import 'styles/google-font-Source-Sans-Pro.css'
import 'styles/google-font-IBM-Plex-Mono.css'

export const metadata: Metadata = {
  title: 'Hugging Face – The AI community building the future.',
  openGraph: {
    title: 'Hugging Face – The AI community building the future.',
    type: 'website',
    url: 'huggingface',
    images: 'https://huggingface.co/front/thumbnails/v2-2.png',
  },
  description:
    'We’re on a journey to advance and democratize artificial intelligence through open source and open science.',
  twitter: {
    card: 'summary_large_image',
    site: '@huggingface',
  },
  appLinks: {},
  // fb: { app_id: '1321688464574422', },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" title="Hugging Face Blog" />
        <script defer data-domain="huggingface.co" src="/js/script.js"></script>
      </Head>
      <body>
        <main
          className="HomePage flex min-h-screen flex-col bg-white text-black dark:bg-gray-950"
          style={{ fontSize: 16 }}
        >
          <div className="flex min-h-screen flex-col">
            <NavHeader />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
