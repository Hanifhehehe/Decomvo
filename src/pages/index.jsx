import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { graphql, Link } from 'gatsby'
import React from 'react'

export default function index( { data }) {
  const allBlogs = data.allNotion.edges.slice(0,3)
  return (
    <Layout>
    <div>
        <h1>Decolonized Community Voices</h1>
        <h4>Making decolonized voices heard!</h4>
    </div>
    <hr style={{margin: '200px 0', borderColor: 'white'}} />
    <div>
      <h2>Artikel!</h2>
      {
        allBlogs.map( p => (
            <div key={p.node.id} >
              <Link to={"/artikel/" + p.node.title.split(" ").join("-").toLowerCase()}><h3>{p.node.raw.icon.emoji} {p.node.title}</h3></Link>
              <div>
                <p>{p.node.childMarkdownRemark.excerpt}</p>
              </div>
            </div>
          )
          )
      }
    </div>
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