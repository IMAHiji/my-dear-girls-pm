import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const CategoryDisplay = ({ categories }: any) => {
  console.log(categories);

  return (
    <>
      {categories.map((category: any) => (
        <Chip label={category.category.document.data.name} />
      ))}
    </>
  );
};
export default CategoryDisplay;
