import React from 'react';
import Link from 'gatsby-link';

const PostListing = ({ post }) => (
  <article>
    <span>{post.frontmatter.date}</span>

    <Link to={post.fields.slug}>
      <h1>{post.frontmatter.title}</h1>
    </Link>
    
    <p>{post.excerpt}</p>
  </article>
);

export default PostListing;