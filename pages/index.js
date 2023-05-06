import Footer from '@/components/common/Footer'
import HeadComponent from '@/components/common/HeadComponent'
import Header from '@/components/common/Header'
import Nav from '@/components/common/Nav'
import Content from '@/components/home/Content'
import Team from '@/components/home/Team'
import React from 'react'

export default function HomePage() {
  return (
    <>
    <HeadComponent />
    <Nav />
    <Header />
    <Content /> 
    <Team />
    <Footer />
    </>
  )
}
