import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Container from "../components/container"
import Heading from "../components/heading"
import projectStyle from "../styles/projects.module.scss"
import SEO from "../components/SEO"

export default ({ data }) => {
  
   return (
    <Layout>
      <SEO title="Проекты" />
      <Container>
        <section>
          <Heading text="Мои проекты"/>
          <p>Данный сайт является моим последним проектом, он же первый, на пути освоения React. В дополнение к нему я прикладываю работы, сделанные мной в последнее время. Ссылки ведут на мой профиль в GitHub, где расположен код этих работ. Все они являются примерами верстки общедоступных шаблонов.</p>
      
          <ul className={projectStyle.list}>
            {data.allProjectsJson.edges.map(({ node }) => (
              <li key={node.id}>
                <a href={node.url} target="_blank" rel="noopener noreferrer">{node.title}</a>
                <p>{node.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allProjectsJson(sort: {order: DESC, fields: date}) {
      edges {
        node {
          title
          url
          date(formatString: "MM.YYYY")
          id
          description
        }
      }
    }
  }
`