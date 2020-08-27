import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';
import PostPreview from '../components/PostPreview';

const IndexPage = ({ data: { allPrismicPost, prismicHomepage } }: any) => {
  const posts = allPrismicPost.edges;
  const homePageData = prismicHomepage.data;

  return (
    <>
      <Layout>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h1">{homePageData.title.text}</Typography>
            <Img fluid={homePageData.homepage_hero.fluid} />
          </Grid>
          {homePageData.content.text && <p>{homePageData.content.text}</p>}
          <Grid item xs={10}>
            <h3>Latest Books:</h3>

            <PostPreview nodes={posts} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default IndexPage;

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
      edges {
        node {
          uid
          data {
            title {
              text
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
