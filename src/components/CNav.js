import React, {Component} from "react";
import "./CNav.css";

class CHeader extends Component
{
    
    render()
    {
        

        return(
            <div className="nav">
                
                
                <div className="nav_comp">Zarezerwuj Wizytę</div>
                
                <div className="nav_comp" >{this.props.statusCCon}</div>
                
                    
                <div className="nav_comp" onClick={()=>this.props.updatestatusCCon(this.props.statusCCon+1)}>O Nas</div>
                <div className="nav_comp">Kontakt</div>
            </div>
        )
    }

}

export default CHeader;