import React from 'react';

import Typography from '@material-ui/core/Typography';

export type AuthorProps = {
  authorData: [{ name: string; url: string }];
};

const Author = ({ authorData }: AuthorProps) => {
  console.log('author id', authorData);
  return <Typography variant="body2">{authorData[0].name}</Typography>;
};

export default Author;
