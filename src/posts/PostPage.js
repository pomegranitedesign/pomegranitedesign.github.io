import React from 'react';

const PostPage = ({ data }) => {
  return (
    <div>
      <span>{data.markdownRemark.frontmatter.date}</span>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div 
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default PostPage;