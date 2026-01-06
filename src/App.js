import Header from "./Compenent/Header"
import HomePage from "./Pages/HomePage"
import ProductDetaille from "./Pages/ProductDetaille"
import SectionProduct from "./Pages/SectionProduct"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <HomePage />
          <SectionProduct />
        </>} />
        <Route path="/products/:idLien" element={<ProductDetaille />} />
      </Routes>
    </div>
  )
}

export default App
