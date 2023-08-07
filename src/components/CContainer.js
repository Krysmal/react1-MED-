import React, {Component} from "react";
import "./CContainer.css";
import CFooter from './CFooter';
import CHome from './CHome';
import CHistory from "./CHistory";
import CManagment from "./CManagment";
import CDoctor1 from "./CDoctor1";   
import CDoctor2 from "./CDoctor2";
import CContact from "./CContact";
import CAppo from "./CAppo";
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
            case 10:
            return(
                <div className="container">
                    
                    <CAppo statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );
            case 20:
            return(
                <div className="container">
                    
                    <CDoctor1 statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CDoctor2 statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>

                </div>
            );
            case 21:
            return(
                <div className="container">
                    
                    <CDoctor1 statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );
            case 22:
            return(
                <div className="container">
                    
                    <CDoctor2 statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );

            case 31:
            return(
                <div className="container">
                    
                    <CManagment statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );
            case 32:
            return(
                <div className="container">
                    
                    <CHistory statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                    <CFooter statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
                </div>
            );
            case 40:
            return(
                <div className="container">
                    
                    <CContact statusCCon={this.props.statusCCon} updatestatusCCon={this.props.updatestatusCCon}/>
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