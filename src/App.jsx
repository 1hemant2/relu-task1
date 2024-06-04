import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/welcome' element={<Welcome></Welcome>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
