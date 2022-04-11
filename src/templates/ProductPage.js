/* eslint-disable */
import React from 'react'
import {useEffect, useState} from 'react'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import {Container, Header} from 'semantic-ui-react'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'

//custom bgs

export default function ProductPageTemplate({
  pageContext: {product},
  location,
}) {
 

  
  return (
    <Layout
      location={location}
      background={false}
      
    >
      
      <SEO title={product.title} />
      <ProductSummary product ={product} />
      <ProductAttributes  id = {product.id} />
    </Layout>
  )
}
