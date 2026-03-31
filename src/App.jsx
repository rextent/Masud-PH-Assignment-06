
import './App.css'
import Counter from './Components/Counter/Counter'
import Footerbanner from './Components/Footerbanner/Footerbanner'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Steps from './Components/Steps/Steps'
import Toolsbar from './Components/Tools/Toolsbar'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Counter></Counter>
      <Toolsbar></Toolsbar>

      <Steps></Steps>
      <Pricing></Pricing>
      <Footerbanner></Footerbanner>
    </>
  )
}

export default App
