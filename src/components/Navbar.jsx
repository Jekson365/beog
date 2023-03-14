import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
function Navbar() {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className={`navigation d-flex justify-content-between align-items-center`}>
                <img id="logo" src="https://assets.website-files.com/63d5ec0c84ce7a139b04638e/63e6fae264e26f6039829955_beog.svg" alt="" />
                <ul className={`d-flex align-items-center pt-2 daa ${active ? 'act' : 'de-act'}`}>
                    <li className="nav-item p-4">
                        <a href="">Home</a>
                    </li>
                    <li className="nav-item p-4">
                        <a href="">Blog</a>
                    </li>
                    <li className="nav-item p-4">
                        <a href="">About</a>
                    </li>
                    <li className="nav-item p-4">
                        <a href="">Contact</a>
                    </li>
                </ul>
                <button className="contact da-a">Contact us</button>
                <div className="switch" onClick={() => setActive(!active)}>
                    <FaBars />
                </div>
            </div>
            <div className="bg-blur"></div>
        </>
    )
}

export default Navbar;