import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'

function UserForm() {
  // state for storing user input data
  const [userInput, setUserInput] = React.useState({
    personalData: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    education: {
      course: '',
      college: '',
      university: "",
      year: ""
    },
    experience: {
      jobRole: '',
      company: '',
      jobLocation: '',
      duration: '',
    },
    skills: [],
    summary: ''
  });
  // state for finish
  const [finish, setFinish] = useState(false)
  // state for storing id of created resume
  const[resumeId, setResumeId] = useState("")


  return (
    <>
      {
        finish ?
          <div className="d-flex justify-content-center align-items-center" >
            <Preview setUserInput={setUserInput} resumeId={resumeId} userInput={userInput} finish={finish}/>
          </div>
          :
          <div className='container'>
            <div className='row p-5'>
              <div className='col-lg-6'>
                <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput} setFinish={setFinish}/>
              </div>
              <div className='col-lg-6' style={{marginTop:'100px'}}>
                <Preview userInput={userInput} />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default UserForm