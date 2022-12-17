import { NavLink } from "react-router-dom";
import Classes from "./MainNavigation.module.css"
const MainNavigation = () => {
    return (
        <header className={Classes.header}>
            <div className={Classes.logo}>Great Quotes</div>
            <nav className={Classes.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={Classes.active} to="/quotes">All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={Classes.active} to="/new-quote">Add a quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;