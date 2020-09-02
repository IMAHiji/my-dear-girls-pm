import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export type AuthorProps = {
  title: string;
  authorData?: [{ name: string; url: string }];
  illustratorData?: [{ name: string; url: string }];
};

const BookInformation = ({ authorData, title, illustratorData }: AuthorProps) => (
  <Grid>
    <Typography variant="h2">{title} </Typography>
    <Typography variant="body2">
      Author:{' '}
      <Link href={authorData[0].url} rel="noopener" target="_blank">
        {authorData[0].name}
      </Link>
    </Typography>

    <Typography variant="body2">
      Illustrations:{' '}
      <Link href={illustratorData[0].url} rel="noopener" target="_blank">
        {illustratorData[0].name}
      </Link>
    </Typography>
  </Grid>
);

export default BookInformation;
