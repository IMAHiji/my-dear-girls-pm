import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import SliceParser from '../SliceParser';

const useStyles = makeStyles((theme: Theme) => ({
  featuredImage: {},
}));
const Post = ({ data: { prismicPost } }: any) => {
  const { data } = prismicPost;
  const { featuredImage } = useStyles();
  return (
    <Layout>
      <Grid container justify="center" item xs={10} direction="row">
        <Grid container item xs={12} className={featuredImage} justify="center">
          <Typography variant="h1">{data.title.text} </Typography>
        </Grid>
        <Grid item xs={4} className={featuredImage}>
          <Img fluid={data.featured_image.fluid} />
        </Grid>
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
        featured_image {
          fluid {
            src
            srcSet
            sizes
            base64
            aspectRatio
          }
        }
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
