import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h2 className='mt-5 text-center'>Create a job-winning Resume in minutes</h2>

      <div className='row justify-content-center align-items-center' style={{ height: '70vh' }}>
        <div className='col-4 border shadow p-5 text-center'>
          <IoDocumentTextOutline className='text-primary fs-1 mb-3' />
          <h4>Add your information</h4>
          <p>Add pre-written examples to each section</p>

          <h5>Step 1</h5>

        </div>
        <div className='col-1'></div>
        <div className='col-4 border shadow p-5'>
          <HiOutlineDocumentDownload className='text-danger fs-1 mb-3'/>
          <h4>Download your Resume</h4>
          <p>Download ans start applying</p>

          <h5>Step 2</h5>
        </div>
      </div>
       <Link to={'/resume'}>
              <button className='btn btn-primary'>Make Your Resume</button>
            </Link>
    </div>
  )
}

export default ResumeGenerator