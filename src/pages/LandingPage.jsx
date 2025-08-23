import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <section className='container-fluid row align-items-center' style={{ width: '100%', overflow: 'hidden', height: '100vh', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>

                <div className="row py-5 ">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 shadow py-5 rounded text-center" style={{ backgroundColor: "rgb(255,255,255,0.3)" }}>
                        <h3>Designed to get hired.</h3>
                        <h4>Your skills, your story, your next job - all in one.</h4>
                        <Link to={'/resume'}>
                            <button className='btn text-light' style={{ backgroundColor: 'indigo' }}>Make Your Resume</button>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>

            </section>

            {/* tools */}
            <section className='tools p-5'>
                <h1 className='text-center'>Tools</h1>
                <div className='row align-items-center'>
                    <div className='tool-content col-12 col-md-6 p-5'>
                        <h4>Resume</h4>
                        <p>Create unlimited new resumes and easily edit them afterwards.</p>

                        <h4>Cover Letters</h4>
                        <p>Easily write professional cover letters.</p>

                        <h4>Jobs</h4>
                        <p>Automatically recieve new and relevant job postings.</p>

                        <h4>Applications</h4>
                        <p>Effortlessly manage ana track your job applications in an organized manner.</p>
                    </div>
                    <div className='tool-img col-12 col-md-6'>
                        <img className='w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/uk/cv-builder-templates@3x.png" alt="tools" />
                    </div>
                </div>
            </section>

            {/* background image*/}
            <section className='first-section' style={{ width: '100%', overflow: 'hidden', height: '450px', backgroundImage: "url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>
            </section>

            {/* testimonials */}
            <section className="tools p-5">
                <h1 className="text-center">Testimony</h1>
                <div className="row align-items-center">
                    <div className="tool-content col-12 col-md-6 p-5">
                        <h4>Trusted by professionals worldwide.</h4>
                        <p>
                            At LiveCareer, we don't just help you create résumés – we help you land the job.
                            Whether you're a seasoned professional or just starting out, our tools are designed to get results.
                        </p>
                        <p>
                            In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
                        </p>
                        <p>
                            Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.
                        </p>
                    </div>

                    <div className="tool-image col-12 col-md-6">
                        <div className="row">
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_11@3x.png"
                                    alt="testimonial 1"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_09@3x.png"
                                    alt="testimonial 2"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_12@3x.png"
                                    alt="testimonial 3"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_04@3x.png"
                                    alt="testimonial 4"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_01@3x.png"
                                    alt="testimonial 1"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_03@3x.png"
                                    alt="testimonial 2"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_02@3x.png"
                                    alt="testimonial 3"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_10@3x.png"
                                    alt="testimonial 4"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/authors/patrycja_mazurczak_blogpost_author_livecareer_uk_7242024.jpg"
                                    alt="testimonial 1"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                                    alt="testimonial 2"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_07@3x.png"
                                    alt="testimonial 3"
                                />
                            </div>
                            <div className="col-6 col-lg-3 mb-3">
                                <img
                                    className="w-100"
                                    src="https://cdn-images.livecareer.co.uk/images/lc/common/trustpilot/jt/TrustPilot_06@3x.png"
                                    alt="testimonial 4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LandingPage