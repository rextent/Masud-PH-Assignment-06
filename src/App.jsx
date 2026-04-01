
import './App.css'
import Counter from './Components/Counter/Counter'
import Footer from './Components/Footer/Footer'
import Footerbanner from './Components/Footerbanner/Footerbanner'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Steps from './Components/Steps/Steps'
import Toolsbar from './Components/Tools/Toolsbar'

const getProducts = async () => {
  const res = await fetch("/product.json")
  return res.json()
}

const productPromise = getProducts();

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Counter></Counter>
      <Toolsbar productPromise={productPromise}></Toolsbar>

      <Steps></Steps>
      <Pricing></Pricing>
      <Footerbanner></Footerbanner>

      <Footer></Footer>
    </>
  )
}

export default App
