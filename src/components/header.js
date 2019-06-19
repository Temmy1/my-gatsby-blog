import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import headerStyle from "../styles/header.module.scss"

const LinkList = props => (
  <li className={headerStyle.list}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default () =>  {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {name: {eq: "logo"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
 
  return (
    <header className={headerStyle.header}>
      <Link to="/">
        <img src={data.allFile.edges[0].node.publicURL} alt="Logotype" className={headerStyle.img}></img>
      </Link>
      <nav>
        <ul>
          <LinkList to="/blog/">Блог</LinkList>
          <LinkList to="/about/">Обо мне</LinkList>
          <LinkList to="/projects/">Портфолио</LinkList>
        </ul>
      </nav>
    </header>
  )
}