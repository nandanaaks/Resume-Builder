import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField } from '@mui/material';
import { editResumeAPI, getAResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

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


function Edit({ resumeId, setUpdateUserInput}) {
    const [userSkill, setUserSkill] = React.useState("")
    const [userInput, setUserInput] = React.useState({})

    const [open, setOpen] = React.useState(false);
    // console.log(resumeId);
    console.log(userInput);


    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])

    const getEditResumeDetails = async () => {
        try {
            const result = await getAResumeAPI(resumeId)
            setUserInput(result?.data)
        } catch (err) {
            console.log(err);

        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = () => {
        if (userSkill) {
            if (userInput.skills.includes(userSkill)) {
                alert("Given Skill is already existing! Add another...")
            } else {
                setUserInput({ ...userInput, skills: [...userInput.skills, userSkill] })
            }
            // to clear add skill textbox
            setUserSkill('')
        }
    }
    // remove skill
    const removeSkill = (skill) => {
        setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
    }

    const handleResumeUpdate = async ()=>{
        try{
            const result = await editResumeAPI(userInput?.id,userInput)
            setUpdateUserInput(result?.data)
            swal("Success!", "Resume updated successfully!", "success");
            handleClose()
        }catch(err){
            console.log(err);
            
        }
    }

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
                            <TextField label="Full Name" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })} value={userInput?.personalData?.name} />
                            <TextField label="Job Title" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} value={userInput?.personalData?.jobTitle} />
                            <TextField label="Location" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} value={userInput?.personalData?.location} />
                        </div>

                        {/* contact details  */}
                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField label="Email" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } })} value={userInput?.personalData?.email} />
                            <TextField label="Phone Number" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } })} value={userInput?.personalData?.phone} />
                            <TextField label="Github Profile Link" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } })} value={userInput?.personalData?.github} />
                            <TextField label="Linkedin Profile Link" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value } })} value={userInput?.personalData?.linkedin} />
                            <TextField label="Portfolio Link" variant="standard"
                                onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } })} value={userInput?.personalData?.portfolio} />
                        </div>

                        {/* Education Details  */}
                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField label="Course Name" variant="standard"
                                onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} value={userInput?.education?.course} />
                            <TextField label="College" variant="standard"
                                onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} value={userInput?.education?.college} />
                            <TextField label="University" variant="standard"
                                onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput?.education?.university} />
                            <TextField label="Year of Passout" variant="standard"
                                onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} value={userInput?.education?.year} />
                        </div>

                        {/* Professional Details  */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField label="Job or Internship" variant="standard"
                                onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput?.experience?.jobRole} />
                            <TextField label="Company Name" variant="standard"
                                onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput?.experience?.company} />
                            <TextField label="Company Location" variant="standard"
                                onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput?.experience?.jobLocation} />
                            <TextField label="Duration" variant="standard"
                                onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput?.experience?.duration} />
                        </div>

                        {/* skills  */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField onChange={e => setUserSkill(e.target.value)} sx={{ width: '400px' }} id="standard-basic-skills" label="Add Skill" variant="standard" value={userSkill} />
                            <Button onClick={addSkill} variant="text">Add</Button>
                        </div>
                        <h6>Selected Skills : </h6>
                        <div className="d-flex flex-wrap my-4">
                            {/* span must duplicate according to the skills added by user */}
                            {
                                userInput?.skills?.length > 0 &&
                                userInput?.skills?.map(item => (
                                    <span key={item} className="btn btn-outline-primary d-flex align-items-center justify-content-center m-1 ">{item} <Button onClick={()=>removeSkill(item)} className=" btn text-light">X</Button></span>
                                ))
                            }
                        </div>

                        {/* Summary  */}
                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself " multiline rows={4} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput?.summary} />
                        </div>
                    </Typography>
                    <Button onClick={handleResumeUpdate}>Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit