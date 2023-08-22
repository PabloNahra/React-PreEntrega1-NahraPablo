import './App.css'
import NavBar from './components/navbar'
import ItemListContainer from './components/ItemListContainer'



function App() {
  const marca = "ART MATUIZ"
  const link1 = "Nosotras"
  const link2 = "Productos"
  const link3 = "Que es una artesania"
  const link4 = "Contacto"
  const containerPpal = "BIENVENID@S A NUESTRA TIENDA"

  return (
    <div>
      <NavBar title={marca} link1={link1} link2={link2} link3={link3} link4={link4}/>
      <ItemListContainer greeting={containerPpal}/>
    </div>
  )
}

export default App
