import React, {Component} from "react";
import "./CNav.css";

class CHeader extends Component
{
    render()
    {
        return(
            <div className="nav">
                <div className="nav_comp">Zarezerwuj Wizytę</div>
                <div className="nav_comp">Nasi Lekarze</div>
                <div className="nav_comp">O Nas</div>
                <div className="nav_comp">Kontakt</div>
            </div>
        )
    }

}

export default CHeader;