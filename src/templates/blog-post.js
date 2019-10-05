import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <section>
          <h1>{post.frontmatter.title}</h1>
          <p style={{ color: `#a29f9f`, fontSize: `.9em`}}>
                {post.frontmatter.date}
              </p>
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
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`