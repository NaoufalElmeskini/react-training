import Menu from "./Menu.jsx";
import {Outlet} from "react-router-dom";

const Layout = () =>
    <div>
        {/*<Header/>*/}
        <Menu/>
        <Outlet/>
    </div>

export default Layout;