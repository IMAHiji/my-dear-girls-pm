import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ nodes }: any) => {
  console.log(nodes);
  return (
    <ul className="postPreviewContainer">
      {nodes.map((post: any) => (
        <li key={post.node.uid}>
          <Link to={post.node.uid}>{post.node.data.title.text} </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostPreview;
