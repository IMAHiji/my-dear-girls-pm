import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Author from '../Author';
import Layout from '../layout';
import SliceParser from '../SliceParser';

const useStyles = makeStyles((theme: Theme) => ({
  featuredImage: {
    margin: theme.spacing(2, 0),
  },
  postInfo: {},
}));

const makeAuthorData = (rawAuthorData: any) => {
  const authorArray: any = [];
  // console.log('Author Data', rawAuthorData);
  rawAuthorData.forEach((edge: any) => {
    const authorObject: { name: string; url: string } = { name: '', url: '' };
    authorObject.name = edge.node.data.author_name;
    authorObject.url = edge.node.data.author_link.url;
    authorArray.push(authorObject);
  });

  return authorArray;
};

const Post = ({ data: { prismicPost, allPrismicAuthor } }: any) => {
  const authorData = makeAuthorData(allPrismicAuthor.edges);
  console.log(authorData);
  const { data } = prismicPost;
  const { featuredImage, postInfo } = useStyles();
  return (
    <Layout>
      <Grid container justify="center" item xs={10} direction="row">
        <Grid item xs={4} className={featuredImage}>
          <Img fluid={data.featured_image.fluid} />
        </Grid>
        <Grid container item xs={12} className={featuredImage} justify="center">
          <Typography variant="h2">{data.title.text} </Typography>
        </Grid>
        <Grid container item xs={12} className={postInfo} justify="center">
          <Author authorData={authorData} />
        </Grid>
        <SliceParser slices={data.body} />
      </Grid>
    </Layout>
  );
};
export default Post;
export const postQuery = graphql`
  query PostBySlug($id: StringQueryOperatorInput = {}) {
    prismicPost(uid: { eq: "the-princess-and-the-giant" }) {
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
  }
`;
