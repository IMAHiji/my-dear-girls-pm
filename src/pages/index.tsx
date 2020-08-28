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
}));

const IndexPage = ({ data: { allPrismicPost, prismicHomepage } }: any) => {
  const posts = allPrismicPost.edges;
  const homePageData = prismicHomepage.data;
  const homepageHero = homePageData.homepage_hero.fluid.src;
  const { homeHeroWrapper } = useStyles(homepageHero);

  return (
    <>
      <Layout>
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            className={homeHeroWrapper}
            justify="center"
            container
            style={{
              backgroundImage: `url(${homepageHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom -100px center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h1" color="textPrimary">
              {homePageData.title.text}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {homePageData.content.text && <p>{homePageData.content.text}</p>}
          </Grid>
          <Grid item xs={10} justify="flex-start" alignContent="center" alignItems="center" container direction="row">
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
