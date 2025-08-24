import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className='text-center mt-5'>Resume Downloaded History</h1>
      <Link to={'/'} style={{ marginTop: '-50px', textDecoration: 'none', fontWeight: 'bold'}} className='float-end m-2'>BACK</Link>

      <Box component="section" className='container-fluid m-3'>
        <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
              <div className='d-flex align-items-center justify-content-between'>
                <h5>Download At: <br />26/4/2025, 7:30:30</h5>
                <button className='btn text-danger fs-3'><MdDelete /></button>
              </div>
              <div className='border rounded p-3'>
                <h2>Name</h2>
                <h6>Job Title</h6>
                <p><span>Location</span> | <span>Email</span> | <span>Phone</span> | </p>
                <p>
                  <Link href={""}> GITHUB</Link> |
                  <Link href={""}> LINKEDIN</Link> |
                  <Link href={""}> PORTFOLIO</Link>
                </p>
                <Divider>Summary</Divider>
                <p className='fs-5 text-start'>user summary</p>
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                <h5>User Education</h5>
                <p><span>College</span> | <span>University</span> | <span>Year</span></p>
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                <h5>User Job</h5>
                <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                  <Button variant="contained">user skill</Button>
                </Stack>
              </div>
            </Paper>
          </div>
        </div>
      </Box>

     
    </div>
  )
}

export default History