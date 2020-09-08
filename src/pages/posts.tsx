import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../components/layout';
import PostPreview from '../components/PostPreview';

const useStyles = makeStyles((theme: Theme) => ({
  homeHeroWrapper: {
    color: theme.palette.background.paper,
    width: '100vw',
    height: '50vh',
  },
  homeText: {
    margin: theme.spacing(2),
  },
}));

const Posts = ({ data: { allPrismicPost, prismicHomepage } }: any) => {
  const posts = allPrismicPost.edges;

  return (
    <>
      <Layout>
        <Grid container justify="center" alignItems="center">
          <p>I am list of posts</p>
        </Grid>
      </Layout>
    </>
  );
};

export default Posts;

export const indexPageQuery = graphql`
  query posts {
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
      edges {
        node {
          uid
          data {
            title {
              text
            }
            body {
              ... on PrismicPostBodyText {
                id
                primary {
                  text {
                    text
                  }
                }
              }
            }
            featured_image {
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
`;
