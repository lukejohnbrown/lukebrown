
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: `/post${value}`,
    });
  }
};

// create pages from MDX files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
              allMdx {
                  edges {
                      node {
                          id
                          fields {
                              slug
                          }
                          frontmatter {
                              date
                          }
                      }
                  }
              }
          }
      `,
      ).then((result) => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve('./src/templates/post.jsx'),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          });
        });
      }),
    );
  });
};
