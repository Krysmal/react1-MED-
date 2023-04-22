import React, {Component} from "react";
import "./CNav.css";

class CHeader extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            dropdown1: false,
            dropdown2: false,
            dropdown3: false
        };
        this.showdrop1=this.showdrop1.bind(this);
        this.hidedrop1=this.hidedrop1.bind(this);
        this.showdrop2=this.showdrop2.bind(this);
        this.hidedrop2=this.hidedrop2.bind(this);
        this.showHistory=this.showHistory.bind(this);
        this.showManagment=this.showManagment.bind(this);
        this.showDoctor1=this.showDocror1.bind(this);
        this.showDoctor2=this.showDocror2.bind(this);
        this.showContact=this.showContact.bind(this);
        this.showAppo=this.showAppo.bind(this);
    }
    
    showdrop1(){
        this.setState({dropdown1 : true})
        
    }
    hidedrop1(){
        this.setState({dropdown1 : false})
        
    }
    showdrop2(){
        this.setState({dropdown2 : true})
        
    }
    hidedrop2(){
        this.setState({dropdown2 : false})
        
    }
    showHistory(){
        this.props.updatestatusCCon(32);
    }
    showManagment(){
        this.props.updatestatusCCon(31);
    }
    showDocror1(){
        this.props.updatestatusCCon(21);
    }
    showDocror2(){
        this.props.updatestatusCCon(22);
    }
    showContact(){
        this.props.updatestatusCCon(40);
    }
    showAppo(){
        this.props.updatestatusCCon(10);
    }
    render()
    {
        

        return(
            <div className="nav">
                
                
                <div className="nav_comp" onClick={this.showAppo}>Zarezerwuj Wizytę</div>
                
                <div className="nav_comp" onMouseEnter={this.showdrop1} onMouseLeave={this.hidedrop1}>Nasi Lekarze</div>
                {this.state.dropdown1 ? <div className="dropdown dropdown1" onMouseEnter={this.showdrop1} onMouseLeave={this.hidedrop1}>
                    <div className="dropdown_item" onClick={this.showDoctor1}> Andrzej Markiewicz</div>
                    <div className="dropdown_item" onClick={this.showDoctor2}> Sławomir Kowalski</div>
                </div> : null}
                    
                <div className="nav_comp" onMouseEnter={this.showdrop2} onMouseLeave={this.hidedrop2}>O Nas</div>
                {this.state.dropdown2 ? <div className="dropdown dropdown2" onMouseEnter={this.showdrop2} onMouseLeave={this.hidedrop2}>
                    <div className="dropdown_item" onClick={this.showManagment}>Zarząd</div>
                    <div className="dropdown_item" onClick={this.showHistory}>Historia</div>
                </div> : null}
                <div className="nav_comp" onClick={this.showContact}>Kontakt</div>
                
            </div>
        )
    }

}

export default CHeader;