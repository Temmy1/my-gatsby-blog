import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/SEO"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <section>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
        </section>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`