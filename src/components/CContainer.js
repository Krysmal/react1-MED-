import React, {Component} from "react";
import "./CContainer.css";
import CFooter from './CFooter';
import CHome from './CHome';
import CHistory from "./CHistory";
class CContainer extends Component
{
    
    render()
    {
        switch(this.props.statusCCon){
            case 0:
            return(
                <div className="container" >
                    
                    <CHome statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );

            case 22:
            return(
                <div className="container">
                    
                    <CHistory statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );

            default:
                return(
                    <div className="container">
                        
                        <CHome statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                        <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    </div>
                );  
        }
        
    }

}

export default CContainer;