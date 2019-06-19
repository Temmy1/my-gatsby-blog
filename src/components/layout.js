import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/global.scss"



export default ({ children }) => (
  <div style={{
    margin: `0 auto`, maxWidth: 1000, padding: `0 2rem`
   }}>
   <Header />
   
    {children}
  
   <Footer />
  </div>
)
 
