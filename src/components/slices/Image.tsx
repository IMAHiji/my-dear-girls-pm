import React from 'react';
import Img from 'gatsby-image';

const Image = ({ image }: any) => {
  const { fluid } = image.primary.image;
  return <Img fluid={fluid} />;
};

export default Image;
