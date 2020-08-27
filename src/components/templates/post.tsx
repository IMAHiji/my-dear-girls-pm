import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import SliceParser from '../SliceParser';

const Post = ({ data: { prismicPost } }: any) => {
  const { data } = prismicPost;
  return (
    <Layout>
      <h1>{data.title.text} </h1>
      <SliceParser slices={data.body} />
    </Layout>
  );
};
export default Post;
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
            primary {
              quote {
                html
              }
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
`;
