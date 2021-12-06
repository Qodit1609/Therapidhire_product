import React from 'react'
import './Login.css';

function Login() {
    return (
        <div id="login">
            <form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group ">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control shadow p-3  bg-white rounded" id="inlineFormInputGroupUsername" placeholder="Username" label="Username"/>
    </div>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control shadow p-3  bg-white rounded" id="inlineFormInputGroupPassword" placeholder="Password" label="Password"/>
    </div>
    
  </div> 

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
      <label class="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn form-control shadow p-2  rounded">Submit</button>
  </div>
  <div class="col-12 content">
   <span>I don't have an account<a href="#">Signup</a></span>
  </div>
</form>

        </div>
    )
}

export default Login;
