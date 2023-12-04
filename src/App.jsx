import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div style ={{width:'100vw', height:'100vh'}}>
         <NavBar/>
         <ItemListContainer greeting="Mi primer Componente"/>
    </div>
    
    
  )
}

export default App
