import React, {Component} from "react";
import "./CContainer.css";
import CFooter from './CFooter';
import CHome from './CHome';
class CHeader extends Component
{
    render()
    {
        return(
            <div className="container">
                
                <CHome/>
                <CFooter/>
            </div>
        )
    }

}

export default CHeader;