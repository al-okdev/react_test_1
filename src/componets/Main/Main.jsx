import { Link, Outlet } from 'react-router-dom';

export function Main() {
    return (
        <>
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/phones">Phones</Link></li>
        </ul>
        <hr />
        <Outlet />
        </>
    )
}