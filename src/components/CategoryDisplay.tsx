import React from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const CategoryDisplay = ({ categories }: any) => (
  <>
    {categories.map((category: any) => {
      const name = category.category.document && category.category.document.data.name;

      return name && <Chip label={name} key={name} />;
    })}
  </>
);
export default CategoryDisplay;
