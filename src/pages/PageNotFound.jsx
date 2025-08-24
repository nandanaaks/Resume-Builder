import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{minHeight:'100vh',backgroundColor:'LightGray'}} className='d-flex flex-column justify-content-center align-items-center '>
      <img width={'400px'} src="https://webartdevelopers.com/blog/wp-content/uploads/2018/09/HTML-404-Page-with-SVG.gif" alt="" />
      <h1 >Page Not Found</h1>
      <h5 className='my-4'>Sorry, we couldn't find the page.</h5>
      <Link to={'/'} className='btn text-light' style={{backgroundColor:'indigo'}}> Back to Home</Link>
      </div>
  )
}

export default PageNotFound