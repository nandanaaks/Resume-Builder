import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <section className='container-fluid row align-items-center' style={{ width: '100%', overflow: 'hidden', height: '100vh', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>

                <div className="row align-items-center">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: "rgb(255,255,255,0.2)" }}>
                        <h3>Designed to get hired.</h3>
                        <h4>Your skills, your story, your next job - all in one.</h4>
                        <Link to={'/resume'}>
                            <button className='btn text-light' style={{ backgroundColor: 'indigo' }}>Make Your Resume</button>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>

            </section>

        </>
    )
}

export default LandingPage