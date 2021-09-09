import { Route } from "react-router";

const Container = ({children, rest}) => {
 
    return (
        <>
            <main>
                <div className="main">
                    {children}
                </div>
            </main>
        </>
    )
}

const Layout = (props) => {
    const Component = props.component;
    const rest = props.rest;


    return (
        <Route rest={rest} render={matchProps => {

            return (
                <Container>
                    <Component {...matchProps} />
                </Container>
            )
        }} />

    )

}

export default Layout;