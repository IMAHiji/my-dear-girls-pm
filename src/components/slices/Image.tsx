import React from 'react';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  imageWrapper: {
    margin: theme.spacing(1),
  },
}));
const Image = ({ image }: any) => {
  const { fluid } = image.primary.image;
  const { imageWrapper } = useStyles();
  return (
    <Grid item xs={5} className={imageWrapper}>
      <Img fluid={fluid} />
    </Grid>
  );
};

export default Image;
