import React from 'react'
import Layout from '../components/Layout'



export default function BasicPageTemplate({pageContext: {page}, location}) {

  return (
    <Layout
      location={location}
      background={false}
      
    >
    {console.log(page)}
    <div className="basic-page" style = {{paddingTop:'180px', paddingLeft: '10%', paddingRight:'10%', paddingBottom:'60px'}}>
     
      <div className="basic-page-body">
        <div className="basic-page-content" dangerouslySetInnerHTML={{__html: page.content}}></div>
      </div>
    </div>
    </Layout>
  )
}