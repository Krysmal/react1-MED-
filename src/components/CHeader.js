import React, {Component} from "react";
import "./CHeader.css";
import logo from "../img/logo.svg";
class CHeader extends Component
{
    constructor()
    {
        super();
        this.showHome=this.showHome.bind(this);
    }
    showHome(){
        this.props.updatestatusCCon(0);
    }
    render()
    {
        return(
            <div className="header" >
                
                <div className="header_comp_side" onClick={this.showHome}>
                    <img className="logo_header" src={logo}  alt="logo"></img>
                </div>
                <div className="header_comp_title">MED</div>
                <div className="header_comp_side">
                    
                </div>
            </div>
        )
    }

}

export default CHeader;