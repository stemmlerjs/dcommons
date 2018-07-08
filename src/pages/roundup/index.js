import React from 'react'
import get from 'lodash/get'

import List from '../../components/roundup/list'

const Roundup = ({ data }) => {
  const posts = get(data, 'allMarkdownRemark.edges') || []

  return (
    <List posts={posts} />    
  )
}

export default Roundup

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
