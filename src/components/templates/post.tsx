import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import BookInformation from '../BookInformation';
import Layout from '../layout';
import SliceParser from '../SliceParser';
import CategoryDisplay from '../CategoryDisplay';

const useStyles = makeStyles((theme: Theme) => ({
  featuredImage: {
    margin: theme.spacing(2, 0),
  },
}));

const makeAuthorData = (rawAuthorData: any) => {
  const authorArray: any = [];
  rawAuthorData.forEach((edge: any) => {
    const authorObject: { name: string; url: string } = { name: '', url: '' };
    authorObject.name = edge.node.data.author_name;
    authorObject.url = edge.node.data.author_link.url;
    authorArray.push(authorObject);
  });

  return authorArray;
};

const makeIllustratorData = (rawIllustratorData: any) => {
  const illustratorArray: any = [];
  rawIllustratorData.forEach((edge: any) => {
    const illustratorObject: { name: string; url: string } = { name: '', url: '' };
    illustratorObject.name = edge.node.data.illustrator_name;
    illustratorObject.url = edge.node.data.illustrator_link.url;
    illustratorArray.push(illustratorObject);
  });

  return illustratorArray;
};

const Post = ({ data: { prismicPost, allPrismicAuthor, allPrismicIllustrator } }: any) => {
  const { featuredImage } = useStyles();
  const authorData = makeAuthorData(allPrismicAuthor.edges);
  const illustratorData = makeIllustratorData(allPrismicIllustrator.edges);
  const { data } = prismicPost;
  return (
    <Layout>
      <Grid container justify="center" item xs={10} direction="row">
        <Grid item xs={4} className={featuredImage}>
          <Img fluid={data.featured_image.fluid} />
        </Grid>
        <Grid container item className={featuredImage} justify="center">
          <BookInformation authorData={authorData} illustratorData={illustratorData} title={data.title.text} />
        </Grid>
        <Grid item xs={10} wrap="wrap" container justify="center">
          <SliceParser slices={data.body} />
        </Grid>

        <Grid item xs={10} className={featuredImage}>
          <p>Categories</p>
          <CategoryDisplay categories={data.categories} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Post;
export const postQuery = graphql`
  query PostBySlug($id: StringQueryOperatorInput = {}, $uid: String) {
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
        categories {
          category {
            document {
              ... on PrismicCategory {
                id
                data {
                  name
                }
                url
              }
            }
          }
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
        author {
          id
          raw
          url
          lang
          link_type
          size
          slug
          tags
          target
          type
          uid
          isBroken
        }
      }
    }
    allPrismicAuthor(filter: { id: $id }) {
      edges {
        node {
          data {
            author_name
            author_link {
              url
            }
          }
        }
      }
    }
    allPrismicIllustrator(filter: { id: $id }) {
      edges {
        node {
          data {
            illustrator_name
            illustrator_link {
              url
            }
          }
        }
      }
    }
  }
`;
