import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import Heading from "../components/heading"
import aboutStyle from "../styles/about.module.scss"
import Contact from "../components/contact"
import SEO from "../components/SEO"

export default () => {
 const data = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "myself"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
 `)
 

 return (
    <Layout>
    <SEO title="Обо мне" />
     <Container>
     <section className={aboutStyle.aboutMe}>
        <Heading text="Обо мне" />
      
          <img src={data.allFile.edges[0].node.publicURL} alt="Это я"/>
          <h3>Кто я такой</h3>
          <p>Как же ёмко и коротко рассказать о себе? Попробуем, меня зовут Артём Рыжков, я из Белгорода. Я стремлюсь стать хорошим фронтенд-разработчиком, а в свободное время я езжу на велосипеде, вдохновляюсь искусством, учу иностранные языки, забочусь о своём коте и строю большие планы на будущее вместе со своей девушкой. 
           </p>
          <h3>О моём профессональном пути.</h3>
          <p>По образованию я историк и, даже работал три года учителем истории в школе, но затем все переменилось - я узнал вебразработке. Некоторое время она оставалась моим увлечением и я занимался ей только в свободное от работы время. Думаю, стоит сказать о моем пути.., а путь, наверно, такой же как у многих тех, кто решил поменять свою карьеру в сторону веба: переход по ссылке на Geekbrains, просмотр их бесплатных видео, поиски чего-то еще, Webref, learn.Javascript, Codeacademy, freeCodeCamp, MDN, чтение "Подробного руководства" Дэвида Флэнагана и множества статей.</p>
          <p>Потом начались поиски работы. Счастливый случай свел меня со старым знакомым, который работал в студии <a href="https://web2age.com/#section-1" target="_blank" rel="noopener noreferrer">Web2Age</a>. Собеседование, тестовое задание и вот, спустя пару месяцев я работаю там на должности верстальщика. К сожалению, поработать там долго не пришлось, но сотрудничество с ними не завершилось - меня зовут как фрилансера в их проекты.
          Сейчас в моей жизни начался новый этап - поиск работы.</p>
          <h3>Что я знаю, пробовал, хочу узнать и попробовать.</h3>
          <p>Впереди ещё долгий путь, но на данный момент я работал с небезызвестной троицей: HTML, CSS, JS, не обошёл стороной jQuery, Sass, git, npm. Я пробовал освоить Webpack, но сильно не углубился в эту тему. Сейчас изучаю React.</p>
          <Contact />
        
      </section>
     </Container>
      
    </Layout>
  )
}