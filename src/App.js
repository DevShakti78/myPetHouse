import logo from './logo.svg';
import './App.css';
import {Navbar}  from "./components/nav"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import {Home} from "./components/home"
import {Form} from "./components/create"
import {Table} from "./components/Table"



function App() {
  return (
    <div className="App">
    <Navbar />
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Table />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/petdetails/:id" element={<Home />}></Route>
      
    </Routes>

    </BrowserRouter>
     
    </div>
  );
}
;

export default App;
