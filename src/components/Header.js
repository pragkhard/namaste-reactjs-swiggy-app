import { useState, useEffect } from "react"
import { LOGO_URL } from '../utils/constants';


// Named Export 
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    console.log("Header Render")

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render (just once)

    useEffect(() => {
        // console.log("useEffect Called")
    }, [btnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                {/* <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" /> */}
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='Login' onClick={() => {
                        btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header