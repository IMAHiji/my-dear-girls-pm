import React from 'react';
import Grid from '@material-ui/core/Grid';

const Quote = ({ content }: any) => (
  <Grid item xs={10} dangerouslySetInnerHTML={{ __html: content.primary.quote.html }} />
);
export default Quote;
