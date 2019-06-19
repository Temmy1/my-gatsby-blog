import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Heading from "../components/heading"
import Contact from "../components/contact"
import SEO from "../components/SEO"

export default ({ data }) => {

  return (
    <Layout>
      <SEO title="Главная" />
     <Container>
     <section>
        <Heading text="Привет, вы попали на мой сайт" />

        <p>Я Артём и я занимаюсь версткой сайтов. Но это не всё. Если вам интересно, то вы можете 
        найти больше информации обо мне, перейдя по <Link to="/about/">этой</Link> ссылке. Здесь детально сказано
        о моих навыках, опыте и вообще о том, кто я такой.</p>
        
     
    
        <h2>Последнее из блога.</h2>
      
         
        <Link to={data.allMarkdownRemark.edges[0].node.fields.slug}><p>{data.allMarkdownRemark.edges[0].node.frontmatter.title}{" "}</p></Link>
     
      </section>
      <Contact />
     </Container>
      
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`