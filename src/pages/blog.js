import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Heading from "../components/heading"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  
  return (
    <Layout>
     <Container>
     <section>
        <Heading text="Мой блог" />
        <h4>
         Всего постов: {data.allMarkdownRemark.totalCount}
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div style={{ margin: `1rem 0`}} key={node.id}>
          <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
              </h3></Link>
              <p style={{ color: `#a29f9f`, fontSize: `.9em`}}>
                {node.frontmatter.date}
              </p>
              <p>{node.excerpt}</p>
          </div>
        ))}
      </section>

     </Container>
     
        
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`