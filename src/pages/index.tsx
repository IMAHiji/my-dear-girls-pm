import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
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
