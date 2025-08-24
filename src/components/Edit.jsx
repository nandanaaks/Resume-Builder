import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen} className='btn fs-3 text-primary'>
                <MdEditDocument />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal Details  */}
                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField id="standard-basic-location" label="Location" variant="standard" />
                        </div>

                        {/* contact details  */}
                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-mail" label="E-mail" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                            <TextField id="standard-basic-github" label="GitHub Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label="Portfolio  Link" variant="standard" />
                        </div>

                        {/* Education Details  */}
                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-college" label="College " variant="standard" />
                            <TextField id="standard-basic-university" label="University" variant="standard" />
                            <TextField id="standard-basic-year" label="Year of Pass" variant="standard" />
                        </div>

                        {/* Professional Details  */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-role" label="Job/Internship" variant="standard" />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-clocation" label="Location" variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>

                        {/* skills  */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField sx={{ width: '400px' }} id="standard-basic-skills" label="Add Skill" variant="standard" />
                            <Button variant="text">Add</Button>
                        </div>
                        <h5>Added Skills :</h5>
                        <div className="d-flex flex-wrap justify-content-between my-3">
                            {/* span must duplicate according to the skills added by user */}
                            <span className="btn btn-outline-primary d-flex align-items-center justify-content-center my-1">React <button className=" btn text-light">X</button></span>
                        </div>

                        {/* Summary  */}
                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself " multiline rows={4} variant="standard" />
                        </div>
                    </Typography>
                    <Button>Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit