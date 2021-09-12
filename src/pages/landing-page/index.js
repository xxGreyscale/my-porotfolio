import { useEffect, useState } from "react";
import KUTE from "kute.js";

const LandingPage = () => {
    
      const [careerIndex, setCareerIndex] = useState(0);
    const [displayedCareers, setDisplayedCareers] = useState([])
    
    
    useEffect(() => {
      const careers = [`👨🏽‍💻    Full Stack Developer`, `🖥    UX/UI Designer`];
      const tween = KUTE.fromTo(
          "#blob_1",
          { path: "#blob_1" },
          { path: "#blob_2" },
          { repeat: 9999, duration: 3000, yoyo: true,
              complete:function(){
                  tween.start();
              } }
        );
        
        tween.start();
      
    // if (careerIndex === 0) {
    //   setTimeout(() => {
    //     setCareerIndex((careerIndex + 1) % careers.length);
    //   }, 5000);
    // } else {
    //   setTimeout(() => {
    //     setCareerIndex((careerIndex + 1) % careers.length);
    //   }, 5000);
    // }

    if (careerIndex === 0) {
          setTimeout(() => {
            setCareerIndex((careers.length - 1));
          }, 5000);
    } 

    if(careers.length > 0) {
        let tmp = []
        careers.forEach(career => {
            if(tmp.length > 0) {
                setTimeout(() => {
                    console.log(career);
                    tmp.push(career)
                    setDisplayedCareers(tmp)
                }, 3000);
            }
            else {
                tmp.push(career)
                setDisplayedCareers(tmp)
            }
        });
    }

  }, [careerIndex]);

  return (
    <>
      <section className="landing">  
        
        <div className="animated-svg">
          <svg
            id="animated_blob"
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500%"
            viewBox="0 0 650 560"
          >
            <path
              id="blob_1"
              data-name="Blob 1"
              className="cls-1"
              d="M500,207.545c86.264-14.87,193.6-24.286,248.815,43.64C803.254,318.155,747.322,414.229,737.73,500c-7.8,69.751,9.281,147.79-38.971,198.759C649.794,750.482,571.2,749.164,500,751.119c-74.118,2.035-151.279,4.158-209.979-41.14C224.285,659.252,167.219,582.706,174.582,500c7.093-79.673,90.278-122.18,149.771-175.647C378.719,275.493,427.967,219.962,500,207.545"
              transform="translate(-173.94 -196.897)"
            />

            <path
              id="blob_2"
              data-name="Blob 2"
              className="cls-1"
              transform="translate(-173.361 -196.897)"
              style={{ visibility: "hidden" }}
              d="M500,207.545c86.264-14.87,193.6-24.286,248.815,43.64,54.439,66.971,79.2,163.045,69.605,248.815-7.8,69.751-71.41,136.79-119.662,187.759-48.965,51.723-194.3,6.538-351.856-.036S167.219,582.706,174.582,500c7.093-79.673,48.946-171.958,108.439-225.425,54.367-48.86,144.946-54.614,216.979-67.031"
            />
          </svg>
        </div>
        
        <div className="content">
          <span className="greeting"> Good Afternoon ☀️, I am</span>
          <h1 className="name">Salum Nassor Omar</h1>
          <div className="description">
            <p className="location">
              📍 &nbsp; Based in Dar es Salaam, Tanzania
            </p>
            {displayedCareers.length > 0 && (
              <p className="careers">👨🏽‍💻 &nbsp; Full Stack Developer</p>
            )}
            { careerIndex > 0 && (
              <p className="careers">🖥 &nbsp; UX/UI Designer</p>
            )}
          </div>
        </div>
      
      </section>
    </>
  );
};

export default LandingPage;
