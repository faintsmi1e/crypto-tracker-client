import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Navlayout from './layouts/NavLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navlayout />}>
            <Route index element={<LoginForm />}></Route>
            <Route exact path='login/' element={<LoginForm />} />
            <Route exact path='signup/' element={<RegistrationForm />} />
            <Route path='*' element={'123'}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
