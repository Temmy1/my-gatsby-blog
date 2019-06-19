import React from "react"
import Container from "../components/container"
import Heading from "../components/heading"
import Layout from "../components/layout"


const NotFoundPage = () => (
  <Layout>
    <Container>
      <Heading text="Такой страницы не существует"/>
      <p>Похоже, вы свернули нетуда...</p>
    </Container>
    
  </Layout>
)

export default NotFoundPage
