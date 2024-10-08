import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Expirence from "./components/Expirence"
import Contact from "./components/Contact"


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Expirence />
      <Contact />
    </div>
  )
}

export default App