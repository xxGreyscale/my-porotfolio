import { Container, Row, Col, Stack } from "react-bootstrap"
import './header.scss'

import {ReactComponent as HamburgerMenu} from '../../assets/svg/menu.svg'



const Header = () => {
    return(
        <>
            <div className="header my-5">
                <Container>
                    <Row>
                        <Col>
                            <Stack direction="horizontal">
                                <h5 className="text-weight-semi-bold mb-0">
                                    madebysalinastic
                                </h5>

                                <div className="ms-auto menu">
                                    <HamburgerMenu></HamburgerMenu>
                                </div>
                                
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default Header