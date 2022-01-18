import { useEffect, useState } from "react";
import KUTE from "kute.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const LandingPage = () => {
    const [careerIndex, setCareerIndex] = useState(0);
    const [displayedCareers, setDisplayedCareers] = useState([])
    const careers = [`👨🏽‍💻   Experienced Full Stack Developer`, `🖥    Experienced UX/UI Designer`];
    
    
    useEffect(() => {
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
    <Container>
      <Row>
        <Col>
          <section className="landing first-fold">
            <div className="intro">
            <div className="animated-svg">
              <svg
                id="animated_blob"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="greeting titilium-web-font"> Good Afternoon ☀️</span>
              <h1 className="name">I'm Salum Nassor Omar</h1>
              <div className="description">
                <p className="location titilium-web-font">
                  📍 &nbsp; Based in Dar es Salaam, Tanzania
                </p>
                <div style={{
                  height: 'max(1vh, 1em)',
                  width: '1px',
                  backgroundColor: '#777'
                  }
                }>

                </div>
                  <p className="careers titilium-web-font">{ careers[0] }</p>
              </div>
            </div>
          
            </div>
          </section>
          
          <section>
            <Row>
              <Col lg={8}>
                <h3 className="section title titilium-web-font">
                about me
              </h3>

              <p className="about-me">
              Hello! I’m a 📱 Product Designer and 
              👨🏽‍💻 Front-end Developer building 
              products that people love and easy to 
              use, excited about organic growth, 
              driven teams and great culture.
              </p>

              <p className="caption my-4 titilium-web-font">
              Currently IT Lead at Ideate space, Looking for remote design opportunities as well as open to new challenges
              </p>

              <a href="#">
                more about me
              </a>

              </Col>
              <Col>
              </Col>
            </Row>
          </section>
        </Col>
        
      </Row>
    </Container>
    </>
  );
};

export default LandingPage;
