import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateForm from './components/UpdateForm';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/update/:id' element={<UpdateForm/>}/>
        <Route path='/addemp' element={<EmployeeForm/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
