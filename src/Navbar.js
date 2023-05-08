
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Nvabar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <section className='nav-bg'>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" onClick={() => setshow(!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>


              </ul>
              <form className="d-flex">
                <button className="btn  btn-style " type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><Link to="#">Sign up{""}</Link> </button>

                <button className="btn  btn-style " type="submit">Login{""}</button>
              </form>
            </div>
          </div>
        </nav>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-center" id="exampleModalLabel"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                <div>
                  <h1 className='text-center'>Sign Up</h1>
                </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Username:</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-email-name" class="col-form-label">Email Address:</label>
                    <input type="email" class="form-control" id="recipient-email-name" />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="col-form-label">Password:</label>
                    <input type="password" class="form-control" id="password" />
                  </div>
                  <div class="mb-3">
                    <label for="c-password" class="col-form-label">Confirm Password:</label>
                    <input type="password" class="form-control" id="c-password" />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I accept the Terms of Use & Privacy Policy.</label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Sumbit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nvabar
