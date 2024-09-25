
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import UserDetail from './Components/UserDetail';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}>  </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/users/:id' element={<UserDetail />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     </div>
    </BrowserRouter>

  );
}

export default App;
