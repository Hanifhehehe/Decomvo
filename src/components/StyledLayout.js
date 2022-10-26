import React from 'react'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'

export default function StyledLayout({ children }) {
  return (
    <>
        <Layout>
            {children}
        </Layout>
        {
            document.querySelectorAll('footer > div:nth-child(2)').innerHTML = "red"
        }
    </>
  )
}
