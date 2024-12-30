import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Movies from './pages/Movies'
import Home from './pages/Home'
import Anime from './pages/Anime';
import axios from 'axios';

function App() {
  

  return (
    <>
    <Router>

        <Routes>

            <Route path = '/' element = { <Home/> } />
            <Route path = '/movies' element = { <Movies/> } />
            <Route path = '/animation' element = {<Anime/>} />

        </Routes>

    </Router>
     
    </>
    
  )
}

export default App




{/* <button onClick={() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((Response) => {console.log(Response.data)});
    }}>
    click
    </button> */}