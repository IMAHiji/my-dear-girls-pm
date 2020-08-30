import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid/';

const BodyText = ({ content }: any) => (
  <Grid container item xs={10} justify="flex-start">
    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: content.primary.text.html }} />
  </Grid>
);
export default BodyText;
