import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';


function Preview({ userInput }) {
    // console.log(userInput);

    return (
        <div>
            {
                userInput.personalData.name != "" &&
                <>
                    <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                            {/* download */}
                            <button className='btn fs-3 text-primary'><FaFileDownload /></button>
                            {/* edit */}
                            <div> <Edit /> </div>
                            {/* history */}
                            <Link to={'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
                            {/* back */}
                            <Link to={'/resume'} className='btn text-primary'>BACK</Link>
                        </Stack>
                    </Stack>
                    <Box component="section" >
                        <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
                            <h2>{userInput.personalData.name}</h2>
                            <h6>{userInput.personalData.jobTitle}</h6>
                            <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span> | </p>
                            <p>
                                <Link href={userInput.personalData.github}>GITHUB</Link> |
                                <Link href={userInput.personalData.linkedin}>LINKEDIN</Link> |
                                <Link href={userInput.personalData.portfolio}>PORTFOLIO</Link>
                            </p>
                            <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                            <p className='text-start'>{userInput.summary}</p>
                            <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                            <h5>{userInput.education.course}</h5>
                            <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span></p>
                            <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                            <h5>{userInput.experience.jobRole}</h5>
                            <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
                            <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                            <Stack justifyContent={'space-evenly'} direction="row" sx={{ flexWrap: 'wrap', gap: '8px' }}>
                                {userInput.skills?.map(skill => (
                                    <Button variant="contained">{skill}</Button>
                                ))}

                            </Stack>
                        </Paper>
                    </Box>
                </>
            }
        </div>
    )
}

export default Preview