import React from 'react';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';

const Image = ({ image }: any) => {
  const { fluid } = image.primary.image;
  return (
    <Grid item xs={10}>
      <Img fluid={fluid} />
    </Grid>
  );
};

export default Image;
