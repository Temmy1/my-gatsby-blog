import React from "react"
import footerStyle from "../styles/footer.module.scss"

export default () => (
  <footer className={footerStyle.footer}>
    <p>
    © { new Date().getFullYear() } Рыжков Артём. </p> <p>Сделано с помощью <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
    </p>
   
  </footer>
)