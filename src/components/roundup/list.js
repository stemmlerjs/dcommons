import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

import Header from './header'
import './style.scss'

const List = ({ posts }) => (
  <main className="container">
    <Header />
    <ol className="list-unstyled">
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug

        return (
          <li key={`List-${node.fields.slug}`}>
            <h3><Link to={node.fields.slug}>{title}</Link></h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </li>
        )
      })}
    </ol>
  </main>
)

export default List
