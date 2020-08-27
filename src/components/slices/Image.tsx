import React from 'react';
import Img from 'gatsby-image';

const Image = ({image}) => {
  const fluid = image.primary.image.fluid
  return(<Img fluid={fluid} />)
}

export default Image