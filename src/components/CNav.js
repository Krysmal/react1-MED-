import React, {Component} from "react";
import "./CNav.css";

class CHeader extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            dropdown1: false
        };
        this.showdrop1=this.showdrop1.bind(this);
        this.hidedrop1=this.hidedrop1.bind(this);
    }
    
    showdrop1(){
        this.setState({dropdown1 : true})
        
    }
    hidedrop1(){
        this.setState({dropdown1 : false})
        
    }
    render()
    {
        

        return(
            <div className="nav">
                
                
                <div className="nav_comp">Zarezerwuj Wizytę</div>
                
                <div className="nav_comp" onMouseEnter={this.showdrop1}>Nasi Lekarze</div>
                {this.state.dropdown1 ? <div className="dropdown1" onMouseLeave={this.hidedrop1}>aaaaaaaaaaa</div> : null}
                    
                <div className="nav_comp" >O Nas</div>
                <div className="nav_comp">Kontakt</div>
            </div>
        )
    }

}

export default CHeader;