import React, {useState} from 'react'
import Layout from '../../components/Layout'
<<<<<<< HEAD
import {toast} from 'react-toastify';


const Register = () => {
=======
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/AuthStyles.css";

const Register = () => {
  <ToastContainer />
>>>>>>> upstream/main
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
<<<<<<< HEAD
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email,password,address,phone);
    toast.success("Register Successfully");
  };
  return (
   <Layout title={"Register - Ecommerce App"}>
    <div className="register"></div>
    <h1>Register Page</h1>
   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" required />
  </div>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" required  />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" required />
  </div>
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Phone" required />
  </div>
  <div className="mb-3">
    <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Address" required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
=======
  const [answer,setAnswer]=useState("")
>>>>>>> upstream/main

  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      console.log("API URL:", process.env.REACT_APP_API);
      const res = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      
if (res && res.data.success) {
  toast.success(res.data && res.data.message);
  navigate("/login");
} 
else {
  toast.error(res.data.message);
}
    }
    catch(error)
    {
      console.log(error);
      toast.error('Something went wrong');
      console.error("AxiosError:", error);

      // Log the response if available
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    
      toast.error('Something went wrong');
    }
  };
  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container" style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="What is your favourite Sports? "
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default Register
