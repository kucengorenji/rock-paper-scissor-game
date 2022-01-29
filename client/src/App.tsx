import './App.css';
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
