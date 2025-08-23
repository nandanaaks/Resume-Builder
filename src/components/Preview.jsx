import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';


function Preview() {
    return (
        <>
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <h2>name</h2>
                    <h6>jobtitle</h6>
                    <p><span>location</span> | <span>email</span> | <span>phone</span> | </p>
                    <p>
                        <Link href={""}>github</Link> |
                        <Link href={""}> linkedin</Link> |
                        <Link href={""}> portfolio</Link>
                    </p>
                    <Divider>Summary</Divider>
                    
                </Paper>
            </Box>
        </>
    )
}

export default Preview