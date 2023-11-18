import './App.scss'
import {Helmet} from "react-helmet";
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Chia Ang Yong</title>
      <link rel="canonical" href="http://chiaangyong.github.io/portfolio-website" />
      <meta name="description" content="Chia Ang Yong's Portfolio Website" />
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
