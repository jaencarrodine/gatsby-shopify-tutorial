const path = require(`path`)
const { pageList } = require('./lib/basicPages')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            title
            handle
            variants {
              shopifyId
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
            }
            description
            images {
              src
            }
          }
        }
      }
    
    }
  `)

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/ProductPage.js`),
      context: {
        product: node,
      },
    })
  })

  pageList.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: path.resolve(`./src/templates/basicPage.js`),
      context: {
        page
      },
    })
  })

}