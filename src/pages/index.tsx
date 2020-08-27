import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from "gatsby-image"
import SEO from '../components/seo'

const IndexPage = ({ data:{allPrismicPost, prismicHomepage} }) => {
  const {nodes:posts} = allPrismicPost
  const homePageData = prismicHomepage.data
  console.log(homePageData)
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <h1>{homePageData.title.text}</h1>
        <Img fluid={homePageData.homepage_hero.fluid}/>
        <p>{homePageData.content.text}</p>
        <h3>Posts:</h3>
        <ul>
        {posts.map((post:any)=> {
          return(
          <li key={post.uid}><Link to={post.uid} >{post.data.title.text}</Link></li>
          )
        })  }
        </ul>
        
      </Layout>
    </>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query postList {
    prismicHomepage {
    data {
      content {
        text
      }
      title {
        text
      }
      homepage_hero {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
    allPrismicPost {
    nodes {
      uid
      url
      href
      data {
        title {
          text
          raw
          html
        }
      }
    }
  }
  }
`
