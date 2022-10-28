import  NavBar from './NavBar';
import About from './pages/About';
import Cool from './pages/Cool';
import Home from './pages/Home';
import "./styles.css"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
      <>
      <NavBar />
      {/*
      <div>
        <Routes>
            <Route path='/' element={<Home />} />     
            <Route path='/About' element={<About />} />      
            <Route path='/Cool' element={<Cool />} />      
        </Routes>
      </div>
       */}
      {/* <Home /> */}
      <About />
      <Cool />
      
      </>

  )

  }

  export default App;