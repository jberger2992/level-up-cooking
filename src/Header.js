import React from "react";
import Nav from "./components/Nav";

function Header(){
    return(<>
        <header className="text-center">
            <h1>Level-Up Cooking</h1>
            <Nav/>
        </header>
    </>)
};

export default Header;