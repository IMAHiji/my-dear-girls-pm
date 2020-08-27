import React from "react"
import { graphql } from "gatsby"
import SliceParser from '../SliceParser';

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  console.log(data)
  return (
    <React.Fragment>
 
     <h1>I am a post for {data.title.text} </h1>
     <SliceParser slices={data.body}/>
    </React.Fragment>
  )
}
export default Post
export const postQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
    data {
      title {
        text
      }
      body {
        ... on PrismicPostBodyQuote {
          id
          slice_type
          slice_label
          internal {
            content
          }
        }
        ... on PrismicPostBodyText {
          id
          slice_label
          slice_type
          internal {
            content
          }
          primary {
            text {
              html
            }
          }
        }
        ... on PrismicPostBodyImage {
          id
          slice_label
          slice_type
          primary {
            image {
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
      }
    }
    }
  }
  `