import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '@material-ui/core/Button';
import Layout from '../components/layout';
import PostPreview from '../components/PostPreview';

const IndexPage = ({ data: { allPrismicPost, prismicHomepage } }: any) => {
  const posts = allPrismicPost.edges;
  const homePageData = prismicHomepage.data;

  return (
    <>
      <Layout>
        <h1>{homePageData.title.text}</h1>
        <Img fluid={homePageData.homepage_hero.fluid} />
        <p>{homePageData.content.text}</p>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <h3>Latest Books:</h3>

        <PostPreview nodes={posts} />
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
