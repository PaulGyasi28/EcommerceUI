import React from "react"
import navbar from "./components/navbar"
import analytics from "./components/analytics"
import Newsletter from "./components/Newsletter"
import hero from "./components/hero"
import cards from "./components/cards"
import footer from "./components/footer"

function App() {
  return (
    <div>
      <footer/>
      <cards/>
      <Newsletter/>
      <analytics/>
       <navbar/>
       <hero/> 
    </div>
  )
}