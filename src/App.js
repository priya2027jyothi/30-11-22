
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
     <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        
        </Routes>
        </BrowserRouter>
    </div>

  )

}
export default App

//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import StateExample from './StateExample'
//import FuncProps from './FuncProps'


//import DemoExample from './DemoExample'
//import Events from './Events'
{/*function App(){
  return(
    <section>
    <Events/>
  {/<DemoExample price="1st price"/>/}*/}
    {/*<StateExample/>
      <FuncProps carname="rolls royce" year="1998"/>
        <h1>hello</h1>*/}
        {/*<PropsExample name="nani" age="20"/>
        < PropsExample name="arjun" age="21"/>*/}
        {/*<p>Good afternoon</p>
            <h1>This is heading tag</h1>
          <img src="https://www.shutterstock.com/image-photo/night-sky-stars-moon-260nw-552010999.jp" alt="image"/>
        <ClassComponent/>
      </section>
  )
}
export default App
*/}

                             