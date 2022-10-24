import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { graphql, Link } from 'gatsby'
import React from 'react'

export default function Artikel( {data }) {
  const allBlogs = data.allNotion.edges

    return (
    <Layout>
        <h1>Artikel!</h1>
        {
          allBlogs.map( p => (
            <div key={p.node.id} >
              <Link to={p.node.title.split(" ").join("-").toLowerCase()}><h3>{p.node.raw.icon.emoji} {p.node.title}</h3></Link>
              <div>
                <p>{p.node.childMarkdownRemark.excerpt}</p>
              </div>
            </div>
          )
          )
        }
    </Layout>
  )
}

export const query = graphql`
  query AllArtikel {
    allNotion(
      sort: {fields: properties___Created___value, order: DESC}
      filter: {properties: {Status: {value: {name: {eq: "Published!"}}}}}
    ) {
      edges {
        node {
          title
          id
          childMarkdownRemark {
            excerpt
          }
          raw {
            icon {
              emoji
            }
          }
        }
      }
    }
  }
`