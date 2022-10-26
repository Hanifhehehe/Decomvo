import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = () => (
  <Layout>
    <h1>404 - Page Not Found</h1>
    <p>Unfortunately we couldn't find what you were looking for :(</p>
  </Layout>
)

export function Head() {
  return(
    <>
      <title>DeComVo || 404 Not Found!</title>
      <meta name='description' content='Decolonized Community Voices || Making decolonized voices heard!' />
      <meta name='siteUrl' content='https://decomvo.web.app' />
      <meta name='siteUrl' content='https://decomvo.web.app' />
    </>
  )
}

export default NotFound
