import React from "react"
import containerStyle from "../styles/container.module.scss"

export default ({ children }) => (
  <main className={containerStyle.container}>
    {children}
  </main>
)
 
