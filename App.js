import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
 
 const myLogin = async(e)=>{
 
  e.preventDefault();
  const email = document.querySelector("#exampleInputEmail1").value;
  const password = document.querySelector("#exampleInputPassword1").value;
   console.log(email+ "     "+password);
  
   try{
   const response = await axios({
    method: 'get',
    url: "http://localhost:8080/login/",
    params: {email},
   });
   
   console.log(response);

   if(password === response.data.user.password)
   {
       alert("Welcome User");
   } else {
    alert("Incorrect password");
   }
  } catch (err) {
    console.log(err);
  }
 };
 
 const mySignUp = async(e)=>{
 
  e.preventDefault();
  const firstName = document.querySelector("#inputFirstName").value;
  const lastName = document.querySelector("#inputLastName").value;
  const age = document.querySelector("#inputAge").value;
  const email = document.querySelector("#inputEmail4").value;
  const password = document.querySelector("#inputPassword4").value;
   console.log(firstName+ "   " +lastName+ "   "+age+"         "+email+ "     "+password);
  
   try{
    const response = await axios({
    method: 'get',
    url: "http://localhost:8080/signUp/",
    params: {firstName,lastName,age,email,password},
       
    
   });
   
   console.log(response);

   if(password === response.data.user.password)
   {
       alert("Welcome User");
   } else {
    alert("Incorrect password");
   }
  } catch (err) {
    console.log(err);
  }
 };
 
 
 
  return (
    <div>
      <form onSubmit = {myLogin}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
 <button type="submit" class="btn btn-primary">Submit</button> 
   
   
</form>

<div>
<form onSubmit = {mySignUp}>
  <div class="form-row">
    
  <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Last Name</label>
      <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Age</label>
      <input type="text" class="form-control" id="inputAge" placeholder="Age"/>
    </div>
    
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
    <button type="submit" class="btn btn-primary">SignUp</button>
</form>
</div>
    </div>
    
  );
}

export default App;
