import { useEffect, useState } from "react";
import KUTE from "kute.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TentenPoster from '../../assets/img/tenten-poster.png'
import {ReactComponent as RightArrow} from '../../assets/svg/Icon feather-arrow-right.svg'
import {ReactComponent as UpRightArrow} from '../../assets/svg/Icon feather-arrow-up-right.svg'
import Footer from "../../components/footer";
import Header from "../../components/header";
// import Menu from "../../components/menu";



const LandingPage = () => {
  const careers = [`👨🏽‍💻 &nbsp; Full Stack Developer`, `🖥 &nbsp; UX/UI Designer`, `☁️ &nbsp; AWS Cloud Practitioner`];
  const [displayedCareers, setDisplayedCareers] = useState(careers[1])
    
    
    useEffect(() => {
      const careersArr = [`👨🏽‍💻 &nbsp; Full Stack Developer`, `🖥 &nbsp; UX/UI Designer`, `☁️ &nbsp; AWS Cloud Practitioner`]
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
        let i = 0
        setInterval(() => {
          if(i >= (careersArr.length - 1)) {
            i = 0
            setDisplayedCareers(careersArr[i])
            return
          } else {
            i = i + 1
            setDisplayedCareers(careersArr[i])
          }
        }, 5000)
        
      }, []);

      function createMarkup() {
        return {__html: displayedCareers};
      }



  return (
    <>
    <Header></Header>
    <Container>
      <Row>
        <Col>
          <section className="landing first fold">
            {/* <Menu></Menu> */}
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
                <div className="divider" style={{
                  height: 'max(1vh, 1em)',
                  width: '1px',
                  backgroundColor: '#777'
                  }
                }>

                </div>
                {
                  displayedCareers &&
                  displayedCareers === careers[1] &&
                  <p className="careers animate titilium-web-font" dangerouslySetInnerHTML={createMarkup()}></p>
                }
                 {
                  displayedCareers &&
                  displayedCareers === careers[0] &&
                  <p className="careers animate titilium-web-font" dangerouslySetInnerHTML={createMarkup()}></p>
                }
                {
                  displayedCareers &&
                  displayedCareers === careers[2] &&
                  <p className="careers animate titilium-web-font" dangerouslySetInnerHTML={createMarkup()}></p>
                }
              </div>
            </div>
          
            </div>
          </section>
          
          <section className="second fold">
            <Row>
              <Col lg={8}>
                <h3 className="section text-uppercase title titilium-web-font">
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

              <a className="tilium-web-font" href="/">
                more about me <span className="mx-3">
                  <RightArrow width={'10px'}/>
                  </span> 
              </a>

              </Col>

              {/* blob or 3d image here */}
              <Col>
              </Col>
            </Row>
          </section>

        </Col>
        
      </Row>
    </Container>
    <section className="third fold highlight projects">
      <Container>
        <Row>
          <Col>
          <Container>
            <Row>
              <Col>
                <div className="project px-lg-5">
                  <img src={TentenPoster} alt="tenten explore project" className="w-100" />
                  <h3 className="font-weight-bold mt-4">
                    Redefining travel and lifestyle with TenTen Explore
                  </h3>
                  <p className="caption text-uppercase">
                    Product design &nbsp; &#8226; &nbsp; case study &nbsp; &#8226; &nbsp; User experience Design
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>

    </section>

    <section className="fourth fold projects">
      <Container>
        <Row>
          <Col>
                <h3 className="text-weight-semi-bold mt-5">
                  Other Projects
                </h3>

                <div className="other projects">

                  <div className="project">
                    <h4 className="title">
                      Bus shuttle app
                    </h4>
                    <p className="description">
                      Product design for urban area bus shuttle mobile application
                    </p>
                    <a href="." className="disabled">
                      Case study coming soon
                    </a>
                  </div>

                  <div className="project">
                    <h4 className="title">
                      Quantial solution
                    </h4>
                    <p className="description">
                      Interface design and front-end development for Quantial company page with react Gatsby
                    </p>
                    <a href="https://quantial.solutions/">
                      view website 
                      <span className="up-right mx-3">
                      <UpRightArrow width={'8px'} height={'8px'}/>
                      </span>
                    </a>
                  </div>

                  <div className="project">
                    <h4 className="title">
                      Kwanza homes
                    </h4>
                    <p className="description">
                      Front-end development for kwanza homes survey webapp
                    </p>
                    <a href=".">
                      view website
                      <span className="up-right mx-3">
                      <UpRightArrow width={'8px'} height={'8px'}/>
                      </span>
                    </a>
                  </div>

                  <div className="project">
                    <h4 className="title">
                      SNDBX by id8 Space
                    </h4>
                    <p className="description">
                      Landing page interface design and 
                      Front-end dev for SNDBX by ideate 
                      new landing page
                    </p>
                    <a href="https://sndbx.id8.space">
                      view website
                      <span className="up-right mx-3">
                      <UpRightArrow width={'8px'} height={'8px'}/>
                      </span>
                    </a>
                  </div>

                  <div className="project">
                    <h4 className="title">
                      Id8 space - ideate space
                    </h4>
                    <p className="description">
                      User experience design and front-end dev for hackathon feature
                    </p>
                    <a href="https://id8.space">
                      view website
                      <span className="up-right mx-3">
                      <UpRightArrow width={'8px'} height={'8px'}/>
                      </span>
                    </a>
                  </div>


                </div>
          </Col>
        </Row>
      </Container>

    </section>

    <section className="fifth fold contact">
      <Container>
        <Row>
          <Col>
                <h2 className="my-3">
                  Have a gig for me? Get in touch!
                </h2>
                <a href="/" className="caption text-uppercase">
                  📪  &nbsp; Write me an email
                </a>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="footer">
      <Footer></Footer>
    </section>
    </>
  );
};

export default LandingPage;
