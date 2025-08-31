import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function History() {
  // state for holding resumes that display in history
  const [resume, setResume] = useState([])

  useEffect(() => {
    getHistory()
  }, [resume])

  const getHistory = async () => {
    try {
      const result = await getHistoryAPI()
      // console.log(result);
      setResume(result.data)
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(resume)
  const handleRemoveHistory = async(id)=>{
    try{
      await deleteHistoryAPI(id)
      getHistory()
    }catch(err){
      console.log(err);     
    }
  }
  
  return (
    <div>
      <h1 className='text-center mt-5'>Resume Downloaded History</h1>
      <Link to={'/'} style={{ marginTop: '-50px', textDecoration: 'none', fontWeight: 'bold' }} className='float-end m-2'>BACK</Link>

      <Box component="section" className='container-fluid m-3'>
        <div className='row'>
          {
            resume.length > 0 ?
              resume?.map((item, index) => (
                <div key={index} className='col-md-4'>
                  <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
                    <div className='d-flex align-items-center justify-content-evenly'>
                      <h6>Download At: <br />{item?.timeStamp}</h6>
                      <Button onClick={() => handleRemoveHistory(item?.id)} className='btn text-danger fs-4 ms-5'><MdDelete /></Button>
                    </div>
                    <div className='border rounded p-3'>
                      <img className='img-fluid' src={item?.imgURL} alt="resume" />
                    </div>
                  </Paper>
                </div>
              ))
              :
              <p>History is empty!!!</p>
          }
        </div>
      </Box>
    </div>
  )
}

export default History