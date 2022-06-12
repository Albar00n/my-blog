import { Fragment } from 'react'
import Nav from './main-nav'
function Layout(props){
    return(
        <Fragment>
            <Nav />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;