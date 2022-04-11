import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Headroom from 'react-headroom'
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className = 'bgwrap' style = {{backgroundColor: '#f4f1ec', backgroundSize: '100% 100%',}}>
      <div className = 'header-container'>
       
          <Header location={location} />
       
      </div>

      
      <div>
        <main>{children}</main>
        <Footer/>
          
        
      </div>
      </div>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

