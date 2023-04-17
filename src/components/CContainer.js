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
                <CHome statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
            </div>
        )
    }

}

export default CHeader;