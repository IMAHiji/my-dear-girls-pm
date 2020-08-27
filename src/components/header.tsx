import React from 'react';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/HomeOutlined';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from '@material-ui/core/Link';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  homeIcon: {
    color: theme.palette.background.paper,
  },
}));
const Header = ({ siteTitle }: any) => {
  const { homeIcon } = useStyles();
  const HideOnScroll = (props: any) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };
  return (
    <header>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Link href="/">
              <Home className={homeIcon} />
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </header>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
