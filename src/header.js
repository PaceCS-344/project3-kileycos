import { Link } from 'react-router-dom';
import Button from "./button.js"
import './styles.css'
import {useState, useEffect } from 'react';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => setIsOpen(prev => !prev);

    return (
        <>
            <div className={"header" + (isSticky ? " scrolled" : "")}>
                <h1> Kiley Cosgrove Creation </h1>
                <div className="header-right">
                    <nav className="desktop-nav">
                        <Link to="/"><Button>Home</Button></Link>
                        <Link to="/profile"><Button>Profile</Button></Link>
                        <Link to="/art"><Button>Art Portfolio</Button></Link>
                        <Link to="/code"><Button>Coding Portfolio</Button></Link>
                        <Link to="/contact"><Button>Contact</Button></Link>
                        <div className="hamburger-btn" onClick={toggleSidebar}>
                            ☰
                        </div>
                    </nav>
                    
                </div>
            </div>

            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4>Navigation</h4>
                    <div className="close-btn" onClick={toggleSidebar}>
                        <i className="fa fa-times"></i>
                    </div>
                </div>
                <div className="sd-body">
                    <ul>
                        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                        <li><Link to="/profile" onClick={toggleSidebar}>Profile</Link></li>
                        <li><Link to="/art" onClick={toggleSidebar}>Art Portfolio</Link></li>
                        <li><Link to="/code" onClick={toggleSidebar}>Coding Portfolio</Link></li>
                        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            />
        </>
    );
}