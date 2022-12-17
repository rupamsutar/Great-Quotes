import Classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <main className={Classes.main}>{props.children}</main>
        </>
    )
}

export default Layout;