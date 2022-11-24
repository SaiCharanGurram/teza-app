import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Router> 
      <Header/>
      <Routes>
      <Route path="/" exact element={<ProductListing/>}/>
      <Route path= "/product/:productId" exact element={<ProductDetail/>} />
      <Route>404 Not Found!</Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App;
