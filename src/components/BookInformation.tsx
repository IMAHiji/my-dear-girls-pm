import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export type AuthorProps = {
  title: string;
  authorData: [{ name: string; url: string }];
};

const BookInformation = ({ authorData, title }: AuthorProps) => {
  console.log('author id', authorData);
  return (
    <Grid>
      <Typography variant="h2">{title} </Typography>
      <Typography variant="body2">by: {authorData[0].name}</Typography>
    </Grid>
  );
};

export default BookInformation;
