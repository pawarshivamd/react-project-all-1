import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='singup-section'>
     <form>
			<label Htlmfor="username">Username:</label>
			<input type="text" id="username" name="username" required />

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required />

			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required />

			<button type="submit" className='btn-style'>Sign Up</button>
		</form>
        </div> 
		{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button> */}

    </>
  )
}

export default SignUp
