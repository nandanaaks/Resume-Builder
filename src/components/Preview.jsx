import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Preview() {
    return (
        <div style={{marginTop:'100px'}}>
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
                    <h2>name</h2>
                    <h6>jobtitle</h6>
                    <p><span>location</span> | <span>email</span> | <span>phone</span> | </p>
                    <p>
                        <Link href={""}>github</Link> |
                        <Link href={""}> linkedin</Link> |
                        <Link href={""}> portfolio</Link>
                    </p>
                    <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                    <p className='fs-5 text-start'>Usersummary</p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                    <h5>course</h5>
                    <p><span>college</span> | <span>university</span> | <span>year</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                    <h5>jobRole</h5>
                    <p><span>company</span> | <span>jobLocation</span> | <span>duration</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                    <Stack justifyContent={'space-evenly'} direction="row" sx={{ flexWrap: 'wrap', gap: '8px' }}>
                        <Button variant="contained">skill</Button>
                    </Stack>
                </Paper>
            </Box>
        </div>
    )
}

export default Preview