/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urlSlug = require("url-slug")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API createPages. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getPages = makeRequest(
    graphql,
    `
      {

        allContentfulPractice {
          edges {
            node {
              id
              name
              services {
                id
                name
              }
            }
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              id
              title
            }
          }
        }
      }
      
      `
  ).then(result => {
    // Create pages for each practice.
    result.data.allContentfulPractice.edges.forEach(({ node }) => {
      // Create slug from name
      const slug = urlSlug(node.name)
      createPage({
        path: `/practices/${slug}`,
        component: path.resolve(`src/templates/practice.js`),
        context: {
          id: node.id,
        },
      })

      console.log(
        `Created Practice detail page for - http://localhost:8000/practices/${slug}`
      )

      //  Now create pages for the services a practice offers
      //  Get the array of services offered
      const { services } = node

      //  Loop through and create a page for each
      services.forEach(service => {
        // Create slug from name
        const slugService = urlSlug(service.name)
        createPage({
          path: `/practices/${slug}/services/${slugService}`,
          component: path.resolve(`src/templates/practice-service.js`),
          context: {
            id: service.id,
          },
        })
      })
    })
    // Create pages for each blog post.
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      // Create slug from title
      const slug = urlSlug(node.title)
      createPage({
        path: `/blog/${slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })

      console.log(
        `Created Blog detail page for - http://localhost:8000/blog/${slug}`
      )
    })
  })

  // Query for nodes to use in creating pages.
  return getPages
}
