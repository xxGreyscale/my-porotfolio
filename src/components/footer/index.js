
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.scss'
// import myResume from 'public/pdf/cv.pdf'

const Footer = () => {
    return(
        <>
             <Container>
                <Row>
                    <Col>
                        <div className='footer d-flex my-3'>
                            <ul className='footer-list'>
                                <li className='list-item'>
                                    <a href='https://www.linkedin.com/in/salum-omar-1b810b19a/' target='_blank' rel="noreferrer">
                                        <img className='ico' width='32' height="32" alt='LinkedIn icon' src={process.env.PUBLIC_URL + '/svg/linkedIn-ico.svg'}/>
                                        LinkedIn
                                    </a>
                                    </li>
                                <li className='list-item'>
                                    <a href='https://github.com/xxGreyscale' target='_blank' rel="noreferrer">
                                        <img className='ico' width='32' height="32" alt='Github icon' src={process.env.PUBLIC_URL + '/svg/github-ico.svg'}/>
                                        Github
                                    </a>
                                </li>
                                <li className='list-item'>
                                    <a href={process.env.PUBLIC_URL + '/pdf/cv.pdf'} download>
                                        <img className='ico' width='32' height="32" alt='File icon' src={process.env.PUBLIC_URL + '/svg/file-ico.svg'}/>
                                        Resume
                                    </a>
                                </li>
                            </ul>

                            <p className='text-left text-xs-left trademark'>
                              &#169; 2022 madebysalinastic
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer