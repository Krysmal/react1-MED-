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
        this.props.updatestatusCCon(22);
    }
    render()
    {
        

        return(
            <div className="nav">
                
                
                <div className="nav_comp" >Zarezerwuj Wizytę</div>
                
                <div className="nav_comp" onMouseEnter={this.showdrop1} onMouseLeave={this.hidedrop1}>Nasi Lekarze</div>
                {this.state.dropdown1 ? <div className="dropdown dropdown1" onMouseEnter={this.showdrop1} onMouseLeave={this.hidedrop1}>
                    <div className="dropdown_item"> Andrzej Markiewicz</div>
                    <div className="dropdown_item"> Sławomir Kowalski</div>
                </div> : null}
                    
                <div className="nav_comp" onMouseEnter={this.showdrop2} onMouseLeave={this.hidedrop2}>O Nas</div>
                {this.state.dropdown2 ? <div className="dropdown dropdown2" onMouseEnter={this.showdrop2} onMouseLeave={this.hidedrop2}>
                    <div className="dropdown_item">Zarząd</div>
                    <div className="dropdown_item" onClick={this.showHistory} >Historia</div>
                </div> : null}
                <div className="nav_comp" >Kontakt</div>
                
            </div>
        )
    }

}

export default CHeader;