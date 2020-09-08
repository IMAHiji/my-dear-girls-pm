import React from 'react';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  imageContainerWrapper: {
    margin: theme.spacing(1),
  },
  buttonWrapper: {
    height: '100%',
    width: '100%',
    display: 'block',
    padding: 0,
    border: 'none',
  },
  dialogContentWrapper: {
    padding: 0,
    '&:first-child': {
      padding: 0,
    },
  },
}));
const Image = ({ image }: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { fluid } = image.primary.image;
  const { imageContainerWrapper, buttonWrapper, dialogContentWrapper } = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleCLose = () => {
    setOpen(false);
  };
  return (
    <Grid item md={3} xs={2} className={imageContainerWrapper}>
      <Button variant="outlined" className={buttonWrapper} onClick={handleClick}>
        <Img fluid={fluid} />
      </Button>
      <Dialog open={open} onClose={handleCLose} fullWidth maxWidth="md">
        <DialogContent className={dialogContentWrapper}>
          <Img fluid={fluid} />
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Image;
