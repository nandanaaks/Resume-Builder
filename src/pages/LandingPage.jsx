import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <section className='first-section' style={{ width: '100%', overflow: 'hidden', height: '450px', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: "rgb(255,255,255,0.5)" }}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job - all in one.</h4>
            <Link to={'/resume'}>
              <button className='btn btn-primary'>Make Your Resume</button>
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
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" alt="tools" />
          </div>
        </div>
      </section>

      {/*  */}
      <section className='first-section' style={{ width: '100%', overflow: 'hidden', height: '450px', backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUZzZiRRHx7Ufb1nndGkgi2CI6F5yK8w-SpzyJRkrHDafg8zyIClVtybwl0I7_eArl3o&usqp=CAU')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}>
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

          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="testimonial 1"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt="testimonial 2"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt="testimonial 3"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                  alt="testimonial 4"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="testimonial 1"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt="testimonial 2"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt="testimonial 3"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                  alt="testimonial 4"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="testimonial 1"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                  alt="testimonial 2"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                  alt="testimonial 3"
                />
              </div>
              <div className="col-6 col-lg-3 mb-3">
                <img
                  className="w-100"
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
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