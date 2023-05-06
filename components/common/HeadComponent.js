import React from 'react'
import Head from 'next/head'
import { COMPANY_NAME, COMPANY_TAGLINE } from '@/config/index'

export default function HeadComponent() {
  return (
    <Head>
        <title>{COMPANY_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={COMPANY_TAGLINE} />
    </Head>
  )
}
