/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Header from './header';

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Grid container item xs={12}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid container item xs={12} role="main" justify="center">
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
