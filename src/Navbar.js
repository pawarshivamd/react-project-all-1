
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
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-center" id="exampleModalLabel"></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                <div>
                  <h1 className='text-center'>Sign Up</h1>
                </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Username:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-email-name" className="col-form-label">Email Address:</label>
                    <input type="email" className="form-control" id="recipient-email-name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="col-form-label">Password:</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="c-password" className="col-form-label">Confirm Password:</label>
                    <input type="password" className="form-control" id="c-password" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">I accept the Terms of Use & Privacy Policy.</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Sumbit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nvabar
