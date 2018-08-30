import React from 'react';
import Link from 'gatsby-link';

import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div
        key={node.id}
      >
        <PostListing post={node} />
        <hr />
      </div>
    ))}
  </div>
);


export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 280)
          frontmatter {
            title
            date(formatString:"MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
