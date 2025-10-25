import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Topics from "./pages/Topics"
import About from "./pages/About"
import "./App.css"
import styles from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import TopicDetail from "./pages/TopicDetail"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:id" element={<TopicDetail />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
