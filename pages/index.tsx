import Head from 'next/head'

import NavHeader from 'blocks/NavHeader'
import LandingPage from './landing-page'

export default function Web() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta
          name="description"
          content="We’re on a journey to advance and democratize artificial intelligence through open source and open science."
        />
        <meta property="fb:app_id" content="1321688464574422" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@huggingface" />
        <meta property="og:title" content="Hugging Face – The AI community building the future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://huggingface.co/" />
        <meta property="og:image" content="https://huggingface.co/front/thumbnails/v2-2.png" />
        <link rel="stylesheet" href="/front/build/kube/style.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" />
        {/* <!-- HEAD_svelte-vwinwk_START --> */}
        {/* <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" title="Hugging Face Blog" /> */}
        {/* <!-- HEAD_svelte-vwinwk_END --> */}
        <title>Hugging Face – The AI community building the future.</title>
        <script defer data-domain="huggingface.co" src="/js/script.js"></script>
      </Head>
      <div
        className="HomePage flex min-h-screen flex-col bg-white text-black dark:bg-gray-950"
        style={{ fontSize: 16 }}
      >
        <div className="flex min-h-screen flex-col">
          <NavHeader />
          <div className="SVELTE_HYDRATER contents" data-props="{}" data-target="GoogleAnalyticsTracker"></div>
          <div className="SVELTE_HYDRATER contents" data-props="{}" data-target="SSOBanner"></div>
          <LandingPage />
        </div>
      </div>
    </>
  )
}
