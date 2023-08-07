import React from "react";
import "./style.css"
class Header extends React.Component{
    render(){
        return <header>
            <p className="content">Content here</p>
            <p className="secondary">Secondary Column</p>
        </header>
    }
}
export default Header