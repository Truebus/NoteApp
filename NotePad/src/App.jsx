import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { NavBar } from './Components/NavBar'
import { Register } from './Components/Register'
import { Login } from './Components/Login'
import { Footer } from './Components/Footer'
import { Privacy } from './Components/Privacy'
import { Features } from './Components/Features'
import { About } from './Components/About'
import { NotFound } from './Components/NotFound'
import { MapData } from './Components/MapData'
import { UpdateForm } from './Components/Update'
import { Detail } from './Components/Detail'

function App() {

  return (
   <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/feat' element={<Features/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/privacy' element={<Privacy/>} ></Route>
      <Route path='/noteapp' element={<MapData/>} ></Route>
      <Route path='/update/:id' element={<UpdateForm/>} ></Route>
      <Route path='/detail/:id' element={<Detail/>} ></Route>
      <Route path='/*' element={<NotFound/>} ></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
