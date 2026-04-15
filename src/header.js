import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1> I don't know what to title this </h1>
            <nav>
                <Link to = "/"> Home </Link> | {" "}
                <Link to = "/profile"> Profile </Link> | {" "}
                <Link to = "/art"> Art Portfolio </Link> | {" "}
                <Link to = "/code"> Coding Portfolio </Link> | {" "}
                <Link to = "/contact"> Contact </Link>
            </nav>
        </header>   
    );
}