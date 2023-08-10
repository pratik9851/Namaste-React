import React from "react"

const Header=()=>{
    return (
        <div className="headerContainer">
            <div className="LogoContainer">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JGUehk9zFStIp1pXsFKnaQvQrw6zasPKAw&usqp=CAU" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header