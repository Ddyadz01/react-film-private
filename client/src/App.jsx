import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Movies } from './pages/Movies/Movies';

export const App = () => {
  const token = true;
  return token ? (
    <div className="wrapper">
      <Dashboard />
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
