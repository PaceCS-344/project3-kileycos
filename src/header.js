import { Link } from 'react-router-dom';
import Button from "./button.js"
import './styles.css'

export default function Header() {
    return (
        <div className="header">
            <h1 > This is definetly a title </h1>
            <nav>
                <Link to = "/"> <Button> Home </Button> </Link> {" "}
                <Link to = "/profile"> <Button> Profile </Button> </Link> {" "}
                <Link to = "/art"> <Button> Art Portfolio </Button> </Link> {" "}
                <Link to = "/code"> <Button> Coding Portfolio </Button> </Link> {" "}
                <Link to = "/contact"> <Button> Contact </Button> </Link>
            </nav>
        </div>   
    );
}