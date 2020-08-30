import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({
  postPreviewItem: {
    width: '250px',
    maxWidth: '250px',
    minWidth: '250px',
    height: '450px',
    maxHeight: '450px',
    boxShadow: theme.shadows[5],
    margin: theme.spacing(2),
  },
  postLinkElement: {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  postFeaturedImage: {
    height: '175px',
    minHeight: '50%',

    flexGrow: 1,
  },
  postPreviewContent: {
    height: '175px',
    minHeight: '50%',
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const returnTextPreview = (text: string) => {
  const maxLength = 200;
  const ending = '...';
  if (text.length > maxLength) {
    return text.substring(0, maxLength - ending.length) + ending;
  }
  return text + ending;
};

const PostPreview = ({ nodes }: any) => {
  const { postPreviewItem, postLinkElement, postFeaturedImage, postPreviewContent } = useStyles();
  return (
    <>
      {nodes.map((post: any) => (
        <Grid key={post.node.uid} className={postPreviewItem} item xs={1} md={6}>
          <Grid container direction="column" justify="space-between" alignContent="center">
            <Link to={post.node.uid} className={postLinkElement}>
              <Grid
                item
                className={postFeaturedImage}
                style={{
                  backgroundImage: `url(${post.node.data.featured_image.fluid.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              />
              <Grid item className={postPreviewContent}>
                <Typography variant="h5" component="h3" color="textPrimary">
                  {post.node.data.title.text}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {returnTextPreview(post.node.data.body[0].primary.text.text)}
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default PostPreview;
