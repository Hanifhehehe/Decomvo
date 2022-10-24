import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { graphql } from 'gatsby'
import React from 'react'

export default function ArtikelPages({ data }) {
  const artikel = data.notion
  
  // console.log(artikel)
  return (
    <Layout>
        <div>
            <h1>{artikel.raw.icon.emoji && artikel.raw.icon.emoji}  {artikel.title}</h1>
            <div style={{margin: '60px 0', opacity: '0.7'}}>
                <p>{artikel.properties.Published_Date.value.start}, by {artikel.properties.Author.value.map( n => n.name)} </p>
                <span>{artikel.childMarkdownRemark.timeToRead} min read, {artikel.properties.Language.value.name}</span>
            </div>
            <div dangerouslySetInnerHTML={{__html: artikel.childMarkdownRemark.html}}/>
        </div>
    </Layout>
  )
}
 
export const query = graphql`
    query GetPage($id: String) {
    notion(id: {eq: $id}) {
        title
        childMarkdownRemark {
            html
            timeToRead
        }
        raw {
            icon {
                emoji
            }
        }
        properties {
            Author {
                value {
                    name
                }
            }
            Language {
                value {
                 name
                }
            }
            Published_Date {
                value {
                    start
                }
            }
        }
    }
    }
`