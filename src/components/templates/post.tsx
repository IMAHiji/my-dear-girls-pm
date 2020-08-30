import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid/';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import SliceParser from '../SliceParser';

const Post = ({ data: { prismicPost } }: any) => {
  const { data } = prismicPost;
  return (
    <Layout>
      <Grid container justify="center" item xs={10}>
        <Typography variant="h1">{data.title.text} </Typography>

        <SliceParser slices={data.body} />
      </Grid>
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
