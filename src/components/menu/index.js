import { Stack } from "react-bootstrap";
import './menu.scss'


const Menu = () => {
    return (
        <>
        <div className="bottom-menu">
            <Stack className="bottom-menu-items" direction="horizontal" gap={4}>
            <div className="bg-light border">Me</div>
            <div className="bg-light border">my work</div>
            <div className="bg-light border">personal project</div>
            <div className="bg-light border">get in touch</div>
            </Stack>
        </div>
        </>
    )
}

export default Menu;