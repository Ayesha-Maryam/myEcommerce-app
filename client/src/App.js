import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/Private';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/dashboard" element={<PrivateRoute/>}>
<Route path="" element={<Dashboard/>}/>
  </Route>

  <Route path="/dashboard" element={<AdminRoute/>}>
<Route path="admin" element={<AdminDashboard/>}/>
  </Route>
<Route path="/register"  element={<Register/>}/>
<Route path="/forgot-Password"  element={<ForgotPassword/>}/>
<Route path="/login"  element={<Login/>}/>
<Route path="/about"  element={<About/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="*"  element={<Pagenotfound/>}/>

</Routes>
     
    </> 
  );
}

export default App;
