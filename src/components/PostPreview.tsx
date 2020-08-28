import React from 'react';
import { Link } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  postPreviewWrapper: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  postPreviewItem: {
    width: '250px',
    maxWidth: '250px',
    height: '350px',
    maxHeight: '350px',
    border: '1px solid black',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: theme.spacing(6),
  },
}));
const PostPreview = ({ nodes }: any) => {
  console.log(nodes);
  const { postPreviewWrapper, postPreviewItem } = useStyles();

  return (
    <>
      {nodes.map((post: any) => (
        <Grid key={post.node.uid} className={postPreviewItem} item xs={1} md={6}>
          <Link to={post.node.uid}>{post.node.data.title.text}</Link>
        </Grid>
      ))}
    </>
  );
};

export default PostPreview;
