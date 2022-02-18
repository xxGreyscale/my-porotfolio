
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.scss'

const Footer = () => {
    return(
        <>
             <Container>
                <Row>
                    <Col>
                        <div className='footer d-flex my-3'>
                            <ul className='footer-list'>
                                <li className='list-item'>
                                        LinkedIn
                                    </li>
                                <li className='list-item'>
                                    Github
                                </li>
                                <li className='list-item'>
                                    Resume
                                </li>
                                <li className='list-item'>
                                    Instagram
                                </li>
                            </ul>

                            <p className='trademark'>
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