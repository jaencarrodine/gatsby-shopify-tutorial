import React from "react"


import {useEffect, useState} from 'react'

import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import { Header} from 'semantic-ui-react'
import './products.css'
const products = require('../../lib/products')

const Shop = ({location, data}) => {

  const { nodes } = data.allShopifyProduct

  console.log(nodes)

  

  

  return (
    <Layout location={location} background={false}>
      
      <SEO title={'Shop bender'} />

      <ProductList products={products.productList}  nodes = {nodes}/>
    </Layout>
  )
}

export default Shop

/*
const Products = ({ data }) => {
	const { nodes } = data.allShopifyProduct

	return (
		<Layout>
			<Seo title="Products" />
			<Wrapper>
				{nodes?.map((product, index) => (<ProductCard key={index} product={product} />))}
			</Wrapper>
		</Layout>)
}

export default Products*/

export const query = graphql`
	{
		allShopifyProduct {
			nodes {
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
				
			}
		}
	}
`
